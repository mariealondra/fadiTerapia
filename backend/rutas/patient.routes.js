const { Router } = require('express');
const router = Router();
const { getPatients, getPatientsById, createPatients, updatePatients, deletePatients } = require('../controllers/patients.controller');

router.get('/patients', getPatients);
router.get('/patients/:id', getPatientById);
router.post('/patients', createPatients);
router.put('/patients/:id', updatePatients);
router.delete('/patients/:id', deletePatients);

module.exports = router;