const programModel = require('../models/programModel');

const getAllProgram = async (req, res) => {
    try {
        const [data] = await programModel.getAllProgram();

        res.json({
            message: 'GET all Progam success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const createProgram = async (req, res) => {
    const { body } = req;

    if (!body.id || !body.nama_program || !body.harga_program) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await programModel.createProgram(body);
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
module.exports = {getAllProgram, createProgram};