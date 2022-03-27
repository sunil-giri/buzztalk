const express=require('express')
const {postRegister,postLogin} = require('../controllers/auth/authControllers')
const router= express.Router()
const joi=require('joi')
const validator=require('express-joi-validation').createValidator({})


const registerSchema=joi.object({
    username:joi.string().min(3).max(12).required(),
    password: joi.string().min(6).max(12).required(),
    mail:joi.string().email().required()
})

const loginSchema=joi.object({
    password: joi.string().min(6).max(12).required(),
    mail:joi.string().email().required()
})
router.post('/register',validator.body(registerSchema),postRegister)

router.post('/login',validator.body(loginSchema),postLogin)

module.exports = router