const kontakKamiModel = require('../models/kontakKamiModel');

const getAllkontakKami = async (req, res) => {
    try {
        const [data] = await kontakKamiModel.getAllkontakKami();

        res.json({
            message: 'GET all Kontak Kami success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const createkontakKami = async (req, res) => {
    const { body } = req;

    if (!body.id || !body.nama || !body.email || !body.isi_pesan || !body.date) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await kontakKamiModel.createkontakKami(body);
        res.status(200).json({
            message: 'CREATE new Kontak Kami success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
module.exports = { getAllkontakKami, createkontakKami};