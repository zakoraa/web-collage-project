const ProductModel = require('../models/products');
const db = require('../config/database');

const GetAllProducts = async(req,res)=>{
    const model = await ProductModel.GetAllProducts(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err)res.send(err);
        res.send(result);
    });
}

module.exports = {GetAllProducts};