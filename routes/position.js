const express = require('express')
const router = express.Router()
const {PositionController} = require("../controllers");

router.get('/:id', PositionController.GetById)
router.post('/', PositionController.Create)
router.patch('/:id', PositionController.Update)
router.delete('/:id', PositionController.Remove)


module.exports = router