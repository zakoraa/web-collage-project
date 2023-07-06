exports.UserRegister = (req)=>{
    const { name, id, email, password, role } = req.query;
    const sqlQuery = `INSERT INTO user(id_user, email, name, password, role) VALUES ('${id}','${email}', '${name}', '${password}', '${role}')`;
    const checker = `SELECT * FROM user WHERE id_user = '${id}' OR email = '${email}'`;
    return {sqlQuery, checker};
}