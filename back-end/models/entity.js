'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    static associate(models) {
      Entity.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' })
      Entity.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' })
      Entity.hasMany(models.Project, { foreignKey: 'id_entity' })
    }
  };
  Entity.init({
    descricao: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    id_address: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entity',
  });
  return Entity;
};