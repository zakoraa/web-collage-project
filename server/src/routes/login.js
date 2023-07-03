const express = require('express');
const UserController = require('../controllers/login');

const router = express.Router();

router.post('/', UserController.UserLogin);

module.exports=  router;