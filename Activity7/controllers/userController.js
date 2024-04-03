const User = require('../models/userModel');

const userController = {
    // Obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    /* listado de solo 10 usuarios */
    get10Users: async (req, res)=>{
        try {
            let users = await User.find().limit(10);
            res.json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },    

    // Crear un nuevo usuario
    createUser: async (req, res) => {
        const userData = req.body;
        try {
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)
};

module.exports = userController;