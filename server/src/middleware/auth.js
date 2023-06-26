const express = require('express');

const app = express();

const userAuth = (req, res, next) => {
    console.log("MANTAP");
    next();
    // const token = req.cookies.token;
    // if (!token) {
    //     return res.json({ login: false, message: "login first" })
    // } else {
    //     jwt.verify(token, "secret", (err, decoded) => {
    //         if (err) {
    //             return res.json({ login: false, message: "error authentication" })
    //         } else {
    //             req.email = decoded.email;
    //             req.role = decoded.role;
    //             req.nama = decoded.nama;
    //             req.id_account = decoded.id_account;
    //             next();
    //         }
    //     })
    // }
}

app.post("/auth", userAuth, (req, res) => {
    return res.json({
        login: true,
        email: req.email,
        role: req.role,
        id_account: req.id_account,
        nama: req.nama
    })
});

module.exports = userAuth;


