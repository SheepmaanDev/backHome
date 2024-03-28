const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controller')
const verifyToken = require('../middleware/verifyToken.middleware')

//Création des routes avec association des fonctions du contrôleur
router.post('/signUp', userCtrl.signUp)
router.post('/signIn', userCtrl.signIn)
router.get('/verify', verifyToken, userCtrl.verifyToken)

module.exports = router