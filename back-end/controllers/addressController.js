const db = require('../models/index');

const Address = db.Address;

module.exports = {

    async saveAddress(req, res) {
        const { cidade, estado, endereco, numero, cep } = req.body;
        try {
            const address = await Address.create({ cidade, estado, endereco, numero, cep })
            return res.json(address);
        }
        catch (error) {
            console.log(error)
        }
    },

    async getAddresById(req, res) {
        const { address_id } = req.params;        
        try {
            const address = await Address.findByPk(address_id);
            return res.json(address);
        }
        catch (e) {
            console.log(e)
        }
    }
};