const { Router } = require('express');
const router = Router();
const { getPatients, getPatientById, createPatient, registerPatient, loginPatient, updatePatient, deletePatient } = require('../controllers/patients.controller');

router.get('/patients', getPatients);
router.get('/patients/:patientId', getPatientById);
router.post('/patients', createPatient);
router.post('/patients/register', registerPatient);
router.post('/patients/login', loginPatient);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

module.exports = router;