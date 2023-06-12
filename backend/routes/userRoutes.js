const userRouter =require('express').Router()
const user = require('../model/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require('dotenv').config();

userRouter.post('/register', (req,res)=>{
    const userDetails = req.body;
    bcrypt.hash(userDetails.Password, 10).then(encryptedData=>{
        const newUser = new user({
            Name: userDetails.Name,
            Email: userDetails.Email,
            Password: encryptedData
        })
        newUser.save().then(record => {
            console.log(record)
            res.status(200).send({
                // message : 'user registered successfully'
                status : 'success',
                data : record
            })
        }).catch(err=>{
            console.log(err)
            res.status(400).send({
                error : 'failed to create user' 
            })
        })
    }).catch(err=>{
        res.status(400).send({
            error : 'server error'
        })
    })
    
})

// const key = process.env.ENCRYPTION_SECRET
// console.log(env, key)

userRouter.post('/login', (req, res) => {
    const userDetails = req.body;
    user.findOne({Email: userDetails.Email}).then(registeredUser => {
        // console.log(registeredUser)
        if(registeredUser) {
            return bcrypt.compare(userDetails.Password, registeredUser.Password).then(authStatus => {
                if(authStatus) {
                    // console.log(authStatus);
                    return jwt.sign(
                        {
                            Email: registeredUser.Email, 
                            id: registeredUser._id
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
                                status: "Authentication successful",
                                token: token
                            });
                        }
                    )
                }
                // if authStatus is false
                res.status(400).send({
                    message: "Authentication failed"
                });

            })
        }
        res.status(400).send({
            message: "Authentication failed"
        });
    }).catch(err => {
        res.send(err);
    })

})


module.exports = userRouter;
