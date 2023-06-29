const ProductModel = require('../models/products');
const db = require('../config/database');

const GetAllProducts = async(req,res)=>{
    const model = await ProductModel.GetAllProducts();
    db.query(model.sqlQuery, (err,result)=>{
        if(err)res.send(err);
        res.send(result);
    });
}

const SeacrhProduct = async(req,res)=>{
    const model = await ProductModel.SeacrhProduct(req);
    db.query(model.sqlQuery, (err,result)=>{
        res.json(result);
    });
}

module.exports = {GetAllProducts, SeacrhProduct};