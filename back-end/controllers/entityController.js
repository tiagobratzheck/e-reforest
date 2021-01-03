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
            console.log(error)
        }
    },

    async getEntityById(req, res) {
        const { entity_id } = req.params;
        try {
            const entity = await Entity.findByPk(entity_id);
            return res.json(entity);
        }
        catch (e) {
            console.log(e)
        }
    },

    async getAllEntities(req, res) {
        try {
            const entities = await Entity.findAll();
            return res.json(entities);
        }
        catch (e) {
            console.log(e)
        }
    }
};