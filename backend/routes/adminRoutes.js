const adminRouter = require('express').Router();
const adminModel = require('../model/adminModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

adminRouter.post('/register', async(req,res)=>{
    try{
        const {Name, Email, Password, Contact} = req.body;
        let existingAdmin = await adminModel.findOne({ Email });
        if (existingAdmin) return res.status(400).json({ status: "Failed", field: "Email", message: "Email already exists!!" })
        bcrypt.hash(Password, 10).then(encryptedData=>{
            const newAdmin = new adminModel({
                Name,
                Email,
                Password: encryptedData,
                Contact
            })
            newAdmin.save().then(record => {
                res.status(201).send({
                    status : 'success',
                    admin : record
                })
            }).catch(err=>{
                console.log(err);
                res.status(400).send({
                    status: 'failed',
                    message : 'failed to create admin account' 
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

 
adminRouter.post('/login',async(req,res)=>{
    try{
        const {Email, Password} = req.body;
        let admin = await adminModel.findOne({Email: Email})
        if(admin){
            return bcrypt.compare(Password, admin.Password).then(authStatus => {
                if(authStatus) {
                    // console.log(authStatus);
                    return jwt.sign(
                        {
                            Email: admin.Email, 
                            id: admin._id
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
                                Name: admin.Name,
                                AdminId: admin._id
                            });
                        }
                    )
                }
                // if authStatus is false
                res.status(400).send({
                    status: "failed",
                    message: "Enter valid admin details"
                });

            })
        }else{
            res.status(401).send({ status:"failed",message:"Enter valid admin details"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({error: "server error"});
    }
})
   

module.exports = adminRouter;