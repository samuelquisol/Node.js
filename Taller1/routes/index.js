const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.get('/api/v1/books', gradeController.getAllBooks);
router.get('/api/v1/books/id/:id', gradeController.getAllBooks);

module.exports = router;