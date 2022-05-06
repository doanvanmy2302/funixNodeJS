const getDb=  require('../util/database').getDb;
const mongodb= require('mongodb');

class User {
  constructor(userName, email, cart,id){
  this.userName =userName;
  this.email= email;
  this.cart= cart;
  this._id= id;
}
save(){
  const db= getDb();
  return db.collection('users').insertOne(this)
}

addToCart(product){
  const updatedCart= {item: [{productId:new mongodb.ObjectId(product._id), quantity: 1}]}
  const db= getDb();
  db.collection('users').updateOne(
    {_id: new mongodb.ObjectId(this._id)}, 
    {$set:{cart: updatedCart}})
}

static findById(userId){
  const db= getDb();
  return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)})
.then((user)=>{
  console.log(user)
  return user;
})
.catch((err)=>{
  console.log(err)
})
}
} 
module.exports = User;
