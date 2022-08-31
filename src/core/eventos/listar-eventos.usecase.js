const eventoRepository = require('../../infra/data/repositories/evento.repository')

module.exports = ({ status }) => {
  
  // Extrair lógica de construcao do filtro de dentro do usecase

  const filter = {
    status
  };

  const resultFromDB = eventoRepository.search({status});

  return resultFromDB;
}