const express = require('express');
const { getProducts, getProductById , addProduct, borrarProducto, category} = require('../controllers/products.controller');
const router = express.Router();


router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/addproduct', addProduct)
router.delete('/borrar/:id', borrarProducto)
router.get('/categoryProduct/name', category)


module.exports = router