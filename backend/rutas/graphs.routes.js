const { Router } = require('express');
const router = Router();
const { getGraphs, getGraphsById, createGraphs, updateGraph, deleteGraphs } = require('../controllers/therapist.controller');
router.get('/graphs', getGraphs);
router.get('/graphs/:id', getGraphsById);
router.post('/graphs', createGraphs);
router.put('/graphs/:id', updateGraph);
router.delete('/graphs/:id', deleteGraphs);
module.exports = router;