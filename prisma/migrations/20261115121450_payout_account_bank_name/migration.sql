/*
  Warnings:

  - Added the required column `bankName` to the `PayoutAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PayoutAccount" ADD COLUMN     "bankName" TEXT NOT NULL;
