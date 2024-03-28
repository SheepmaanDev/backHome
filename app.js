const express = require('express')
const mongoose = require('mongoose')
const cors = require('./middleware/cors.middleware')
const userRoutes = require('./routes/user.routes')
require('dotenv').config()
const app = express()

//Connection à la base de données
mongoose.connect(`mongodb://${process.env.DB_USR}:${process.env.DB_PSW}@${process.env.DB_HOST}/${process.env.DB}`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée ! ' + err))

app.use(cors)
app.use(express.json())
app.use('/auth', userRoutes)

module.exports = app
