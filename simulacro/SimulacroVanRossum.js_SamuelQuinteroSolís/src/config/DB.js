// Pasos
/* 1. Importar herramienta para trabajar datos */
/* 2. Importar esquema en variable de consulta */
/* 3. Conectar con la DB gestionando errores */
/* 4. Inicializar información */
/* 5. Exportar Conexión */

//-------------------------------------------------------

/* 1. Importar herramienta */
const mongoose = require('mongoose');

/* 2. Importar esquema en variable de consulta */
const Student = require('../../../simulacro/SimulacroVanRossum.js_SamuelQuinteroSolís/src/models/studentModel');

/* 3. Conectar con la DB gestionando errores */
const connectDB = async ()=>{
    try {
        /* Si la variable de consulta no está definida */
        if(!Student){
            const Student = mongoose.model('Student', require('../models/studentModel').schema);
        }

        /* Conexión con la DB */
        /* await mongoose.connect('mongodb+srv://samuelquisol:Vskg4Hb9pOZGz6HC@learning-cluster.vazfyls.mongodb.net/') */
        await mongoose.connect('mongodb://samuelquisol:Vskg4Hb9pOZGz6HC@ac-ytfz8c1-shard-00-00.vazfyls.mongodb.net:27017,ac-ytfz8c1-shard-00-01.vazfyls.mongodb.net:27017,ac-ytfz8c1-shard-00-02.vazfyls.mongodb.net:27017/?replicaSet=atlas-xrdpk6-shard-0&ssl=true&authSource=admin')
        .then(console.log('DB Successfully Connected'))
        .catch((error)=>{console.log(error)});

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to DB:', error);
        process.exit(1);
    }
};

/* 4. Inicializar información */
const initializeData = async () => {
    try {
        await Student.deleteMany();

        const studentData = [
            {
                name: 'Sam',
                identification: '0123456789',
                age: 19
            },
            {
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

/* 5. Exportar Conexión */
module.exports = connectDB;