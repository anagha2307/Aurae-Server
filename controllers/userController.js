const users = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req,res) => {
    console.log('Inside registerController');
    const {username,email,password,role} = req.body
    //console.log("Body recieved",req.body)
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exists.....Please login...!!")
        }
        else{
            const encrptPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encrptPassword,role
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
//login
exports.loginController = async (req,res) => {
    console.log('Inside loginController');
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            let userLoggedIn = await bcrypt.compare(password, existingUser.password)
            if(userLoggedIn){
                const token = jwt.sign({email,role: existingUser.role, userId: existingUser._id},process.env.JWTSECRET)
                res.status(200).json({user:existingUser,token})             
            }
            else{
                res.status(401).json("Invalid Password")
            }
        }else{
            res.status(404).json("Invalid Email")
        }
    }
    catch(err){
        console.log(err.message)
        res.status(500).json(err)
    }
}