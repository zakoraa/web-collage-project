exports.GetAllUsers = ()=>{
    const sqlQuery = "SELECT * FROM user";
    return {sqlQuery};
}

exports.DeleteUser =(req)=>{
    const {id_user} = req.query;
    const sqlQuery = `DELETE FROM user WHERE id_user = '${id_user}'`;
    return {sqlQuery};
}