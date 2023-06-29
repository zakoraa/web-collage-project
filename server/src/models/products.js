exports.GetAllProducts = ()=>{
    const sqlQuery = "SELECT * FROM product";
    return {sqlQuery};
}

exports.SeacrhProduct =(req)=>{
    const sqlQuery = `SELECT * FROM product WHERE name LIKE '%${req.query.find}%'`;
    return {sqlQuery};
}

