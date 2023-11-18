const express = require('express');
const router = express.Router();

const purchasesController = require('../controllers/purchasesController')

router.get('/', purchasesController.list);
router.get('/users/:userId', purchasesController.user_list);
router.post('/create', purchasesController.create);
router.get('/:id', purchasesController.get);

module.exports = router;