
"use strict";
const express = require("express");
const router = express.Router();

//register


router.post("/register",async (req,res)=>{
    try{
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            profilePic:req.body.profilePic
        })
       const user = await newUser.save();
       res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }

});



//login
// eslint-disable-next-line no-undef
module.exports = router

