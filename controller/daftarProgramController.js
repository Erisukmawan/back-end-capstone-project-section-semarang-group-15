const daftarProgramModel = require('../model/daftarProgramModel');

const getAlldaftarProgram = async (req, res) => {
    try {
        const [data] = await daftarProgramModel.getAlldaftarProgram();

        res.json({
            message: 'GET all Daftar Program success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const createdaftarProgram = async (req, res) => {
    const { body } = req;

    if (!body.id || !body.nama || !body.email || !body.no_tel || !body.nama_program || !body.kelas || !body.date) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await daftarProgramModel.createdaftarProgram(body);
        res.status(200).json({
            message: 'CREATE new Daftar Program success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
module.exports = { getAlldaftarProgram, createdaftarProgram };