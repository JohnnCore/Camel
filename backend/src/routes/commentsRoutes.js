const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/commentsController')

router.get('/', commentsController.list);
router.post('/create', commentsController.create);
router.get('/products/:id', commentsController.product_list);
router.get('/:id', commentsController.get);

module.exports = router;