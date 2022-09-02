const dtoToDomain = ({}) => {}

const domainToDto = (listaEventos) => {
  return {
    total: listaEventos.length,
    eventos: [
      ... listaEventos.map(item => {
        return {
         id: item.id,
         imagem: item.imagem,
         nome: item.nome,
         descricao: item.descricao,
         departamento: item.departamento,
         coordenacao: item.coordenacao,
         equipe: item.equipe,
         data: item.data,
         hora: item.hora,
         local: item.local,
         status: item.status  
        }
      })
    ]
  }
}

module.exports = {
  dtoToDomain,
  domainToDto
}
