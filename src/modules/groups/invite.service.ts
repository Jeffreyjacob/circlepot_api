import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { ConfigService } from "@nestjs/config";
import { MailQueueService } from "../mail/mail.queue.service";
import { GroupStatus, MemberStatus } from "../../generated/prisma/enums";

const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

@Injectable()
export class InviteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly mailQueue: MailQueueService
  ) {}

  async invite(hostId: string, groupId: string, email: string) {
    const group = await this.prisma.group.findFirst({
      where: { id: groupId, hostId },
      select: {
        id: true,
        name: true,
        potKobo: true,
        seats: true,
        frequency: true,
        status: true,
        host: { select: { name: true, email: true } },
      },
    });

    if (!group) throw new NotFoundException("Group not found");
    if (group.status !== GroupStatus.OPEN) {
      throw new ConflictException("This group is no longer open for invites");
    }

    if (email === group.host.email)
      throw new BadRequestException("You are already in this group");

    const now = new Date();

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      const member = await this.prisma.membership.findUnique({
        where: { groupId_userId: { groupId, userId: existingUser.id } },
        select: { status: true },
      });
      if (member?.status === MemberStatus.ACCEPTED) {
        throw new ConflictException("This person is already in the group");
      }
    }

    // A friendly early check only. The real seat claim happens when someone accepts.
    const [accepted, pending] = await Promise.all([
      this.prisma.membership.count({
        where: { groupId, status: MemberStatus.ACCEPTED },
      }),
      this.prisma.invite.count({
        where: {
          groupId,
          acceptedAt: null,
          declinedAt: null,
          expiresAt: { gt: now },
          NOT: { email },
        },
      }),
    ]);

    if (accepted + pending >= group.seats) {
      throw new ConflictException(
        "Eveery seat is taken or has a penfing invite"
      );
    }

    const expiresAt = new Date(now.getTime() + INVITE_TTL_MS);
    const invite = await this.prisma.invite.upsert({
      where: { groupId_email: { groupId, email } },
      create: { groupId, email, expiresAt },
      update: { expiresAt, declinedAt: null, acceptedAt: null },
      select: { id: true, email: true, expiresAt: true },
    });

    await this.mailQueue.enqueue({
      template: "group-invite",
      to: email,
      inviterName: group.host.name,
      groupName: group.name,
      potKobo: group.potKobo,
      seats: group.seats,
      frequency: group.frequency,
      url: `${this.config.getOrThrow<string>("FRONTEND_URL")}/invites`,
    });

    return invite;
  }

  async listForHost(hostId: string, groupId: string) {
    const group = await this.prisma.group.findFirst({
      where: { id: groupId, hostId },
    });
    if (!group) throw new NotFoundException("Group not found");

    return this.prisma.invite.findMany({
      where: { groupId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        expiresAt: true,
        acceptedAt: true,
        declinedAt: true,
        createdAt: true,
      },
    });
  }
}
