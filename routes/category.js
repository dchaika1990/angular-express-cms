const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers');

router.get('/', CategoryController.GetAll);
router.get('/:id', CategoryController.GetById);
router.delete('/:id', CategoryController.Remove);
router.post('/', CategoryController.Create);
router.patch('/:id', CategoryController.Update);

module.exports = router;
