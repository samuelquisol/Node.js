// Pasos
/* 1. Importar herramienta para trabajar datos */
/* 2. Importar esquema en variable de consulta */
/* 3. Conectar con la DB gestionando errores */

//-------------------------------------------------------

/* 1. Importar herramienta */
const mongoose = require('mongoose');

/* 2. Importar esquema en variable de consulta */
const Student = mongoose.model('Student', require('../models/studentModel').schema);

/* 3. Conectar con la DB gestionando errores */
const connectDB = async ()=>{
    try {
        /* Si la variable de consulta no está definida */
        if(!Student){
            const Student = mongoose.model('Student', require('../models/studentModel'));
        }

        /* Conexión con la DB */
        await mongoose.connect('mongodb+srv://samuelquisol:Vskg4Hb9pOZGz6HC@learning-cluster.vazfyls.mongodb.net/')
        .then(console.log('DB Successfully Connected'))
        .catch((error)=>{console.log(error)});

        /* Si la variable de consulta no tiene información */
        if(Student=== null){
            await initializeData();
        }

    } catch (error) {
        console.error('Failed to connect to DB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Student.deleteMany();

        const studentData = [
            {
                studentId: '1',
                name: 'Sam',
                identification: '0123456789',
                age: 19
            },
            {
                studentId: '2',
                name: 'Jean',
                identification: '9876543210',
                age: 17
            }
        ];

        await Student.insertMany(studentData);
        console.log('Data Successfully Initialized');

    } catch (error) {
        console.error('Data Initialization Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;