module.exports = class EventoEntity {
  constructor(
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
    status,
    inscricoes
  ) {
    this.id = id;
    this.imagem = imagem,
    this.nome = nome,
    this.descricao = descricao,
    this.departamento = departamento,
    this.coordenacao = coordenacao,
    this.equipe = equipe,
    this.data = data,
    this.hora = hora,
    this.local = local,
    this.status = status,
    this.inscricoes = inscricoes
  }
  static build(
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
    status,
    inscricoes
  ) {
    let _inscricoes = []   
    if (!inscricoes)
    this.inscricoes = _inscricoes
    let _coordenacao = []
    if(!coordenacao)
    this.coordenacao = _coordenacao
    let _equipe = [] 
    if(!equipe)
    this.equipe = _equipe


    return new EventoEntity(
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
    status,
    inscricoes
    )
  }
}