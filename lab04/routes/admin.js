const path = require('path');
const express =require('express');
const router = express.Router();
//const rootDir =require('../util/path');
const productController = require('../controllers/products')


router.get('/add-product',productController.getAddProduct);
router.post('/add-product',productController.postAddProduct)

exports.router =router;
