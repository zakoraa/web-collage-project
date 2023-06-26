const db = require('../config/database');
const jwt = require('jsonwebtoken');
const productModel = require('../models/product');

const showProducts = (req,res)=>{
    const model = productModel.showProducts(req);
    try{
        db.query(model.Query, (err, result)=>{
            res.json(result);
        });
    }catch(err){
        res.json(err);
    }
   
}

const addProduct = (req,res)=>{
    const model = productModel.addProduct(req);
    try{
        db.query(model.checker, (err, result)=>{
            if(result.length === 0){
                db.query(model.sqlQuery, (err, result)=>{
                    if(err) res.send(err);
                    res.send({message : "Success"});
                });
            }else{
                res.send(err);
            }
        });
    }catch(err){
        res.send(err);
    }
    
}

const updateProduct = (req,res)=>{
    const model = productModel.updateProduct(req);
    try{
        db.query(model.sqlQuery, (err,result)=>{
            if(err) res.send(err);
            res.send({message:"Success"});
        });
    }catch(err){
        res.send(err);
    }
}

const deleteProduct = (req,res)=>{
    const model = productModel.deleteProduct(req);
    try{
        db.query(model.sqlQuery, (err,result)=>{
            if(err) res.send(err);
            res.send({message:"Success"});
        });
    }catch(err){
        res.send(err);
    }
}

module.exports = {showProducts,addProduct, updateProduct,deleteProduct};
