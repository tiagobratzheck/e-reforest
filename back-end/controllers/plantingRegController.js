const db = require('../models/index');

const PR = db.Planting_register;

module.exports = {

    async savePlantingRegister(req, res) {
        const { num_registro, data_plantio, quantidade, id_project, id_variety } = req.body;
        try {
            const planting_reg = await PR.create({ num_registro, data_plantio, quantidade, id_project, id_variety })
            return res.json(planting_reg);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async getPlantingRegisterById(req, res) {
        const { id } = req.params.id;
        try {
            const planting_reg = await PR.findByPk(id);
            return res.json(planting_reg);
        }
        catch (err) {
            console.log(res.status(404).json({ msg: err.message }));
        }
    },

    async getPlantingRegisterByProjectId(req, res) {
        const { id } = req.params.id;
        try {
            const plant_reg_project = await PR.findAll({
                where: {
                    id_project: id
                }
            });
            return res.json(plant_reg_project);
        }
        catch (err) {
            console.log(res.status(404).json({ msg: err.message }));
        }
    },

    async updatePlantingRegister(req, res) {
        try {
            const plant_reg_updated = await PR.update({
                num_registro: req.body.num_registro,
                data_plantio: req.body.data_plantio,
                quantidade: req.body.quantidade,
                id_project: req.body.id_project,
                id_variety: req.body.id_variety
            }, { where: { id: req.params.id } });
            return res.json(plant_reg_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async deletePlantingRegister(req, res) {
        const { id } = req.params.id;
        try {
            const plant_reg_deleted = await PR.destroy({ where: { id: id } });
            return res.json(plant_reg_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    }
}