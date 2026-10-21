require('dotenv').config()
require('./config/db')

const express = require('express')
const cors = require('cors')

const auraeServer = express()
auraeServer.use(cors())
auraeServer.use(express.json())

const Port = 3000
auraeServer.listen(Port, () => {
    console.log("Aurae Server Started.....");   
})
auraeServer.get('/',(req,res) => {
    res.status(200).send(`<h1> Aurae Server Started..... Waiting for Client Request.....!!!</h1>`)
})

