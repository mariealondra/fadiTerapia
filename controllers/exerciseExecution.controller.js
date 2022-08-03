const prisma = require('../config/prisma.client');
const  getSensorValues  = require('./sensor.controller');


const createExeciseExecution = async (req, res) => {
  try {
    const { patientEmail, exerciseId } = req.body;

    const patient = await prisma.patient.findFirst({ where: { email: patientEmail } });
    const patientId = patient.id;

    if (!patient || !exerciseId) {
      res.json({ message: 'ERROR: paciente o ejercicio no enviado' });
      return;
    }
    const exercise = await prisma.exercise.findUnique({ where: { id: parseInt(exerciseId) } });
    const createdExerciseExecution = await prisma.exerciseExecution.create({
      data: {
        patient: {
          connect: { id: patientId },
        },
        exercise: {
          connect: { id: parseInt(exerciseId) },
        },
      },
    });
    const createdGraph = await prisma.graph.create({
      data: {
        title: exercise.name,
        image: 'NA',
        exerciseExecution: {
          connect: { id: createdExerciseExecution.id },
        },
      },
    });
    res.json({ execution: createdExerciseExecution, graph: createdGraph });
  } catch (error) {
    console.log(error);
  }
};

const addExerciseExecutionMeasure = async (req, res) => {
  try {
    const signal = req.body;
    const parsedSignal = parseFloat(Object.keys(signal)[0]);
    const graphs = await prisma.graph.findMany({ orderBy: { id: 'desc' } });
    const graph = graphs[0];
    const measure = await prisma.measure.create({
      data: {
        voltage: parsedSignal,
        timestamp: new Date(),
        graph: {
          connect: { id: graph.id },
        },
      },
    });
    res.json(measure);
  } catch (error) {
    console.log(error);
  }
};

//Idea: obtener, dado un exerciseExecution, los datos de la gráfica
//En el frontend, una lista de los ejercicios, cuando clickeas, te lleva a la gráfica

const getExerciseExecutionGraph = async (req, res) => {
  try {
    const { exerciseExecutionId } = req.params;

    const graph = await prisma.graph.findFirst({ where: { exerciseExecutionId: parseInt(exerciseExecutionId) }, include: { measures: true } });
    res.json(graph);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createExeciseExecution,
  addExerciseExecutionMeasure,
  getExerciseExecutionGraph,
};