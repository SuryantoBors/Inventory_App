const express = require("express");
const router = express.Router();
const signInTemplate = require("../models/userModel");

router.post("/", (req,res)=>{
    const signinData = {
        username : req.body.username,
        password : req.body.password
    };
    signInTemplate.findOne({username : signinData.username},(err, userData)=>{
        if(userData){
            if(signinData.password == userData.password){
                res.status(200).send("User Found");
            }else{
                res.status(404).send("Incorrect Username or Password");
            }
        }else{
            res.status(404).send("Incorrect Username or Password");
        }
    });
});

module.exports = router;