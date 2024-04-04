// Pasos
/* 1. Importar el esquema en variable de consulta */
/* 2. Importar recursos de seguridad y asignar token 
secreto */
/* 3. Crear controller */
    /* 3.1 Construir consultas gestionando casos de error */
/* 4. Exportar controller */

//----------------------------------------------------------

/* 1. Importar el esquema en variable de consulta */
const Student = require('../models/studentModel');

/* 2. Importar recursos de seguridad y asignar token 
secreto */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "##contraseña##"; 

/* 3. Crear controller */
const studentController = {
    /* 3.1 Construir consultas gestionando casos de error */
    
    /* Read */
    getAllStudents: async (req, res)=> {
        try {
            const students = await User.find();
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentById: async (req, res)=> {
        try {
            const students = await User.find();
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentByName: async (req, res)=> {
        try {
            const students = await User.find();
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentByAge: async (req, res)=> {
        try {
            const students = await User.find();
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Update */
    updateStudentById: async (req, res) => {
        try {
            const id = req.params.id;
            const student = Student.findById(id)
            res.status(200).json(student);
        } catch (error) {
            console.error('Error al actualizar estudiante:', error);
            res.status(501).json({message: 'Not implemented'});
        }
    },

    /* Post */
    createStudent: async (req,res) => {
        try {
            const studentData = req.body;
            const newStudent = new Student(studentData);
            const savedUser = await newStudent.save();
            res.status(201).json(savedUser)
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        }
    },

    /* Delete */
    deleteStudentByName: async (req,res) => {
        try {
            const name = req.params;
            const deleteStudent = Student.findOneAndDelete({name: name});
            res.status(202).json(deleteStudent);
        } catch (error) {
            console.error('Error al borrar el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

/* 4. Exportar controller */
module.exports = studentController;