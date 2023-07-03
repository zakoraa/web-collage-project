const UserHasProductModel = require('../models/user_has_product');
const db = require('../config/database');

const GetAllUserHasProduct = async(req,res)=>{
    const model = await UserHasProductModel.GetAllUserHasProduct();
    db.query(model.sqlQuery,(err,result)=>{
        if(err)res.send(err);
        res.send({
            data : result
        });
    });
}

const AddUserHasProduct = (req,res)=>{
    const model = UserHasProductModel.AddUserHasProduct(req);
            db.query(model.sqlQuery, (err,result)=>{
                if(err)res.send(err);
                res.send({
                    message : "Add Success",
                    data : result
                });
            });
        }

const DeleteUserHasProduct = (req,res)=>{
    const model = UserHasProductModel.DeleteUserHasProduct(req);
    db.query(model.sqlQuery,(err,result)=>{
        if(err) res.send(err);
        console.log(req.query);
        res.send({
            message : "Delete Success",
            id : result
        });
    });
}

module.exports = {
    GetAllUserHasProduct,
    AddUserHasProduct,
    DeleteUserHasProduct};  