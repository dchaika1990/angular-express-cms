const express = require('express')
const router = express.Router()
const {AuthController} = require("../controllers");

router.get('/login', AuthController.Login)
router.get('/register', AuthController.Register)

module.exports = router