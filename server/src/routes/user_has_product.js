const UserHasProductController = require('../controllers/user_has_product');
const express = require('express');

const router = express.Router();

router.get('/get', UserHasProductController.GetAllUserHasProduct);
router.post('/add', UserHasProductController.AddUserHasProduct);
router.post('/delete', UserHasProductController.DeleteUserHasProduct);

module.exports = router;