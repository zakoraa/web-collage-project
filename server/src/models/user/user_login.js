exports.userLogin = (req)=>{
    const {email, password} = req.query;
    sqlQuery = "SELECT * FROM pelanggan";
    const values = [email, password];
    return {sqlQuery, values};
}

