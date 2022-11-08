'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      shortdescription: {
        type: Sequelize.STRING
      },
      depart: {
        type: Sequelize.STRING
      },
      coord_id: {
        allowNull:false,        
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      team_id: {
        allowNull:false,        
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      date: {
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.TIME
      },
      local: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull:false,        
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
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
    await queryInterface.dropTable('Eventos');
  }
};