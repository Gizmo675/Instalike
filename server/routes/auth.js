const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} =require('../keys')
const { check, validationResult } = require('express-validator')

// Model
const User = mongoose.model("User")

// Middleware
const requireLogin = require('../middleware/requireLogin')

// Signup route
router.post('/signup', (req, res)=>{
  
  const {name,email,password} = req.body;
  
  if(!email || !password || !name){
    return res.status(422).json({error:"Merci de remplir tous les champs"})
  }

  User.findOne({email:email})
  .then((savedUser)=>{
    if(savedUser){
      return res.status(422).json({error:"Un utilisateur existe deja avec cet email"})
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
        res.json({message:"Inscription réussi !"})
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
    console.log(req.body)
    return res.status(422).json({error:"Merci de rentrer un mail et un mot de passe"})
  }
  User.findOne({email:email})
  .then(savedUser=>{
    if(!savedUser){
      return res.status(422).json({error:"Email ou mot de passe invalide"})
    }
    bcrypt.compare(password, savedUser.password)
    .then(doMatch=>{
      if(doMatch){
        const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
        const {_id, name, email} = savedUser;
        res.json({token, user:{_id, name, email}});
      } else {
        return res.status(422).json({error:"Email ou mot de passe invalide"})
      }
    })
    .catch(err=>{
      console.log(err)
    })
  })
})

module.exports = router