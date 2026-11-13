/*
  Warnings:

  - You are about to drop the column `tokenHash` on the `Invite` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Invite_tokenHash_key";

-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "tokenHash",
ADD COLUMN     "declinedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Invite_email_idx" ON "Invite"("email");
