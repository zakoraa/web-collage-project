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
    const model = await ProductModel.SearchProduct(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err)res.send(err);
        res.json(result);
    });
}

const AddProduct = async(req,res)=>{
    const model = await ProductModel.AddProduct(req);
    try {
        db.query(model.checker, (err,result)=>{
            console.log(result);
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

const DeleteProduct = async(req,res)=>{
    const model = await ProductModel.DeleteProduct(req);
    db.query(model.sqlQuery, (err,result)=>{
        if(err)res.send(err);
        res.send({
            message:"Delete success",
            data : result
        });
    });
}

module.exports = {
    GetAllProducts, 
    SeacrhProduct, 
    AddProduct,
    DeleteProduct
};