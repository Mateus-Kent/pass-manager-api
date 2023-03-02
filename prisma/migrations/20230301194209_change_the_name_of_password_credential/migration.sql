/*
  Warnings:

  - You are about to drop the column `credential` on the `Credentials` table. All the data in the column will be lost.
  - Added the required column `credentialPassword` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "credential",
ADD COLUMN     "credentialPassword" TEXT NOT NULL;
