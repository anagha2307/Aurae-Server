const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const candleController = require('../controllers/candleController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const adminJwtMiddleware = require('../middleware/adminJwtMiddleware')

//register user
routes.post('/register',userController.registerController)
//login user
routes.post('/login',userController.loginController)
//add candle - admin
routes.post('/addCandle',adminJwtMiddleware,candleController.addCandleController)
//get all canndle list
routes.get('/candles',candleController.getAllCandlesController)
//view single candle
routes.get('/candles/:id/view',jwtMiddleware,candleController.viewCandleController)
//delete candle 
routes.delete('/candles/:id/delete',adminJwtMiddleware,candleController.removeCandleController)
//edit candle
routes.put('/candles/:id/edit',adminJwtMiddleware,candleController.editCandleController)


module.exports = routes