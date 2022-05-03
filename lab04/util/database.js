const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root','doanvanmy2302' , {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;