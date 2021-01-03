'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Planting_register extends Model {  
    static associate(models) {
      Planting_register.belongsTo(models.Project, { foreignKey: 'id_project', as: 'project' });       
      Planting_register.belongsTo(models.Variety, { foreignKey: 'id_variety', as: 'variety' })   
    }
  };
  Planting_register.init({
    num_registro: DataTypes.INTEGER,
    data_plantio: DataTypes.DATE,
    quantidade: DataTypes.INTEGER,
    id_project: DataTypes.INTEGER,
    id_variety: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Planting_register',
  });
  return Planting_register;
};