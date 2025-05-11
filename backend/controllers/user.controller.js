const { User } = require('../models'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.authPassword = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: {email} });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { password, ...rest } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'La contraseña es obligatoria' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            ...rest,
            password: hashedPassword
        });

        const userSafe = { ...user._doc };
        delete userSafe.password;

        res.status(201).json(userSafe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

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