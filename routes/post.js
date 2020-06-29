const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")

// Create all post route
router.get('/allpost', requireLogin, (req,res) =>{
  Post.find()
  .populate("author","_id name")
  .then(posts=>{
    res.json({posts})
  })
  .catch(err=>{
    console.log(err)
  })
})

//Create post route
router.post('/createpost',requireLogin, (req,res)=>{
  const {title, body} = req.body
  if(!title || !body){
    return res.status(422).json({error:"Please add all the fields"})
  }

  // Don't show the password
  req.user.password = undefined

  const post = new Post({
    title,
    body,
    author:req.user
  })
  post.save()
    .then(result=>{
      res.json({post:result})
    })
    .catch(err=>{
      console.log(err)
    })
})

module.exports = router