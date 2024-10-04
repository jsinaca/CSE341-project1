const express = require('express');
const router = express.Router();
const { userValidationRules, validate, validateID } = require('../utilities/validator.js');

const userController = require('../controllers/users');

// router.get('/', userController.getAll);
router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', userValidationRules(), validate, userController.createUser);

router.put('/:id', userValidationRules(), validate, userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;