const Student= require('../models/studentModel');

const studentController = {
    
    // Crear un nuevo estudiante
    createStudent: async (req, res) => {
        const studentData = req.body;
        try {
            const newStudent= new Student(studentData);
            const savedStudent= await newStudent.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Listar todos los estudiantes
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.json(students);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener detalles de un estudiante específico
    getStudentById: async (req, res)=>{
        try {
            const {id} = req.params;
            const studentId = await Student.findById(id);
            res.json(studentId);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
            res.status(500).json({ message: 'Internal Server Error' }); 
        }
    },

    // Actualizar un estudiante existente
    updateStudentById: async (req, res) => {
        try {
            const {id} = req.params;
            const studentUpdate = await Student.findByIdAndUpdate(id);
            res.json(studentUpdate);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Borrar un estudiante por su nombre
    deteleteStudentById: async (req, res) => {
        try {
            const {id} = req.params;
            const deleteStudent= await Student.findByIdAndDelete(id);
            res.json(deleteStudent);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

};

module.exports = studentController;