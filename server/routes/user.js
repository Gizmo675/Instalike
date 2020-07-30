const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")
const User = mongoose.model("User")

// Obtenir le profil d'un utilisateur
router.get('/user/:id', requireLogin, (req,res)=>{
    // console.log(req.body)
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
        Post.find({author:req.params.id})
        .populate("author", "_id name")
        .exec((err, posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            res.json({user,posts})
        })
    }).catch(err=>{return res.status(404).json({error:"Utilisateur non trouvé"})})
})

module.exports = router