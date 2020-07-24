const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  picture:{
    type: String,
    required: true
  },
  author:{
    type: ObjectId,
    ref:"User"
  },
  likes:[{
    type:ObjectId,
    ref:"User"
  }]
})

mongoose.model("Post", postSchema)