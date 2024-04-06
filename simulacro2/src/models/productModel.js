// Pasos
/* 1. Importar herramienta para trabajar datos */
/* 2. Modelar esquema de conjuntos de información 
en una variable */
/* 3. Asignar una key a la variable que contiene el esquema*/
/* 4. Exportar esquema */

//-----------------------------------------------------------

/* 1. Importar herramienta para trabajar datos */
const mongoose = require('mongoose');

/* 2. Modelar esquema de conjuntos de información 
en una variable */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

/* 3. Asignar una key a la variable que contiene el esquema*/
const Product = mongoose.model('Product', productSchema);

/* 4. Exportar esquema */
module.exports = Product;