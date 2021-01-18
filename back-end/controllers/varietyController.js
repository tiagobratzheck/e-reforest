const db = require('../models/index');

const Variety = db.Variety;

module.exports = {

    async saveVariety(req, res) {
        const { descricao, num_controle, bioma, tempo_cresc, id_supplier } = req.body;
        try {
            const variety = await Variety.create({ descricao, num_controle, bioma, tempo_cresc, id_supplier })
            return res.json(variety);
        }
        catch (error) {
            console.log(res.status(500).json({ 'error': error.message }));
        }
    },

    async getVarietyById(req, res) {
        const { id } = req.params.variety_id;
        try {
            const variety = await Variety.findByPk(id);
            return res.json(variety);
        }
        catch (error) {
            console.log(res.status(500).json({ 'error': error.message }));
        }
    },

    async updateVarietyById(req, res) {
        try {
            const variety_updated = await Variety.update({
                descricao: req.body.descricao,
                num_controle: req.body.num_controle,
                bioma: req.body.bioma,
                tempo_cresc: req.body.tempo_cresc,
                id_supplier: req.body.id_supplier
            }, { where: { id: req.params.variety_id } });
            return res.json(variety_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }

    },

    async deleteVariety(req, res) {
        const { id } = req.params.varety_id;
        try {
            const variety_deleted = await Variety.destroy({ where: { id: id } });
            return res.json(variety_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    }
}