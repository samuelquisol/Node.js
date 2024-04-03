const mongoose = require('mongoose');
let Book = mongoose.model('books', require('../models/bookModel').schema);

const connectDB = async () => {
    try {
      if(!Book){
        Book = mongoose.model('Book', require('../models/bookModel').schema);
      }  

      await mongoose.connect(BOOKS_URI)
      .then(() => {console.log('MongoDB Connected')});
      ((err) => console.log(err));

      await initializedData();

    } catch (error) {
        console.error('Failed to connect to MongoDB' , error);
        process.exit(1);
    }
};

const initializedData = async () => {
    try {
        await Book.deleteMany();

        const booksData = [
            {
                title: "El Hombre en Busca de Sentido",
                id: "as213dw5a",
                author: "Victor Frankl",
                year: 1946,
                stock: 5,
                shelf: "12A-Psicología",
                pdf: "asdwuhf.com",
                category: "Literatura",
                bookPublisher: "1946",
                summary: "Una vida con propósito representa un mayor impacto mediante un objetivo superior"
            },
            {
                title: "Inglés",
                id: "sdasw112a",
                author: "si",
                year: 1600,
                stock: 0,
                shelf: "3G-Idiomas",
                pdf: "indklfa.com",
                category: "Inglés",
                bookPublisher: "1600",
                summary: "yes"
            }
        ];

        await Book.insertMany(booksData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data Initialization Failed' , error);
        process.exit(1);
    }
};

module.exports = connectDB;