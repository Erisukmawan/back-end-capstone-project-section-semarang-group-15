const connection = require('../config/database');

const getAllkontakKami = () => {
    const SQLQuery = 'SELECT * FROM kontak_kami';
    return connection.execute(SQLQuery);
}
const createkontakKami = (body) => {
    const SQLQuery = `INSERT INTO kontak_kami (id, nama, email, isi_pesan, date) VALUES(${body.id}, '${body.nama}', '${body.email}',  '${body.isi_pesan}',  ${body.date})`;

    return connection.execute(SQLQuery);
}

module.exports = { getAllkontakKami, createkontakKami };