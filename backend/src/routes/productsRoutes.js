const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.get('/:id', productsController.get);

module.exports = router;