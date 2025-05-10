const { Task } = require('../models');

exports.createTask = async (req, res) =>{
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

exports.getTasksByUserId = async (req, res) => {
    const { userId } = req.params;
    const tasks = await Task.findAll({ where: { UserId: userId } });
    res.json(tasks);
}

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
}

exports.updateTask = async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    await task.update(req.body);
    res.json(task);
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    await task.destroy();
    res.status(204).send();
}

