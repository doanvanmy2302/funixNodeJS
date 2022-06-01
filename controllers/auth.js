const bcrypt= require('bcryptjs');

const { validationResult} = require('express-validator');

const Staff= require('../models/staff');

exports.getLogin = (req, res, next)=>{
    // let message = req.flash('error');
    // if(message.length > 0){
    //     message= message[0];
    // } else {
    //     message = null
    // }
    res.render('auth/login',{
        path:'/login', 
        pageTitle: 'Login',
    });
};
exports.postLogin= (req, res, next) => {
    const email= req.body.email;
    const password= req.body.password;
    Staff.findById('627dc6f9425d4cabcf161310')
    .then(result=>{
        req.session.isLoggedIn = true;
        req.session.staff= result;
        req.session.save(err=>{ 
            console.log(err) 
            res.redirect('/') 
        })
    })
    .catch(err=> console.log(err))
}

exports.postLogout= (req, res, next) => {
    req.session.destroy(err=>{
         console.log(err)
        res.redirect('/login')
        })
}