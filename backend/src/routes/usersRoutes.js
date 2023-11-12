const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController')

router.get('/list', userController.list);
router.get('/create', userController.create);

module.exports = router;