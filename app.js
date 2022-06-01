const path = require('path');

const Staff = require('./models/staff');
const authRoutes= require('./routes/auth');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoBDStore = require('connect-mongodb-session')(session)

const errorController = require('./controllers/error');

const MONGODB_URI = 'mongodb+srv://mydoan:doanvanmy2302@cluster0.ajlp6.mongodb.net/Staff'

const app = express();
const store = new MongoBDStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const staffRoutes = require('./routes/staff');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}));
// bien 
app.use((req, res, next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

app.use((req, res, next) => {
    Staff.findById('627dc6f9425d4cabcf161310')
        .then(staff => {
            req.staff = staff;
            next();
        })
        .catch(err => console.log(err));
});

app.use(staffRoutes);
app.use(authRoutes)
app.use(errorController.get404);

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(3000);
    })
    .catch( err => {
        console.log(err);
    });
