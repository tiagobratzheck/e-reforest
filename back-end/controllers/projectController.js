const Sequelize = require('sequelize');
const db = require('../models/index');

const Project = db.Project;

module.exports = {

    async saveProject(req, res) {
        const { descricao, latitude, longitude, data_cadastro, data_inicio, data_fim, id_entity, id_address } = req.body;
        try {
            const project = await Project.create({ descricao, latitude, longitude, data_cadastro, data_inicio, data_fim, id_entity, id_address })
            return res.json(project);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },


    async getProjectById(req, res) {
        const { id } = req.params;        
        try {
            const project = await Project.findByPk(id, {
                include: [{ association: "planting_register" }]
            });
            return res.json(project);
        }
        catch (err) {
            console.log(res.status(500).json({ err: err.message }))
        }
    },


    async getAllProject(req, res) {
        try {
            const projects = await Project.findAll({
                attributes: ['descricao', 'latitude', 'longitude', 'data_cadastro', 'id_entity', 'id_address'],
                include: [{
                    model: db.Entity,
                    as: 'entity',
                    where: { id: Sequelize.col('project.id_entity') }
                }]
            });
            return res.json(projects);
        }
        catch (err) {
            console.log(res.status(500).json({ err: err.message }))
        }
    },


    async updateProjectById(req, res) {
        try {
            const project_updated = await Project.update({
                descricao: req.body.descricao,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                data_cadastro: req.body.data_cadastro,
                data_inicio: req.body.data_inicio,
                data_fim: req.body.data_fim,
                id_entity: req.body.id_entity,
                id_address: req.body.id_address
            }, { where: { id: req.params.project_id } });
            return res.json(project_updated);
        }
        catch (err) {
            console.log(res.status(500).json({ msg : err.message }));
        }
    },


    async deleteProject(req, res) {        
        try {
            const project_deleted = await Project.destroy({ where: { id: req.params.id } });
            return res.json(project_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    }
}