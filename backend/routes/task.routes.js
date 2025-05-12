const express = require('express');
const router = express.Router();
const { createTask, getTasksByUserId, getTaskById, updateTask, updateProgress, deleteTask, getTodayTasksByUserId } = require('../controllers/task.controller');

router.post('/task', createTask);
router.get('/tasks/:userId', getTasksByUserId);
router.get('/tasks/:userId/today', getTodayTasksByUserId);
router.get('/task/:id', getTaskById);
router.put('/task/:id', updateTask);
router.put('/task/:id/progress', updateProgress);
router.delete('/task/:id', deleteTask);

module.exports = router;