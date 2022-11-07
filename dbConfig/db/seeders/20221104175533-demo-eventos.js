'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
      "Eventos",
       [
        {
          image: "https://radio93.com.br/wp-content/uploads/2020/10/Jovens-na-Igreja_3-800x450.jpg",
          name: "Culto Jovem",
          shortDescription: "1° Culto Jovem do ano! Seu presença é essencial, não esqueça da mascara!",
          depart: "Jovem",
          coord_id: 3,
          team_id: 4,
          date: "2022-05-01",
          time: "19:00",
          local: "Templo Principal",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: "http://1.bp.blogspot.com/-p_U687f1VzM/T5ioaD1gnGI/AAAAAAAAGtg/hKcGzY6WBv0/s1600/cha.jpg",
          name: "Ela +",
          shortDescription: "Chá do reencontro das irmãs! Não perca, trazer um prato de salgado ou doce!",
          depart: "Mulheres",
          coord_id: 7,
          team_id: 5,
          date: "2022-06-15",
          time: "15:00",
          local: "Salão do Templo Principal",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Churrasco_carioca.jpg",
          name: "Churrasco!",
          shortDescription: "Churrasco organizado pelo departamento de Homens.",
          depart: "Homens",
          coord_id: 6,
          team_id: 1,
          date: "2022-08-06",
          time: "11:00",
          local: "Salão do Templo Principal",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {         
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0L9Gu9da85Fl7cxSfI0WY4s7l_ZO8cuK8Q&usqp=CAU",
          name: "Culto dos Adolescentes",
          shortDescription: "Culto dos adolescentes com todo o campo, não perca!",
          depart: "Adolescente",
          coord_id: 6,
          team_id: 4,
          date: "2022-09-15",
          time: "19:00",
          local: "Templo Principal",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9zfRpSMWc0IJ-4HlX6ApP2c9AX1cVFd3SQ&usqp=CAU",
          name: "Grupo de oração: De Joelhos",
          shortDescription: "Grupo de oração matinal, venha!",
          depart: "Mulheres",
          coord_id: 5,
          team_id: 7,
          date: "2022-10-11",
          time: "07:30",
          local: "Templo Antigo",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF6O6ZH8xn5yhMjEqnd18IhYWQnfaEwck7A&usqp=CAU",
          name: "Crianças",
          shortDescription: "Diversão para seu filho, com pausas para lanche e aprender  mais da biblia de forma divertida!",
          depart: "Infantil",
          coord_id: 7,
          team_id: 5,
          date: "2022-10-08",
          time: "14:00",
          local: "Salão do Templo Antigo",
          user_id: 2,
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
