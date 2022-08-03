/*
  Warnings:

  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `Patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Therapist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condition` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephoneNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Therapist` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `B` on the `_ExerciseToPatient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_therapistId_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToPatient" DROP CONSTRAINT "_ExerciseToPatient_B_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
DROP COLUMN "username",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "condition" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "telephoneNumber" TEXT NOT NULL,
ALTER COLUMN "therapistId" DROP NOT NULL,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Therapist" ADD COLUMN     "lastname" TEXT,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_ExerciseToPatient" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Therapist_email_key" ON "Therapist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToPatient_AB_unique" ON "_ExerciseToPatient"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToPatient_B_index" ON "_ExerciseToPatient"("B");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "Therapist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToPatient" ADD CONSTRAINT "_ExerciseToPatient_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
