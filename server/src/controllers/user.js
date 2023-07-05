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

const UpdateAllUser = async(req,res) =>{
    const model = await UserModel.UpdateAllUser(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
            data : result
        });
    });
}
const UpdateUserName = async(req,res) =>{
    const model = await UserModel.UpdateUserName(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
            data : result
        });
    });
}
const UpdateUserAddress = async(req,res) =>{
    const model = await UserModel.UpdateUserAddress(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
            data : result
        });
    });
}
const UpdateUserPhoneNumber = async(req,res) =>{
    const model = await UserModel.UpdateUserPhoneNumber(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
            data : result
        });
    });
}
const UpdateUserEmail = async(req,res) =>{
    const model = await UserModel.UpdateUserEmail(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
            data : result
        });
    });
}
const UpdateUserPassword = async(req,res) =>{
    const model = await UserModel.UpdateUserPassword(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err) res.send(err);
        res.send({
            message : "Update Success",
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
    UpdateAllUser,
    UpdateUserName,
    UpdateUserAddress,
    UpdateUserPhoneNumber,
    UpdateUserEmail,
    UpdateUserPassword,
    GetAllUsers
}