const express = require('express');
const registerController = require('../../controllers/user/user_register');

const router = express.Router();

router.post('/', registerController.userRegister);

module.exports = router;