const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys')

//Database connection
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
  console.log("connected to mongo")
})
mongoose.connection.on('error', (err)=>{
  console.log("connection failed", err)
})

// Models
require('./models/user')
require('./models/post')

app.use(express.json())

// Routes
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT,()=>{
  console.log("Le serveur tourne sur le port", PORT)
})