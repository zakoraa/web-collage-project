exports.UserLogin = (req)=>{
    const {email, password} = req.query;
    const sqlQuery = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;
    const values = [email, password];
    return {sqlQuery, values};
}
