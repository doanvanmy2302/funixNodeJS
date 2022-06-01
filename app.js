const path = require('path');

const Staff = require('./models/staff');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const staffRoutes = require('./routes/staff');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    Staff.findById('627dc6f9425d4cabcf161310')
        .then(staff => {
            req.staff = staff;
            next();
        })
        .catch(err => console.log(err));
});

app.use(staffRoutes);

app.use(errorController.get404);

mongoose
    .connect('mongodb+srv://mydoan:doanvanmy2302@cluster0.ajlp6.mongodb.net/Staff?retryWrites=true&w=majority')
    .then(result => {
        app.listen(3000);
    })
    .catch( err => {
        console.log(err);
    });
