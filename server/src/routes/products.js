const express = require('express');
const ProductController = require('../controllers/products');

const router = express.Router();

router.get('/', ProductController.GetAllProducts);
router.get('/search', ProductController.SeacrhProduct);
router.post('/add', ProductController.AddProduct);
router.post('/updateall', ProductController.UpdateAllProduct);
router.post('/updatename', ProductController.UpdateProductName);
router.post('/updateprice', ProductController.UpdateProductPrice);
router.post('/updateimage', ProductController.UpdateProductImage);
router.post('/delete', ProductController.DeleteProduct);

module.exports = router;
