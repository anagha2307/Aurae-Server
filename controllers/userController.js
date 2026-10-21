const users = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req,res) => {
    console.log('Inside registerController');
    const {username,email,password} = req.body
    //console.log("Body recieved",req.body)
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exists.....Please login...!!")
        }
        else{
            const encrptPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encrptPassword
            })
            await newUser.save()
            res.status(200).json(newUser);
            console.log("User Registered successfully..",newUser)
        }
    }
    catch(err){
        res.status(500).json(err)
    }   
}