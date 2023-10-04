const programModel = require('../model/programModel');

// Create program 
const createProgram = async (req, res) => {
    try {
        await programModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

// Get all program
const getAllProgram = async (req, res) => {
    try {
        const Programs = await programModel.findAll();
        res.status(200).json(Programs);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllProgram, createProgram };