const EventoEntity = require("../../../core/eventos/evento.entity");

const data = [
  {
      id: "1",
      imagem: "https://radio93.com.br/wp-content/uploads/2020/10/Jovens-na-Igreja_3-800x450.jpg",
      nome: "Culto Jovem",
      descricao: "1° Culto Jovem do ano! Seu presença é essencial, não esqueça da mascara!",
      departamento: "Jovem",
      coordenacao: [
        "John",
        "Anna"
      ],
      equipe: [
        "Ellen",
        "Cleber",
        "João",
        "José"
      ],
      data: "2022-05-01",
      hora: "19:00",
      local: "Templo Principal",
      status: "ativo",
    },
    {
      id: "2",
      imagem: "http://1.bp.blogspot.com/-p_U687f1VzM/T5ioaD1gnGI/AAAAAAAAGtg/hKcGzY6WBv0/s1600/cha.jpg",
      nome: "Ela +",
      descricao: "Chá do reencontro das irmãs! Não perca, trazer um prato de salgado ou doce!",
      departamento: "Mulheres",
      coordenacao: [
        "Ana Maria"
      ],
      equipe: [
        "Sirlene",
        "Claudia",
        "Rute"
      ],
      data: "2022-06-15",
      hora: "15:00",
      local: "Salão do Templo Principal",
      status: "ativo",
    },
    {
      id: "3",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Churrasco_carioca.jpg",
      nome: "Churrasco!",
      descricao: "Churrasco organizado pelo departamento de Homens.",
      departamento: "Homens",
      coordenacao: [
        "João Paulo"
      ],
      equipe: [
        "Pedro",
        "Paulo",
        "Henquique"
      ],
      data: "2022-08-06",
      hora: "11:00",
      local: "Salão do Templo Principal",
      status: "ativo",
    },
    {
      id: "4",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0L9Gu9da85Fl7cxSfI0WY4s7l_ZO8cuK8Q&usqp=CAU",
      nome: "Culto dos Adolescentes",
      descricao: "Culto dos adolescentes com todo o campo, não perca!",
      departamento: "Adolescente",
      coordenacao: [
        "Ricardo",
        "Julia"
      ],
      equipe: [
        "Perdo",
        "João",
        "Ana",
        "Beatriz"
      ],
      data: "2022-09-15",
      hora: "19:00",
      local: "Templo Principal",
      status: "ativo",
    },
    {
      id: "5",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9zfRpSMWc0IJ-4HlX6ApP2c9AX1cVFd3SQ&usqp=CAU",
      nome: "Grupo de oração: De Joelhos",
      descricao: "Grupo de oração matinal, venha!",
      departamento: "Mulheres",
      coordenacao: [
        "Ana Maria"
      ],
      equipe: [
        "Debora"
      ],
      data: "2022-10-11",
      hora: "07:30",
      local: "Templo Antigo",
      status: "ativo",
    },
    {
      id:"6",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF6O6ZH8xn5yhMjEqnd18IhYWQnfaEwck7A&usqp=CAU",
      nome: "Crianças",
      descricao: "Diversão para seu filho, com pausas para lanche e aprender  mais da biblia de forma divertida!",
      departamento: "Infantil",
      coordenacao: [
        "Maria",
        "João"
      ],
      equipe: [
        "Tia Ana",
        "Tia Julia",
        "Tia Rute"
      ],
      data: "2022-10-08",
      hora: "14:00",
      local: "Salão do Templo Antigo",
      status: "inativo",
    }  
]

const search = ({ status }) => {
  let resultFromDb = data;

  if (status) {
    resultFromDb = data.filter(item => item.status == status)
  }

  // Extrair lógica de conversao de dataObject para Entity

  return resultFromDb.map(item => {
    const {
     id,
     imagem,
     nome,
     descricao,
     departamento,
     coordenacao,
     equipe,
     data,
     hora,
     local,
     status
    } = item;
    return EventoEntity.build(
     id,
     imagem,
     nome,
     descricao,
     departamento,
     coordenacao,
     equipe,
     data,
     hora,
     local,
     status    
    )
  });
}

const findById = (id) => {
  return data.find(item => {
    return item.id == id
  })
}

module.exports = {
  search,
  findById
}