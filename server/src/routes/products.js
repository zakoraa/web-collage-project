const express = require('express');
const ProductController = require('../controllers/products');

const router = express.Router();

router.get('/', ProductController.GetAllProducts);
router.get('/search', ProductController.SeacrhProduct);
router.post('/add', ProductController.AddProduct);

module.exports = router;