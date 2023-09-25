const testimoniModel = require('../models/testimoniModel');

const getAllTestimoni = async (req, res) => {
    try {
        const [data] = await testimoniModel.getAllTestimoni();

        res.json({
            message: 'GET all Testimoni success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const createTestimoni = async (req, res) => {
    const { body } = req;

    if (!body.id || !body.nama || !body.nama_program || !body.pesan_testimoni || !body.foto) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await testimoniModel.createTestimoni(body);
        res.status(200).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
module.exports = { getAllTestimoni, createTestimoni};