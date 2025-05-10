const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUser } = require('../controllers/user.controller');

router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);

module.exports = router;