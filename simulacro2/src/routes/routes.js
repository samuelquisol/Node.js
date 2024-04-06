// Pasos
/* 1. Importar herramienta de manejo de apis */
/* 2. Definir enrutador */
/* 3. Importar controllers */
/* 4. Asignar rutas y sus funciones */
/* 5. Exportar enrutador */

//----------------------------------------------------------

/* 1. Importar herramienta de manejo de apis */
const express = ('express');

/* 2. Definir enrutador */
const router = express.router();

/* 3. Importar controllers */
const productController = require('../controllers/productController');

/* 4. Asignar rutas y sus funciones */

/* Read */
router.get('/api/v1/products', productController.getAllProducts);
router.get('/api/v1/product/id/:id', productController.getProductById);
router.get('/api/v1/product/name/:name', productController.getProductByName);

/* Update */
router.post('/api/v1/update', productController.updateProductById);

/* Create */
router.post('/api/v1/products', productController.createProduct);

/* Delete */
router.post('/api/v1/delete', productController.deleteProductById);

/* 5. Exportar enrutador */
module.exports = router;