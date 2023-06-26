exports.showProducts = (req)=>{
    const {sql} = req.query;
    const query = `SELECT * FROM barang ${sql}`
    return query;
}

exports.addProduct = (req)=>{
    const {id_barang, nama_barang, harga, gambar_barang} = req.query;
    const sqlQuery = `INSERT INTO barang(id_barang, nama_barang,
        harga, gambar_barang)
        VALUES('${id_barang}', '${nama_barang}', ${harga}, '${gambar_barang}')`;
    const checker = `SELECT FROM barang WHERE id_barang = '${id_barang}'`;
    return {sqlQuery, checker};
}

exports.updateProduct = (req)=>{
    const {id_barang, nama_barang, harga, gambar_barang } = req.body;
    const sqlQuery = `UPDATE barang SET id_barang = '${id_barang}', nama_barang = '${nama_barang}', 
    harga = ${harga}, gambar_barang = '${gambar_barang}'`;
    return sqlQuery;
}

exports.deleteProduct = (req)=>{
    const {id_barang} = req.query;
    const sqlQuery = `DELETE FROM barang WHERE id_barang = '${id_barang}'`;
    return sqlQuery;
}

