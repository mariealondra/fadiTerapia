const { Router } = require('express');
const router = Router();
const { getTherapist, getTherapistById, createTherapist, updateTherapist, deleteTherapist } = require('../controllers/therapist.controller');
router.get('/therapist', getPatients);
router.get('/therapist/:id', getTherapistById);
router.post('/therapist', createTherapist);
router.put('/therapist/:id', updateTherapist);
router.delete('/therapist/:id', deleteTherapist);
module.exports = router;