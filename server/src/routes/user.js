const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

router.get('/get', UserController.GetAllUsers);
router.post('/updateall', UserController.UpdateAllUser);
router.post('/updatename', UserController.UpdateUserName);
router.post('/updateaddress', UserController.UpdateUserAddress);
router.post('/updatephone', UserController.UpdateUserPhoneNumber);
router.post('/updateemail', UserController.UpdateUserEmail);
router.post('/updatepassword', UserController.UpdateUserPassword);
router.post('/delete', UserController.DeleteUser);

module.exports=  router;