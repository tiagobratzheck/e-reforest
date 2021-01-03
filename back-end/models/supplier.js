'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {    
    static associate(models) {
      Supplier.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' })
      Supplier.hasMany(models.Variety, { foreignKey: 'id_supplier' })
    }
  };
  Supplier.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    descricao: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    id_address: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};