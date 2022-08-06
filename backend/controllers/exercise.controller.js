const prisma = require("../../config/prisma.client");

const getExercise = async (req, res) => {
  const exercises = await prisma.exercise.findMany({
    include: {
      patient: true,
      graph: true,
    },
  });
  res.json(exercises);
};
const getExerciseById = async (req, res) => {
  const exerciseId = parseInt(req.params["id"]);
  const exercise = await prisma.exercise.findUnique({
    where: { id: exerciseId },
  });
  res.json(exercise);
};
const createExercise = async (req, res) => {
  const { name, email, password, exerciseId } = req.body;
  const createdExercise = await prisma.exercise.create({
    data: {
      name,
      email,
      password,
      therapist: {
        connect: {
          id: parseInt(ExerciseId),
        },
      },
    },
  });
  res.json(createdExercise);
};
const updateExercise = async (req, res) => {
  const exerciseId = parseInt(req.params["id"]);
  const { name } = req.body;
  const updatedExercise = await prisma.exercise.update({
    where: {
      id: exerciseId,
    },
    data: {
      name,
      description,
    },
  });
  res.json(updatedExercise);
};
const deleteExercise = async (req, res) => {
  const exerciseId = parseInt(req.params["id"]);
  const deletedExercise = await prisma.Exercise.delete({
    where: {
      id: ExerciseId,
    },
  });
  res.json(deletedExercise);
};
module.exports = {
  getExercise,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
};
