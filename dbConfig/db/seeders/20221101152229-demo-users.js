'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    "Users",
    [
      {
        name: "Membro",
        email: "membro@membro.com",
        senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",        
        tipo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Administrador",
        email: "admn@adm.com",
        senha: "$2a$10$gMg3HL3bcR78PfEPgDXaFunLfg9wQVUo/.bp60u9wB47Yi3kfLH/y",        
        tipo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
   );
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
