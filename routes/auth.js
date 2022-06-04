const express = require('express');

const {body} = require('express-validator');

const authController = require('../controllers/auth');

const router= express.Router();

router.get('/login',[
    body('email')
    .isEmail()
    .withMessage('please enter a valid email'), 
    body('password', 'Password has to be valid')
    .isLength({min: 5})
    .isAlphanumeric()
    .trim()
], authController.getLogin);

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

module.exports= router;