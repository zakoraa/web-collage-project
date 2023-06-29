const express = require('express');
const ProductController = require('../controllers/products');

const router = express.Router();

router.get('/', ProductController.GetAllProducts);
router.get('/search', ProductController.SeacrhProduct);

module.exports = router;