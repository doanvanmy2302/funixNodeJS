exports.getAddProduct =(req,res,next) =>{

    res.render('add-product', {pageTitle: 'add product', path: '/admin/add-product',
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
});
}
exports.postAddProduct =(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
}
const products =[];
exports.getProducts= (req,res,next) =>{

    const  products= adminData.products
    res.render('shop', {prods: products, pageTitle: 'shop', path:'/'
})
}