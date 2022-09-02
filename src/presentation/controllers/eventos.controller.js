const eventosStatus = ["ativo", "inativo"];
const listaEventoUseCase = require('../../core/eventos/listar-eventos.usecase')
const listaEventosMapper = require('../mapper/eventos/lista-evento.mapper')

const listaEvento = (req, res) => {
  //Extrair dados
  console.log(req.query);
  const query = req.query.status;

  //Validar dados
  if (query) {
    if (!eventosStatus.includes(req.query.status))
           return res.status(400).json({
            message: "",
           })
  }

  //Camada de negócio
  const listaEvento = listaEventoUseCase({ status: query })

  //Montar objeto de saída
  res.json(listaEventosMapper.domainToDto(listaEvento));  
}

const exibeEvento = (req, res) => {

  //Extrair dados
  console.log(req.params);
  const id = req.params.id;

  //Valida os dados
  if (!id || id == ' ') {
    return res.status(400).json({
      mensagem: "Evento id não informado",
    })
  }

  //Camada de negocio
  // const exibeEventos = 
}