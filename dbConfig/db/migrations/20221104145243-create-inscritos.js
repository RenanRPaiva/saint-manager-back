'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inscritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,       
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      evento_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Eventos",
          key: "id"
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inscritos');
  }
};