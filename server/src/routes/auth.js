const express = require('express');
const AuthController = require('../controllers/auth');

const router = express.Router();

router.post('/', AuthController.UserAuth);

module.exports = router;