exports.GetAllProducts = ()=>{
    const sqlQuery = "SELECT * FROM product";
    return {sqlQuery};
}

exports.SearchProduct =(req)=>{
    const sqlQuery = `SELECT * FROM product WHERE name LIKE '%${req.query.find}%'`;
    return {sqlQuery};
}

exports.AddProduct = (req)=>{
    const { name, id_product, price, image } = req.query;
    const sqlQuery = `INSERT INTO product(id_product, price, name, image) VALUES ('${id_product}','${price}', '${name}', '${image}')`;
    const checker = `SELECT * FROM product WHERE id_product = '${id_product}' OR name = '${name}'`;

    return {sqlQuery, checker};
}