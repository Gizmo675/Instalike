const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
  const {authorization} = req.headers
  console.log(req.headers)

  if(!authorization){
    return res.status(401).json({err:"Vous devez etre connecté"})
  }
  const token = authorization.replace("Bearer ","")

  jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
      console.log(err)
      return res.status(401).json({error:"Vous devez etre connecté"})
    }

    const {_id} = payload
    User.findById(_id).then(userdata=>{
      req.user = userdata
      next()
    })

  })
}