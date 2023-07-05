exports.GetAllUsers = ()=>{
    const sqlQuery = "SELECT * FROM user";
    return {sqlQuery};
}

exports.AddUser = (req)=>{
    const { name, id_user, price, image } = req.query;
    const sqlQuery = `INSERT INTO user(id_user, price, name, image) VALUES ('${id_user}','${price}', '${name}', '${image}')`;
    const checker = `SELECT * FROM user WHERE id_user = '${id_user}' OR name = '${name}'`;
    return {sqlQuery, checker};
}

exports.UpdateUser = (req)=>{
    const { id_user, name, address, phone_number, email,password} = req.query;
    const sqlQuery = `UPDATE user SET name = '${name}', address = '${address}', phone_number= '${phone_number}', email = '${email}' , password = '${password}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}

exports.UpdateUserName = (req)=>{
    const { id_user, name } = req.query;
    const sqlQuery = `UPDATE user SET name = '${name}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}

exports.UpdateUserAddress = (req)=>{
    const { id_user, address} = req.query;
    const sqlQuery = `UPDATE user SET address = '${address}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}
exports.UpdateUserPhoneNumber = (req)=>{
    const { id_user, phone_number} = req.query;
    const sqlQuery = `UPDATE user SET phone_number= '${phone_number}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}
exports.UpdateUserEmail = (req)=>{
    const { id_user, email} = req.query;
    const sqlQuery = `UPDATE user SET email= '${email}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}
exports.UpdateUserPassword = (req)=>{
    const { id_user, password} = req.query;
    const sqlQuery = `UPDATE user SET password= '${password}' WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}

exports.DeleteUser =(req)=>{
    const {id_user} = req.query;
    const sqlQuery = `DELETE FROM user WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}