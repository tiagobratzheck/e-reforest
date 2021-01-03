'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
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
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: false
      },
      id_entity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Entities', key: 'id', as: 'id_entity'},
	      onUpdate: 'CASCADE',
	      onDelete: 'CASCADE'
      },
      id_address: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Addresses', key: 'id', as: 'id_address'},
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
    await queryInterface.dropTable('Projects');
  }
};