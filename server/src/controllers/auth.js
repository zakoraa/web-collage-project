const express = require('express');
const middlewareAuth = require('../middleware/auth');

const UserAuth = (middlewareAuth.UserAuth, (req, res) => {
    return res.json({
        login: true,
        email: req.email,
        id_user: req.id_user,
        name: req.name
    });
});

module.exports = {UserAuth};