const router = require('express').Router() ;
const User = require("../models/User");
const {compare} = require ("bcrypt");
const {sign} = require("jsonwebtoken");
const SECRET = process.env.SECRET   ;

router.get("/",(req,res)=>{
    res.send("Login");
})

router.post("/",async(req,res)=>{
     try{
          const {username,password}=req.body;
          const user = await User.findOne({ username });

          if(!user){
            return res.status(400).json({
                status:"failed",
                message:"Username does not exit",
                error:"No Such User Exits"
            });
          }
          if(!isPassValid){
            return res.status(400).json({
                status:"failed",
                message:"Password not correct"
            })
          }
          console.log(user,"login");

         const accToken = sign({
            userId:user._id,
            username:user.username},
            SECRET,{expiresIn:"12d"}
            );

            res.status(200).json({
                status:"success",
                message:"User Successfully Logged In",
                payload:accToken,
            });
     }
     catch(err)
     {
               res.status(500).json({
                status:"failed",
                message:"Server Error",
                error:err.message,
               })
     }
})

module.exports = router ;