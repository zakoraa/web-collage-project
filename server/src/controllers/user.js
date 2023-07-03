const db = require('../config/database');
const UserModel = require('../models/user');

const GetAllUsers = async(req,res)=>{
    const model = await UserModel.GetAllUsers();
    db.query(model.sqlQuery, (err,result)=>{
        if (err) throw err;
        res.json({
            data : result
        });
        
});
}

const DeleteUser = async(req,res)=>{
    const model = await UserModel.DeleteUser(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err)res.send(err);
        res.send({
            message:"Delete success",
            data : result
        });
    });
}

module.exports = {
    DeleteUser,
    GetAllUsers
}