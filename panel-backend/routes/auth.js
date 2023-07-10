
const express = require( 'express');
const router  = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser.js');


const jwt_secret = "IamAGoodEnoughString";

// Route1 :  create a User using: POST "/api/auth/createuser" , NO login Required

router.post( '/signup',[
     
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),

], async (req, res) =>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    // check weather user with this email already exits
    let user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({error : " sorry the user with this email already exits"})
    }
      
    const salt  = await bcrypt.genSaltSync(10);
    const SecPass = await bcrypt.hash(req.body.password, salt);
    
    //  creating a user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: SecPass,
      });

      const data = {
           user :{
              id : user.id
           }
      }
    
    const authToken =  jwt.sign(data, jwt_secret);
    success  = true;
    res.json({success , authToken});
    

});

// Route 2 :  authenticating a user Post /api/auth/login , no login Required

router.post( '/login', 
[ 
    body('email', ' Enter a valid email').isEmail(),
    body('password', "password can not be black").exists(),

],
 async (req, res) =>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const {email , password} = req.body;
   
  try {
    let user =await User.findOne({email});
    if( !user) {
        return res.status(400).json({success ,error: " Please try to login with correct creadential"});
    }
   
    const PassCompare = await bcrypt.compare(password, user.password);
    if(!PassCompare){
        return res.status(400).json({success , error: " Please try to login with correct creadential"});
    }
   
    const data = {
        user :{
           id : user.id
        }
   }
 
const authToken =  jwt.sign(data, jwt_secret);
success  = true;
 res.json({success , authToken});

  } catch (error) {
     res.status(500).send(" Internal server Error");
  }
   
});



module.exports = router;