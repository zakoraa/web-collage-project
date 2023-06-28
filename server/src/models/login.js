exports.UserLogin = (req)=>{
    const {email, password} = req.query;
    sqlQuery = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;
    const values = [email, password];
    return {sqlQuery, values};
}
exports.GetUsers = ()=>{
    sqlQuery = "SELECT * FROM user";
    return {sqlQuery};
}