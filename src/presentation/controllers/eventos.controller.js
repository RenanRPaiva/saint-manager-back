const eventosStatus = ["ativo", "inativo"];
const listaEventoUseCase = require('../../core/eventos/listar-eventos.usecase')

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
}

const ueResult = listaEventoUseCase({ status: query })

// Montar objeto de saída
