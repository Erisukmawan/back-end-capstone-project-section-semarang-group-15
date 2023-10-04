const KontakKamiModel = require('../model/kontakKamiModel');

// Create kontak kami
const createkontakKami = async (req, res) => {
    try {
        await KontakKamiModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

// Get all kontak kami
const getAllkontakKami = async (req, res) => {
    try {
        const KontakKamis = await KontakKamiModel.findAll();
        res.status(200).json(KontakKamis);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllkontakKami, createkontakKami };