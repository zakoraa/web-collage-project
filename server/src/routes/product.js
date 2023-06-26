const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();


router.get('/', productController.showProducts);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;