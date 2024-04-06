// Pasos
/* 1. Importar el esquema en variable de consulta */
/* 2. Importar recursos de seguridad y asignar token 
secreto */
/* 3. Crear controller */
    /* 3.1 Construir consultas gestionando casos de error */
/* 4. Exportar controller */

//------------------------------------------------------------

/* 1. Importar el esquema en variable de consulta */
const Product = require('../models/productModel');

/* 2. Importar recursos de seguridad y asignar token 
secreto */


/* 3. Crear controller */
const productController = {
    /* 3.1 Construir consultas gestionando casos de error */
    /* Get */
    getAllProducts: async (req,res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },
    getProductById: async (req,res) => {
        try {
            const id = req.params;
            const products = await Product.findById({id: id});
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },
    getProductByName: async (req,res) => {
        try {
            const name = req.params;
            const products = await Product.find({name: name});
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },

    /* create */
    createProduct: async (req,res) => {
        try {
            const body = req.body;
            const newProduct = new Product(body);
            const saved = await newProduct.save();
            res.status(200).json(saved);
        } catch (error) {
            console.error('Error al crear producto:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },

    /* update */
    updateProductById: async (req,res) => {
        try {
            const { _id, code, name, stock } = req.body;
            const updateProduct = await Product.findOneAndUpdate({_id: _id}, {code: code, name: name, stock: stock});
            res.status(201).json(updateProduct);
        } catch (error) {
            console.error('Error al actualizar producto:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },

    /* delete */
    deleteProductById: async (req,res) => {
        try {
            const _id = req.body;
            const deleteProduct = await Product.findOneAndDelete({_id: _id});
            res.status(202).json(deleteProduct);
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            res.status(500).json({message: 'Internal Server Error'});        }
    },
}

/* 4. Exportar controller */
module.exports = productController;