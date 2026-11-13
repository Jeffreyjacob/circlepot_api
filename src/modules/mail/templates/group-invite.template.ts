import { brand } from "./brand";
import { button, escapeHtml, renderLayout } from "./layout";
import { formatNaira } from "../../../common/utils/money";

const FREQ: Record<string, string> = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
};

export function groupInviteTemplate(p: {
  inviterName: string;
  groupName: string;
  potKobo: number;
  seats: number;
  frequency: string;
  url: string;
}) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;color:${brand.muted};font-size:14px;">${label}</td>
         <td style="padding:6px 0;text-align:right;font-weight:600;font-size:14px;">${escapeHtml(value)}</td></tr>`;

  const html = renderLayout({
    preheader: `${p.inviterName} invited you to join ${p.groupName}.`,
    heading: "You've been invited to a contribution group",
    bodyHtml: `
      <p style="margin:0 0 16px 0;"><strong>${escapeHtml(p.inviterName)}</strong> invited you to join <strong>${escapeHtml(p.groupName)}</strong> on ${brand.name}.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.tint};border-radius:8px;padding:8px 16px;margin:0 0 8px 0;">
        ${row("Pot per cycle", formatNaira(p.potKobo))}
        ${row("Members", String(p.seats))}
        ${row("You pay each cycle", formatNaira(p.potKobo / p.seats))}
        ${row("Payment frequency", FREQ[p.frequency] ?? p.frequency)}
      </table>
      ${button("View invite", p.url)}
      <p style="margin:0;color:${brand.muted};font-size:14px;">Log in with this email address to see the full terms. Only join groups with people you know personally. The held payout is a limited safeguard, not a guarantee. This invite expires in 7 days.</p>`,
  });

  const text = [
    `${p.inviterName} invited you to join ${p.groupName} on ${brand.name}.`,
    `Pot per cycle: ${formatNaira(p.potKobo)}, ${p.seats} members, ${FREQ[p.frequency] ?? p.frequency} payments.`,
    `View the invite: ${p.url}`,
    "Only join groups with people you know personally. The held payout is a limited safeguard, not a guarantee.",
  ].join("\n");

  return {
    subject: `${p.inviterName} invited you to ${p.groupName}`,
    html,
    text,
  };
}
