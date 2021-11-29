const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');

router.post('/login', AuthController.Login);
router.post('/register', AuthController.Register);

module.exports = router;
