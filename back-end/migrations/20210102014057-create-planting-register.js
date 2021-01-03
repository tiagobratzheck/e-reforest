'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Planting_registers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_registro: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_plantio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_project: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Projects', key: 'id', as: 'id_project'},
	      onUpdate: 'CASCADE',
	      onDelete: 'CASCADE'
      },
      id_variety: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Varieties', key: 'id', as: 'id_variety'},
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
    await queryInterface.dropTable('Planting_registers');
  }
};