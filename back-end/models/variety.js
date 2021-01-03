'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Variety extends Model {    
    static associate(models) {
      Variety.belongsTo(models.Supplier, { foreignKey: 'id_supplier', as: 'supplier' })
      Variety.hasMany(models.Planting_register, { foreignKey: 'id_variety' })
    }
  };
  Variety.init({
    descricao: DataTypes.STRING,
    num_controle: DataTypes.INTEGER,
    bioma: DataTypes.STRING,
    tempo_cresc: DataTypes.INTEGER,
    id_supplier: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Variety',
  });
  return Variety;
};