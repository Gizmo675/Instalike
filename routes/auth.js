const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const requireLogin = require('../middleware/requireLogin')
const User = mongoose.model("User")
const {JWT_SECRET} =require('../keys')

// Signup route
router.post('/signup', (req, res)=>{
  const {name,email,password} = req.body
  if(!email || !password || !name){
    return res.status(422).json({error:"Please add all the fields"})
  }

  User.findOne({email:email})
  .then((savedUser)=>{
    if(savedUser){
      return res.status(422).json({error:"User allready exist with that email"})
    }
    bcrypt.hash(password, 20)
    .then(hashedPassword=>{
      const user = new User({
        email,
        password:hashedPassword,
        name
      })
      user.save()
      .then(user=>{
        res.json({message:"User successfuly saved"})
      })
      .catch(err=>{
        console.log(err)
      })
    })
  })
  .catch(err=>{
    console.log(err)
  })
})

//Signin route
router.post('/signin', (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
    return res.status(422).json({error:"Please add email or password"})
  }
  User.findOne({email:email})
  .then(savedUser=>{
    if(!savedUser){
      return res.status(422).json({error:"Invalid email or password"})
    }
    bcrypt.compare(password, savedUser.password)
    .then(doMatch=>{
      if(doMatch){
        const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
        res.json({token})
        console.log(savedUser)
      } else {
        return res.status(422).json({error:"Invalid email or password"})
      }
    })
    .catch(err=>{
      console.log(err)
    })
  })
})

module.exports = router