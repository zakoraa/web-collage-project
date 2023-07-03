const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

router.get('/get', UserController.GetAllUsers);
router.post('/delete', UserController.DeleteUser);

module.exports=  router;