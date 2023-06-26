exports.userRegister = (req)=>{
    const {name, id, email, password} = req.query;
    const sqlQuery = `INSERT INTO pelanggan(id_pelanggan, nama_pelanggan, email, password)
    VALUES ('${id}', '${email}', '${name}', ${password})`;
    const checker = `SELECT FROM pelanggan WHERE id_pelanggan = '${id}' OR email = '${email}'`;
    return {sqlQuery, checker};
}

