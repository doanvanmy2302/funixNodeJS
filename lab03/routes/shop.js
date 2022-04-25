const path =require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')
const adminData = require('./admin')
router.get('/',(req,res,next) =>{
    // res.sendFile(path.join(rootDir, 'views','shop.html'));
    // console.log(adminData.products)
    const  products= adminData.products
    res.render('shop', {prods: products, pageTitle: 'shop', path:'/'})
});
module.exports=router;