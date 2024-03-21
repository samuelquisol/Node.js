const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/api/v1/books', bookController.getAllBooks);
router.get('/api/v1/books/id/:id', bookController.getBookById);
router.post('/api/v1/books', bookController.createBook);
router.patch('/api/v1/books/title/:title', bookController.updateBook);
router.delete('/api/v1/books/title/:title', bookController.deteleteBookByTitle);

module.exports = router;