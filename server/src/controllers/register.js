const RegisterModel = require('../models/register');
const db = require('../config/database');

const UserRegister = (req,res)=>{
    const model = RegisterModel.UserRegister(req);
    try {
        db.query(model.checker, (err,result)=>{
            if (result.length === 0) {
                db.query(model.sqlQuery, (err, result) => {
                    if (err) res.send("error");
                    res.send({ message: "success" });
                })
            } else {
                res.send("error");
            } 
        });
    } catch (error) {
        res.send("Internal Server Error");
    }
}

module.exports = {UserRegister};

