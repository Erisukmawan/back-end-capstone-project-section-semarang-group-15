const connection = require('../config/database');

const getAllkontakKami = () => {
    const SQLQuery = 'SELECT * FROM kontak_kami';
    return connection.execute(SQLQuery);
}
const createkontakKami = (body) => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const SQLQuery = `INSERT INTO kontak_kami (id, nama, email, isi_pesan, date) VALUES(${body.id}, '${body.nama}', '${body.email}',  '${body.isi_pesan}',  '${timestamp}')`;
    return connection.execute(SQLQuery);
}

module.exports = { getAllkontakKami, createkontakKami };