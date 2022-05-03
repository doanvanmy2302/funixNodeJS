const Sequelize = require('sequelize');

const sequelize =require('../util/database')
 
const Cart = sequelize.define('cart',{ 
  id: {
    type: Sequelize.INT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  }
});
module.exports= Cart;