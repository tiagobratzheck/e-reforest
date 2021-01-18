'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {  
    static associate(models) {
      Project.hasMany(models.Planting_register, { foreignKey: 'id_project', as: 'planting_register' });
      Project.belongsTo(models.Entity, { foreignKey: 'id_entity', as: 'entity'});      
      Project.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address'});
    }
  };
  Project.init({
    descricao: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(8,6),
    longitude: DataTypes.DECIMAL(9,6),
    data_cadastro: DataTypes.DATE,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    id_entity: DataTypes.INTEGER,
    id_address: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};