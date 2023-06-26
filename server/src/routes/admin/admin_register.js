const express = require('express');
const registerController = require('../../controllers/admin/admin_register');

const router = express.Router();

router.post('/', registerController.adminRegister);

module.exports = router;