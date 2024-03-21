const Teacher = require('../models/teacherModel');

const teacherController = {
    
    // Crear un nuevo profesor
    createStudent: async (req, res) => {
        const teacherData = req.body;
        try {
            const newTeacher= new Student(teacherData);
            const savedTeacher= await newTeacher.save();
            res.status(201).json(savedTeacher);
        } catch (error) {
            console.error('Error al crear profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Listar todos los profesores
    getAllTeachers: async (res) => {
        try {
            const teachers = await Teacher.find();
            res.json(teachers);
        } catch (error) {
            console.error('Error al obtener profesores:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener detalles de un profesor específico
    getStudentById: async (req, res)=>{
        try {
            const {id} = req.params;
            const studentId = await Teacher.findById(id);
            res.json(studentId);
        } catch (error) {
            console.error('Error al obtener profesores:', error);
            res.status(500).json({ message: 'Internal Server Error' }); 
        }
    },

    // Actualizar un profesor existente
    updateStudentById: async (req, res) => {
        try {
            const {id} = req.params;
            const studentUpdate = await Teacher.findByIdAndUpdate(id);
            res.json(studentUpdate);
        } catch (error) {
            console.error('Error al crear profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Borrar un profesor por su nombre
    deteleteStudentById: async (req, res) => {
        try {
            const {id} = req.params;
            const deleteStudent= await Teacher.findByIdAndDelete(id);
            res.json(deleteStudent);
        } catch (error) {
            console.error('Error al crear profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

};

module.exports = teacherController;