const express = require('express');
const LogoutController = require('../controllers/logout');

const router = express.Router();

router.get('/', LogoutController.UserLogout);

module.exports = router;