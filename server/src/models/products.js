exports.GetAllProducts = (req)=>{
    const {sql} = req.query;
    const sqlQuery = `SELECT * FROM product ${sql}`;
    return sqlQuery;
}