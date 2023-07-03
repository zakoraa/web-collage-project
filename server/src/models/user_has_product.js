exports.GetAllUserHasProduct = ()=>{
    const sqlQuery = "SELECT * FROM user_has_product";
    return {sqlQuery};
}


exports.AddUserHasProduct = (req)=>{
    const {id_userFK, id_productFK} = req.query;
    const sqlQuery = `INSERT INTO user_has_product(id_userFK, id_productFK)
    VALUES('${id_userFK}', '${id_productFK}')`;
    return {sqlQuery};
}

exports.DeleteUserHasProduct = (req)=>{
    const {id_userFK, id_productFK} = req.query;
    const sqlQuery =  `DELETE FROM user_has_product WHERE id_userFK = '${id_userFK}' AND id_productFK = '${id_productFK}'`;
    return {sqlQuery};
}