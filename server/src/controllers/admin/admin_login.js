const jwt = require('jsonwebtoken');
const loginModel = require('../../models/admin/admin_login');
const db = require('../../config/database');


const adminLogin = async (req,res)=>{
    const model = await loginModel.adminLogin(req);
    db.query(model.sqlQuery,model.values, (err,result)=>{
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
            const email = result[0].email;
            const nama = result[0].nama;
            const id_admin = result[0].id_admin;
            const token = jwt.sign({ email, nama, id_admin }, "secret", { expiresIn: "1d" });
            res.cookie("token", token)
            return res.json({
                message: "success"
            });
        }});
}


module.exports = {adminLogin};