'use strict';
const { Model } = require('sequelize');
const CryptoJS = require('crypto-js');
const constants = require('../constants/keys')

module.exports = (sequelize, DataTypes) => {

  class User extends Model {

    static associate(models) {
      User.hasMany(models.Entity, { foreignKey: 'id_user', as: 'entity' })
    }

    static hashingPassword(password) {
      return CryptoJS.HmacSHA1(password, constants.PASSWORD_KEY_HASH).toString(CryptoJS.enc.Hex);
    }

  };

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeSave((user, options) => {
    if (user.password) {
      user.password = User.hashingPassword(user.password);
    }
  });

  User.beforeUpdate((user, options) => {
    if (user.password) {
      user.password = User.hashingPassword(user.password);
    }
  })

  return User;
};