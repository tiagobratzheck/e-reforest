'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Varieties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      num_controle: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bioma: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tempo_cresc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Suppliers', key: 'id', as: 'id_supplier'},
	      onUpdate: 'CASCADE',
	      onDelete: 'CASCADE'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Varieties');
  }
};