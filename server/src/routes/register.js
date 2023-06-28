const express = require('express');
const RegisterController = require('../controllers/register');

const router = express.Router();

router.post('/', RegisterController.UserRegister);

module.exports = router;