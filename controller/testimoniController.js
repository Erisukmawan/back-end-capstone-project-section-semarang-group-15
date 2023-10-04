const testimoniModel = require('../model/testimoniModel');

// Create testimoni 
const createTestimoni = async (req, res) => {
    try {
        await testimoniModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

// Get all testimoni
const getAllTestimoni = async (req, res) => {
    try {
        const Testimonis = await testimoniModel.findAll();
        res.status(200).json(Testimonis);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllTestimoni, createTestimoni };