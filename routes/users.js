const express = require('express');
const router = express.Router();
const User = require('../model/user');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const config =require('../config/database')


//Register
router.post('/register',(req,res,next)=>{
let newUser = new User({
  name: req.body.name,
  email: req.body.email,
  username: req.body.username,
  password: req.body.password,
});
User.addUser(newUser,(err, user)=>{
  if(err){
    res.json({success:false,msg:"failed to register the user!"});
  }else{
    res.json({success:true,msg:"User registered!"})
  }
})
});

//authenticate
router.post('/authenticate',(req,res,next)=>{
  res.send('AUTHENTICATE');
  });

//Profile
router.get('/Profile',(req,res,next)=>{
  res.send('PROFILE');
  });

//Validate
router.get('/validate',(req,res,next)=>{
  res.send('VALIDATE');
  });
  

  
module.exports = router;