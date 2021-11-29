const express = require('express')
const router = express.Router()
const {OrderController} = require("../controllers");

router.get('/', OrderController.GetAll)
router.post('/', OrderController.Create)

module.exports = router