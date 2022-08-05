const { Router } = require('express');
const router = Router();

//import
const { createExeciseExecution, addExerciseExecutionMeasure, getExerciseExecutionGraph, getExerciseExecutions } = require('../controllers/exerciseExecution.controller');

router.post('/exercise-execution', createExeciseExecution);
router.post('/exercise-execution/measure', addExerciseExecutionMeasure);
router.get('/exercise-execution/:exerciseExecutionId/graph', getExerciseExecutionGraph);
router.get('/exercise-execution/:patientId/exerciseExecution', getExerciseExecutions);

module.exports = router;