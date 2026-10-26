const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const candleController = require('../controllers/candleController')
const adminJwtMiddleware = require('../middleware/adminJwtMiddleware')

//register User
routes.post('/register',userController.registerController)
//login User
routes.post('/login',userController.loginController)
//add candle - admin
routes.post('/addCandle',adminJwtMiddleware,candleController.addCandleController)
//get all canndle list
routes.get('/candles',candleController.getAllCandlesController)


module.exports = routes