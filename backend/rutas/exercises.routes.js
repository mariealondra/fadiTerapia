const { Router } = require('express');
const router = Router();
const { getExercises, getExercisesById, createExercises, updateExercises, deleteExercises } = require('../controllers/exercises.controller');
router.get('/therapist', getExercises);
router.get('/therapist/:id', getExercisesById);
router.post('/therapist', createExercises);
router.put('/therapist/:id', updateExercises);
router.delete('/therapist/:id', deleteExercises);
module.exports = router;