const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
 const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('627750e5545294d3dceb7a8f')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://mydoan:doanvanmy2302@cluster0.ajlp6.mongodb.net/Cluster0?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user=>{
      if(!user){
      const user= new User({
      name: 'My',
      email: 'my@cluster0',
      cart: { items:[]}
    });
    user.save(); 
      }
    })
   
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
