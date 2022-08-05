const { Router } = require('express');
const router = Router();
const { getUsers, getUsersById, createUsers, updateUsers, deleteUsers } = require('../controllers/users.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);
// router.get('/students/avg/:id', getAvg);

module.exports = router;