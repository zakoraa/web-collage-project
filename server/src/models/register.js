exports.UserRegister = (req)=>{
    const { name, id, email, password } = req.query;
    const sqlQuery = `INSERT INTO user(id_user, email, name, password) VALUES ('${id}','${email}', '${name}', '${password}')`;
    const checker = `SELECT * FROM user WHERE id_user = '${id}' OR email = '${email}'`;

    return {sqlQuery, checker};
}