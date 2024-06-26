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
            const students = await Student.find();
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentById: async (req, res)=> {
        try {
            const {id} = req.params;
            const students = await Student.findById(id);
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentByName: async (req, res)=> {
        try {
            const {name} = req.params;
            const students = await Student.find({name: name});
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },
    getStudentByAge: async (req, res)=> {
        try {
            const {age} = req.params;
            const students = await Student.find({age: age});
            res.json(students)
        } catch (error) {
            console.error('Error al obtener Estudiantes:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Update */
    updateStudentById: async (req, res) => {
        try {
            const { _id, name, identification, age } = req.body;
            const updateStudent = await Student.findByIdAndUpdate({_id: _id}, { $set: { identification: identification, name: name, age: age} });
            res.status(201).json(updateStudent)
        } catch (error) {
            console.error('Error al actualizar estudiante:', error);
            res.status(501).json({message: 'Not implemented'});
        }
    },

    /* Create */
    createStudent: async (req,res) => {
        try {
            const studentData = req.body;
            const newStudent = new Student(studentData);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent)
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        }
    },

    /* Delete */
    deleteStudentByName: async (req,res) => {
        try {
            const {name} = req.body;
            const deleteStudent = await Student.findOneAndDelete({name: name});
            res.status(202).json(deleteStudent);
        } catch (error) {
            console.error('Error al borrar el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

/* 4. Exportar controller */
module.exports = studentController;