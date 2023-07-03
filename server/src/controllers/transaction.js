const TransactionModel = require('../models/transaction');
const db = require('../config/database');

const GetAllTransaction = async(req,res)=>{
    const model = await TransactionModel.GetAllTransaction();
    db.query(model.sqlQuery,(err,result)=>{
        if(err)res.send(err);
        res.send({
            data : result
        });
    });
}

const AddTransaction = (req,res)=>{
    const model = TransactionModel.AddTransaction(req);
            db.query(model.sqlQuery, (err,result)=>{
                if(err)res.send(err);
                res.send({
                    message : "Add Transaction Success",
                    data : result
                });
            });
        }

const DeleteTransaction = (req,res)=>{
    const model = TransactionModel.DeleteTransaction(req);
    db.query(model.sqlQuery,(err,result)=>{
        if(err) res.send(err);
        console.log(req.query);
        res.send({
            message : "Delete Transaction Success",
            id : result.body
        });
    });
}

module.exports = {
    GetAllTransaction,
    AddTransaction,
    DeleteTransaction};  