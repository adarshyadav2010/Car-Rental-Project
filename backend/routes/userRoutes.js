const userRouter = require('express').Router();
const userModel = require('../model/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

userRouter.post('/register', async(req,res)=>{
    try{
        const {Name, Email, Password} = req.body;
        let existingUser = await userModel.findOne({ Email });
        if (existingUser) return res.status(400).json({ status: "Failed", field: "Email", message: "Email already exists!!" })
        bcrypt.hash(Password, 10).then(encryptedData=>{
            const newUser = new userModel({
                Name,
                Email,
                Password: encryptedData
            })
            newUser.save().then(record => {
                res.status(201).send({
                    status : 'success',
                    user : record
                })
            }).catch(err=>{
                console.log(err);
                res.status(400).send({
                    status: 'failed',
                    message : 'failed to create user account' 
                })
            })
        }).catch(err=>{
            console.log(err);
            res.status(500).send({
                error : 'server error'
            })
        })
    }
    catch(err){
            res.status(400).send(err.message);
    }

})

 
userRouter.post('/login',async(req,res)=>{
    try{
        const {Email, Password} = req.body;
        let user = await userModel.findOne({Email: Email})
        if(user){
            return bcrypt.compare(Password, user.Password).then(authStatus => {
                if(authStatus) {
                    // console.log(authStatus);
                    return jwt.sign(
                        {
                            Email: admin.Email, 
                            id: user._id
                        }, 
                        process.env.ENCRYPTION_SECRET,
                        {
                        expiresIn: "1h"
                        }, (err, token) => {
                            if(err) {
                                return res.status(500).send({
                                    message: "Token creation failed"
                                });
                            }
                            return res.status(200).send({
                                status: "Login successful",
                                token: token,
                                Name: user.Name,
                                userId: user._id
                            });
                        }
                    )
                }
                // if authStatus is false
                res.status(400).send({
                    status: "failed",
                    message: "Enter valid user details"
                });

            })
        }else{
            res.status(401).send({ status:"failed",message:"Enter valid user details"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({error: "server error"});
    }
})
   

module.exports = userRouter;