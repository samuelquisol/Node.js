// Pasos
/* 1. Importar herramienta para trabajar datos */
/* 2. Importar esquema en variable de consulta */
/* 3. Conectar con la DB gestionando errores */
/* 4. Inicialiar información */
//-------------------------------------------------------

/* 1. Importar herramienta para trabajar datos */
const mongoose = require('mongoose');

/* 2. Importar esquema en variable de consulta */
const Product = mongoose.model('Student', require('../models/studentModel').schema);

/* 3. Conectar con la DB gestionando errores */
const connectDB = async () => {
    try {
        if(!Product){
            Product = mongoose.model('Product', require('../models/productModel').schema);
        }
    
        mongoose.connect(process.env.MONGODB_URI)
        .then(console.log('MongoDB Successfully Connected'))
        .catch((error) => {console.error(error)});
    
        await initializeData();  
    } catch (error) {
        console.error('Failed to connect to DB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Product.deleteMany();

        const productData = [
            {
                name: 'papas',
                code: '123',
                stock: 20
            },
            {
                name: 'gomas',
                code: '1',
                stock: 20
            }
        ]

        await Product.insertMany(productData);
    } catch (error) {
        console.error('Data Initialization Failed:', error);
        process.exit(1);
    }
};