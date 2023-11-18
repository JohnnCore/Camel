const express = require('express');
const router = express.Router();

const purchaseProductController = require('../controllers/purchaseProductController');

router.get('/', purchaseProductController.list);
router.get('/create', purchaseProductController.create);
router.get('/purchase/:id', purchaseProductController.purchase_list);

module.exports = router;