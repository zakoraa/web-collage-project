exports.adminRegister = (req)=>{
    const {name, id, email, password} = req.query;
    const sqlQuery = `INSERT INTO admin(id_admin, nama_admin, email, password)
    VALUES ('${id}', '${email}', '${name}', ${password})`;
    const checker = `SELECT FROM admin WHERE id_admin = '${id}' OR email = '${email}'`;
    return {sqlQuery, checker};
}

