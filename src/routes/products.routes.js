const express = require('express');
const { getProducts, getProductById , addProduct, borrarProducto} = require('../controllers/products.controller');
const router = express.Router();


router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/addProduct', addProduct)
router.delete('/borrar/:id', borrarProducto)

module.exports = router