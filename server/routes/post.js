const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")

// On veut l'ensemble des post
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

// On veut créer un post
router.post('/createpost', requireLogin, (req,res)=>{
  const {title, body, pic} = req.body
  console.log(req.body)
  if(!title || !body || !pic){
    return res.status(422).json({error:"Merci de remplir tous les champs"})
  }

  // On masque le mot de passe
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

// On veut recuperer l'ensemble des posts d'un utilisateur
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

router.put('/like', requireLogin, (req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
    $push:{likes:req.user._id}
  },{
    new:true
  }).exec((err,result)=>{
    if(err){
      return res.status(422).json({error:error})
    }else{
      res.json(result)
    }
  })
})

router.put('/unlike', requireLogin, (req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
    $pull:{likes:req.user._id}
  },{
    new:true
  }).exec((err,result)=>{
    if(err){
      return res.status(422).json({error:error})
    }else{
      res.json(result)
    }
  })
})


router.put('/comment', requireLogin, (req,res)=>{
  const comment = {
    text:req.body.text,
    author:req.user._id
  }
  Post.findByIdAndUpdate(req.body.postId,{
    $push:{comments:comment}
  },{
    new:true
  }).populate("comment.author","_id name")  
    .exec((err,result)=>{
      if(err){
        return res.status(422).json({error:error})
      }else{
        res.json(result)
      }
    })
})

module.exports = router