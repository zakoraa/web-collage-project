const express = require('express');
const loginController = require('../../controllers/user/user_login');

const router = express.Router();

router.get('/', loginController.userLogin);

module.exports = router;