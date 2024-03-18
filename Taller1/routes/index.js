const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.get('/api/v1/grades', gradeController.getAllGrades);
router.get('/api/v1/grades/id/:id', gradeController.getAllGrades);

module.exports = router;