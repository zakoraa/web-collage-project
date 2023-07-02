exports.GetAllTransaction = ()=>{
    const sqlQuery = "SELECT * FROM transaction";
    return {sqlQuery};
}


exports.AddTransaction = (req)=>{
    const {transaction_id, id_userFK, id_productFK, total_price} = req.query;
    const sqlQuery = `INSERT INTO transaction (id_userFK, id_productFK, total_price)
    VALUES('${id_userFK}', '${id_productFK}', ${total_price})`;
    const checker = `SELECT * FROM transaction WHERE transaction_id = ${transaction_id}}`;
    return {sqlQuery, checker};
}

exports.DeleteTransaction = (req)=>{
    const {transaction_id} = req.query;
    const sqlQuery =  `DELETE FROM transaction WHERE transaction_id = ${transaction_id}`;
    return {sqlQuery};
}