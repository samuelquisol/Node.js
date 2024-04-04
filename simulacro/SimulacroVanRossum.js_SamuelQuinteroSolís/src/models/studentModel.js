// Pasos
/* 1. Importar herramienta para trabajar datos */
/* 2. Modelar esquema de conjuntos de información 
en una variable */
/* 3. Asignar una key a la variable que contiene el esquema*/
/* 4. Exportar esquema */

//----------------------------------------------------------

/* 1. Importar herramienta para trabajar datos */
const mongoose = require('mongoose');

/* 2. Modelar esquema de conjuntos de información 
en una variable */

/* Sería más apropiado usar la fecha de nacimiento
pero el esquema proporcionado utiliza Number */
const studentSchema = new mongoose.Schema({
    studentId:String,
    name: String,
    identification: String,
    age: Number
})

/* 3. Asignar una key a la variable que contiene el esquema*/
const Student = mongoose.model('Student',studentSchema);

/* 4. Exportar esquema */
module.exports = Student;