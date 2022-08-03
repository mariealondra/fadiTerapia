/*
  Warnings:

  - Made the column `therapistId` on table `Patient` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `Therapist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_therapistId_fkey";

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "therapistId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Therapist" ALTER COLUMN "lastname" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "Therapist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
