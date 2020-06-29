const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

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


app.listen(PORT,()=>{
  console.log("Le serveur tourne sur le port", PORT)
})