const { Router } = require('express');
const router = Router();
const { getSensorValues } = require('../controllers/sensor.controller');
router.post('/sensor/values', getSensorValues);

module.exports = router;