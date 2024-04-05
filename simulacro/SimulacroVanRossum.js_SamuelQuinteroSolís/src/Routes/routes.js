// Pasos
/* 1. Importar herramienta de manejo de apis */
/* 2. Definir enrutador */
/* 3. Importar controllers */
/* 4. Asignar rutas y sus funciones */
/* 5. Exportar enrutador */
//---------------------------------------------------------

/* 1. Importar herramienta de manejo de apis */
const express = require('express');

/* 2. Definir enrutador */
const router = express.Router();

/* 3. Importar controllers */
const studentController = require('../controllers/studentController')

/* 4. Asignar rutas y sus funciones */
/* Read */
router.get('/api/v1/students', studentController.getAllStudents);
router.get('/api/v1/student/id/:id', studentController.getStudentById);
router.get('/api/v1/student/name/:name', studentController.getStudentByName);
router.get('/api/v1/student/age/:age', studentController.getStudentByAge);

/* Update */
router.put('/api/v1/student/id/:id', studentController.updateStudentById);

/* Post */
router.post('/api/v1/students', studentController.createStudent);

/* Delete */
router.delete('/api/v1/student/:name', studentController.deleteStudentByName);

/* 5. Exportar enrutador */
module.exports = router;