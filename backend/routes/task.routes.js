const express = require('express');
const router = express.Router();
const { createTask, getTasksByUserId, getTaskById, updateTask, deleteTask } = require('../controllers/task.controller');

router.post('/task', createTask);
router.get('/tasks/:userId', getTasksByUserId);
router.get('/task/:id', getTaskById);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;