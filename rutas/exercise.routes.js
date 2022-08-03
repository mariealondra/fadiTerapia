const { Router } = require('express');
const router = Router();
const { getExercises } = require('../controllers/exercise.controller');
router.get('/exercises', getExercises);

module.exports = router;