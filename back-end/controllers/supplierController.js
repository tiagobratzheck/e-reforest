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
            console.log(res.status(500).json({ msg: error.message }));
        }
    },

    async getSupplierById(req, res) {
        const { sup_id } = req.params.sup_id;
        try {
            const supplier = await Supplier.findOne({ where: { id: sup_id } });
            return res.json(supplier);
        }
        catch (e) {
            console.log(res.status(500).json({ msg: e.message }));
        }
    },

    async getAllSuppliers(req, res) {        
        try {
            const supplier = await Supplier.findAll();
            return res.json(supplier);
        }
        catch (e) {
            console.log(res.status(500).json({ msg: e.message }));
        }
    },

    async updateSupplierById(req, res) {
        try {
            const supplier_updated = await Supplier.update({
                descricao: req.body.descricao,
                telefone: req.body.telefone,
                email: req.body.email,
                id_address: req.body.id_address                
            }, { where: { id: req.params.sup_id } });
            return res.json(supplier_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async deleteSupplier(req, res) {
        const { id } = req.params.sup_id;
        try {
            const supplier_deleted = await Supplier.destroy({ where: { id: id } });
            return res.json(supplier_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    }
  
};