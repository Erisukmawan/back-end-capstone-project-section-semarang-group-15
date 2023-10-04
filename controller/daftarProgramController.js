const DaftarProgramModel = require('../model/daftarProgramModel');

// Create daftar program 
const createdaftarProgram = async (req, res) => {
    try {
        await DaftarProgramModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

// Get all daftar program
const getAlldaftarProgram = async (req, res) => {
    try {
        const DaftarPrograms = await DaftarProgramModel.findAll();
        res.status(200).json(DaftarPrograms);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAlldaftarProgram, createdaftarProgram };