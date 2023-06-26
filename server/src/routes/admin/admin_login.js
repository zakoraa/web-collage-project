const express = require('express');
const loginController = require('../../controllers/user/user_login');

const router = express.Router();

router.post('/', loginController.userLogin);

module.exports = router;