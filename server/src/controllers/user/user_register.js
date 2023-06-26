const registerModel = require('../../models/user/user_register');
const db = require('../../config/database');


const userRegister = (req,res)=>{
    const model = registerModel.userRegister();
    try{
        db.query(model.checker, (err,result)=>{
            if(result.length === 0){
                db.query(model.sql ,(err,result)=>{
                    if(err) res.send(err);
                    res.send({message:"Success"});
                });
            }else{
                res.send(err);
            }
        });
    }catch{
        res.send("Internal Server Error");
    }   
}

module.exports = {userRegister};