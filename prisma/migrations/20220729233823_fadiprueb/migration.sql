/*
  Warnings:

  - The primary key for the `Graph` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `exerciseId` on the `Graph` table. All the data in the column will be lost.
  - You are about to drop the column `int` on the `Graph` table. All the data in the column will be lost.
  - You are about to drop the `_ExerciseToPatient` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[exerciseExecutionId]` on the table `Graph` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exerciseExecutionId` to the `Graph` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Graph" DROP CONSTRAINT "Graph_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToPatient" DROP CONSTRAINT "_ExerciseToPatient_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToPatient" DROP CONSTRAINT "_ExerciseToPatient_B_fkey";

-- DropIndex
DROP INDEX "Graph_exerciseId_key";

-- AlterTable
ALTER TABLE "Graph" DROP CONSTRAINT "Graph_pkey",
DROP COLUMN "exerciseId",
DROP COLUMN "int",
ADD COLUMN     "exerciseExecutionId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Graph_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_ExerciseToPatient";

-- CreateTable
CREATE TABLE "ExerciseExecution" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "ExerciseExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" SERIAL NOT NULL,
    "voltage" DECIMAL(65,30) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "graphId" INTEGER NOT NULL,

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Graph_exerciseExecutionId_key" ON "Graph"("exerciseExecutionId");

-- AddForeignKey
ALTER TABLE "ExerciseExecution" ADD CONSTRAINT "ExerciseExecution_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseExecution" ADD CONSTRAINT "ExerciseExecution_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_exerciseExecutionId_fkey" FOREIGN KEY ("exerciseExecutionId") REFERENCES "ExerciseExecution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_graphId_fkey" FOREIGN KEY ("graphId") REFERENCES "Graph"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
