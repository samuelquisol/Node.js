const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    id: String,
    author: String,
    realiseDate: Number,
    stock: Number,
    shelf: String,
    pdf: String,
    category: String,
    bookPublisher: String,
    summary: String
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;