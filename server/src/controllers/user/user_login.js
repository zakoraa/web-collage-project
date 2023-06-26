const jwt = require('jsonwebtoken');
const loginModel = require('../../models/user/user_login');
const db = require('../../config/database');


const userLogin = async(req,res)=>{
    const model = await loginModel.userLogin(req);
    db.query(model.sqlQuery, model.values, (err,result)=>{
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
            const email = result[0].email;
            const nama = result[0].nama_pelanggan;
            const id_pelanggan = result[0].id_pelanggan;
            const token = jwt.sign({ email, nama, id_pelanggan }, "secret", { expiresIn: "1d" });
            res.cookie("token", token)
            return res.json({
                message: "success"
            });}
});
}

module.exports = {userLogin};