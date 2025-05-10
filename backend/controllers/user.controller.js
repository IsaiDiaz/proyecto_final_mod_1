const { User } = require('../models'); 

exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
}

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.update(req.body);
    res.json(user);
}