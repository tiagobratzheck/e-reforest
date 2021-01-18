const db = require('../models/index');

const Address = db.Address;

module.exports = {

    async saveAddress(req, res) {
        const { cidade, estado, endereco, numero, cep } = req.body;
        try {
            const address = await Address.create({ cidade, estado, endereco, numero, cep })
            return res.json(address);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async getAddresById(req, res) {
        const { address_id } = req.params.address_id;
        try {
            const address = await Address.findByPk(address_id);
            return res.json(address);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async updateAddressById(req, res) {
        try {
            const address_updated = await Address.update({
                cidade: req.body.cidade,
                estado: req.body.estado,
                endereco: req.body.endereco,
                numero: req.body.numero,
                cep: req.body.cep
            }, { where: { id: req.params.address_id } });
            return res.json(address_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async deleteAddress(req, res) {
        const { id } = req.params.address_id;
        try {
            const address_deleted = await Address.destroy({ where: { id: id } });
            return res.json(address_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    }
};