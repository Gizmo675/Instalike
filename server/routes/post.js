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

// Create post route
router.post('/createpost',requireLogin, (req,res)=>{
  const {title, body, pic} = req.body
  console.log(req.body)
  if(!title || !body || !pic){
    return res.status(422).json({error:"Merci de remplir tous les champs"})
  }

  // Don't show the password
  req.user.password = undefined

  const post = new Post({
    title,
    body,
    picture:pic,
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

// Create all post from one user
router.get('/mypost', requireLogin, (req,res)=>{
  Post.find({author:req.user._id})
  .populate("author","_id name")
  .then(mypost=>{
    res.json({mypost})
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports = router