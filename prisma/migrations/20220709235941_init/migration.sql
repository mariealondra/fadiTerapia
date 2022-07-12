-- CreateTable
CREATE TABLE "Patient" (
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "therapistId" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Therapist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Therapist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Graph" (
    "int" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Graph_pkey" PRIMARY KEY ("int")
);

-- CreateTable
CREATE TABLE "_ExerciseToPatient" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Graph_exerciseId_key" ON "Graph"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToPatient_AB_unique" ON "_ExerciseToPatient"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToPatient_B_index" ON "_ExerciseToPatient"("B");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "Therapist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToPatient" ADD CONSTRAINT "_ExerciseToPatient_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToPatient" ADD CONSTRAINT "_ExerciseToPatient_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient"("username") ON DELETE CASCADE ON UPDATE CASCADE;
