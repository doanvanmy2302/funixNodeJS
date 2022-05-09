const path = require('path');

const Staff= require('./models/staff');

const express = require('express');

const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(staffRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://mydoan:doanvanmy2302@cluster0.ajlp6.mongodb.net/Cluster0?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
