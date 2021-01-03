const db = require('../models/index');

const Supplier = db.Supplier;

module.exports = {

    async saveSupplier(req, res) {
        const { descricao, telefone, email, id_address } = req.body;
        try {
            const supplier = await Supplier.create({ descricao, telefone, email, id_address })
            return res.json(supplier);
        }
        catch (error) {
            console.log(error)
        }
    },

    async getSupplierById(req, res) {
        const { sup_id } = req.params;
        try {
            const supplier = await Supplier.findOne({ where: { id: sup_id } });
            return res.json(supplier);
        }
        catch (e) {
            console.log(e)
        }
    },

    async getAllSuppliers(req, res) {        
        try {
            const supplier = await Supplier.findAll();
            return res.json(supplier);
        }
        catch (e) {
            console.log(e)
        }
    }
  
};