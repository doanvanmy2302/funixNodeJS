const db= require('../util/database')
const fs = require('fs');
const path = require('path');
const Cart = require('./cart');


module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id= id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() { 
    return db.execute("INSERT INTO products (title,imageUrl,description,price) VALUES(?,?,?,?)",
    [this.title, this.price, this.description, this.imageUrl]
    )
  }

  static fetchAll(cb) {
    return db.execute('select * from products')
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
  static deleteById(id){
    getProductsFromFile(products=>{
      const product = products.find(prod => prod.id===id)
      const updatedProducts= products.filter(prod => prod.id !== id)
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if(!err){
         Cart.deleteProduct(id,product.price) 
        }
      })
    })
  }
};
