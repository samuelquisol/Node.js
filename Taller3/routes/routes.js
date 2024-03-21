const express = reuire('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');

/* Student */
router.post('/api/v1/students', studentController.createStudent);
router.get('/api/v1/students', studentController.getAllStudents);
router.get('/api/v1/students/id/:id', studentController.getStudentById);
router.put('/api/v1/students/id/:id', studentController.updateStudentById);
router.delete('/api/v1/students/id/:id', studentController.deteleteStudentById);

/* Teacher */
router.post('/api/v1/teachers', teacherController.createTeacher);
router.get('/api/v1/teachers', teacherController.getAllTeachers);
router.get('/api/v1/teachers/id/:id', teacherController.getTeacherById);
router.put('/api/v1/teachers/id/:id', teacherController.updateTeacherById);
router.delete('/api/v1/teachers/id/:id', teacherController.deteleteTeacherById);


module.exports = router;