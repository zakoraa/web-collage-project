const jwt = require('jsonwebtoken');

const UserAuth = async (req, res, next) => {
    const token = await req.cookies.token;
    console.log(req.cookies.token);
    if (!token) {
        console.log({ login: false, message: "login first" });
        return res.json({ login: false, message: "login first" })
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json({ login: false, message: "error authentication" })
            } else {   
                req.email = decoded.email;
                req.role = decoded.role;
                req.name = decoded.name;
                req.id_user = decoded.id_user;
                next();
            }
        })
    }
}


module.exports = UserAuth;