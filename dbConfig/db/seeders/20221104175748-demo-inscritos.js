'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Inscritos", 
      [
        {
          status: "Inscrito",
          user_id: 3,
          evento_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "Inscrito",
          user_id: 4,
          evento_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "Cancelado",
          user_id: 5,
          evento_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
