"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Membro",
          email: "membro@membro.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Administrador",
          email: "admn@adm.com",
          senha: "$2a$10$gMg3HL3bcR78PfEPgDXaFunLfg9wQVUo/.bp60u9wB47Yi3kfLH/y",
          tipo: "Administrador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Renan",
          email: "membro@renan.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nislaine",
          email: "membro@nis.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elaine",
          email: "membro@elaine.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elias",
          email: "membro@elias.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olga Regina",
          email: "membro@olgaregina.com",
          senha: "$2a$10$VnL8YLFb8dI/Z2E0wkNAFOUbqgxWjo0gV262cE0h1rLqcsqXeARXe",
          tipo: "Ativo",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
