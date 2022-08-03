// const { Router } = require('express');
// const router = Router();

// const { getTherapist, getTheraById, createTherapist, registerTherapist,loginTherapist, updateTherapist, deleteTherapist } = require('../controller/therapist.controller');
// router.get('/therapist', getTherapist);
// router.get('/therapist/:id', getTheraById);
// router.post('/therapist', createTherapist);
// router.post('/therapist/register', registerTherapist);
// router.post('/therapist/login', loginTherapist);
// router.put('/therapist/:id', updateTherapist);
// router.delete('/therapist/:id', deleteTherapist);

// module.exports = router;

const { Router } = require('express');
const router = Router();
const { registerTherapist, loginTherapist } = require('../controllers/therapist.controller');
// router.post('/therapist', registerTherapist);
router.post('/therapist/register', registerTherapist);
router.post('/therapist/login', loginTherapist);
module.exports = router;