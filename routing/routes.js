const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')


//register User
routes.post('/register',userController.registerController)
//login User
routes.post('/login',userController.loginController)

module.exports = routes