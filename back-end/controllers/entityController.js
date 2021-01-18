const db = require('../models/index');

const Entity = db.Entity;

module.exports = {

    async saveEntity(req, res) {
        const { descricao, telefone, email, id_address, id_user } = req.body;
        try {
            const entity = await Entity.create({ descricao, telefone, email, id_address, id_user })
            return res.json(entity);
        }
        catch (error) {
            console.log(res.status(500).json({ msg: error.message }));
        }
    },

    async getEntityById(req, res) {
        const { entity_id } = req.params;
        try {
            const entity = await Entity.findByPk(entity_id);
            return res.json(entity);
        }
        catch (err) {
            console.log(res.status(404).json({ msg: err.message }));
        }
    },

    async getAllEntities(req, res) {
        try {
            const entities = await Entity.findAll();
            return res.json(entities);
        }
        catch (e) {
            console.log(res.status(500).json({ msg: e.message }));
        }
    },

    async updateEntityById(req, res) {
        try {
            const entity_updated = await Entity.update({
                descricao: req.body.descricao,
                telefone: req.body.telefone,
                email: req.body.email,
                id_address: req.body.id_address,
                id_user: req.body.id_user
            }, { where: { id: req.params.id } });
            return res.json(entity_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ err: 'Error while updating entity' }));
        }
    },

    async deleteEntity(req, res) {
        const { id } = req.params.id;
        try {
            const entity_deleted = await Entity.destroy({ where: { id: id } });
            return res.json(entity_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ err: 'Error while deleting entity' }));
        }
    }
};