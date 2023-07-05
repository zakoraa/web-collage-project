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

exports.UpdateProductAll = (req)=>{
    const { name, id_product, price, image} = req.query;
    const sqlQuery = `UPDATE product SET name = '${name}', price = ${price}, image= '${image}' WHERE id_product = '${id_product}'`;
    return {sqlQuery};
}

exports.UpdateProductName = (req)=>{
    const { name, id_product} = req.query;
    const sqlQuery = `UPDATE product SET name = '${name}' WHERE id_product = '${id_product}'`;
    return {sqlQuery};
}
exports.UpdateProductPrice = (req)=>{
    const {id_product, price} = req.query;
    const sqlQuery = `UPDATE product SET price = ${price} WHERE id_product = '${id_product}'`;
    return {sqlQuery};
}
exports.UpdateProductImage = (req)=>{
    const { id_product, image } = req.query;
    const sqlQuery = `UPDATE product SET image = '${image}' WHERE id_product = '${id_product}'`;
    return {sqlQuery};
}

exports.DeleteProduct = (req)=>{
    const {id_product} = req.query;
    const sqlQuery = `DELETE FROM product WHERE id_product = '${id_product}'`;
    return {sqlQuery};
}