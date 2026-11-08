/*
  Warnings:

  - You are about to drop the `installment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[savingsGoalId,type]` on the table `Payout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SavingsStatus" AS ENUM ('ACTIVE', 'MATURED', 'WIDTHDRAWN');

-- CreateEnum
CREATE TYPE "UnlockRule" AS ENUM ('AT_END_DATE', 'AT_TARGET');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "LedgerType" ADD VALUE 'HELD_APPIED';
ALTER TYPE "LedgerType" ADD VALUE 'SAVINGS_DEPOSIT';
ALTER TYPE "LedgerType" ADD VALUE 'SAVINGS_WITHDRAWAL';

-- AlterEnum
ALTER TYPE "PayoutType" ADD VALUE 'SAVING_WITHDRAWAL';

-- DropForeignKey
ALTER TABLE "LedgerEntry" DROP CONSTRAINT "LedgerEntry_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_installmentId_fkey";

-- DropForeignKey
ALTER TABLE "Payout" DROP CONSTRAINT "Payout_cycleId_fkey";

-- DropForeignKey
ALTER TABLE "Payout" DROP CONSTRAINT "Payout_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "installment" DROP CONSTRAINT "installment_cycleId_fkey";

-- DropForeignKey
ALTER TABLE "installment" DROP CONSTRAINT "installment_membershipId_fkey";

-- AlterTable
ALTER TABLE "LedgerEntry" ADD COLUMN     "savingsGoalId" TEXT,
ALTER COLUMN "groupId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "savingsDepositId" TEXT,
ALTER COLUMN "installmentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payout" ADD COLUMN     "savingsGoalId" TEXT,
ALTER COLUMN "cycleId" DROP NOT NULL,
ALTER COLUMN "membershipId" DROP NOT NULL;

-- DropTable
DROP TABLE "installment";

-- CreateTable
CREATE TABLE "Installment" (
    "id" TEXT NOT NULL,
    "cycleId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "amountKobo" INTEGER NOT NULL,
    "lateFeeKobo" INTEGER NOT NULL DEFAULT 0,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "status" "InstallmentStatus" NOT NULL DEFAULT 'PENDING',
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Installment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingsGoal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "targetKobo" TEXT NOT NULL,
    "depositKobo" INTEGER NOT NULL,
    "frequency" "Frequency" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "unlockRule" "UnlockRule" NOT NULL,
    "status" "SavingsStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavingsGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingsDeposit" (
    "id" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "amountKobo" INTEGER NOT NULL,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "status" "InstallmentStatus" NOT NULL DEFAULT 'PENDING',
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavingsDeposit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Installment_status_dueAt_idx" ON "Installment"("status", "dueAt");

-- CreateIndex
CREATE INDEX "Installment_membershipId_idx" ON "Installment"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "Installment_cycleId_membershipId_sequence_key" ON "Installment"("cycleId", "membershipId", "sequence");

-- CreateIndex
CREATE INDEX "SavingsGoal_userId_status_idx" ON "SavingsGoal"("userId", "status");

-- CreateIndex
CREATE INDEX "SavingsDeposit_status_dueAt_idx" ON "SavingsDeposit"("status", "dueAt");

-- CreateIndex
CREATE UNIQUE INDEX "SavingsDeposit_goalId_sequence_key" ON "SavingsDeposit"("goalId", "sequence");

-- CreateIndex
CREATE INDEX "LedgerEntry_savingsGoalId_idx" ON "LedgerEntry"("savingsGoalId");

-- CreateIndex
CREATE INDEX "Payment_savingsDepositId_idx" ON "Payment"("savingsDepositId");

-- CreateIndex
CREATE UNIQUE INDEX "Payout_savingsGoalId_type_key" ON "Payout"("savingsGoalId", "type");

-- AddForeignKey
ALTER TABLE "Installment" ADD CONSTRAINT "Installment_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Installment" ADD CONSTRAINT "Installment_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_installmentId_fkey" FOREIGN KEY ("installmentId") REFERENCES "Installment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_savingsDepositId_fkey" FOREIGN KEY ("savingsDepositId") REFERENCES "SavingsDeposit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_savingsGoalId_fkey" FOREIGN KEY ("savingsGoalId") REFERENCES "SavingsGoal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerEntry" ADD CONSTRAINT "LedgerEntry_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerEntry" ADD CONSTRAINT "LedgerEntry_savingsGoalId_fkey" FOREIGN KEY ("savingsGoalId") REFERENCES "SavingsGoal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsGoal" ADD CONSTRAINT "SavingsGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsDeposit" ADD CONSTRAINT "SavingsDeposit_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "SavingsGoal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
