const Book = require('../models/bookModel');

const bookController = {
    // Obtener todos los libros
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (error) {
            console.error('Error al obtener libros:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    //Consultar un libro por su # de referencia.
    getBookById: async (req, res)=>{
        try {
            const {id} = req.params;
            const bookId = await Book.findById(id);
            res.json(bookId);
        } catch (error) {
            console.error('Error al obtener libros:', error);
            res.status(500).json({ message: 'Internal Server Error' }); 
        }
    },
    
    // Crear un nuevo libro
    createBook: async (req, res) => {
        const bookData = req.body;
        try {
            const newBook = new Book(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error al crear libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar el nombre de un libro
    updateBook: async (req, res) => {
        try {
            const {title} = req.params;
            const bookUpdate = await Book.findOneAndUpdate({title:title}, {$set: {title: 'Nombre Actualizado'}});
            res.json(bookUpdate);
        } catch (error) {
            console.error('Error al crear libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Borrar un libro por su nombre
    deteleteBookByTitle: async (req, res) => {
        try {
            const {title} = req.params;
            const deleteBook = await Book.findOneAndDelete({title: title});
            res.json(deleteBook);
        } catch (error) {
            console.error('Error al crear libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

};

module.exports = bookController;