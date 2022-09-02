const eventoRepository = require('../../infra/data/repositories');
const inscricoaoRepository = require

module.exports = (id) => {
  const evento = eventoRepository.findById(id);

  if(!evento) {
    return undefined;
  }

  // let listaInscricoes =  
}