exports.adminLogin = (req)=>{ 
    const {email, password} = req.query;
    sqlQuery = "SELECT * FROM admin";
    const values = [email, password];
    return {sqlQuery, values};
}

