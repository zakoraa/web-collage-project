const TransactionController = require('../controllers/transaction');
const express = require('express');

const router = express.Router();

router.get('/get', TransactionController.GetAllTransaction);
router.post('/add', TransactionController.AddTransaction);
router.post('/delete', TransactionController.DeleteTransaction);

module.exports = router;