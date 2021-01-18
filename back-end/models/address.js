'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.hasOne(models.Entity, { foreignKey: 'id_address' })
      Address.hasOne(models.Supplier, { foreignKey: 'id_address' })
      Address.hasOne(models.Project, { foreignKey: 'id_address' })
    }
  };
  Address.init({
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cep: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};