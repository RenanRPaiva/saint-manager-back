module.exports = class InscricaoEntity {

  constructor(
    id,
    idEvento,
    dataCadastro,
    dataCancelamento,
    membroEmail,
    membroNome,
    status
  ){
    this.id = id;
    this.idEvento = idEvento;
    this.dataCadastro = dataCadastro;
    this.dataCancelamento = dataCancelamento;
    this.membroEmail = membroEmail;
    this.membroNome = membroNome;
    this.status = status;
  }

  static build(
    id,
    idEvento,
    dataCadastro,
    dataCancelamento,
    membroEmail,
    membroNome
  ){

  let status = 'ativo';
  if (dataCancelamento && dataCancelamento != ' ' && dataCancelamento !== '') {
    status = 'inativo';
  }
  return new InscricaoEntity(
    id,
    idEvento,
    dataCadastro,
    dataCancelamento,
    membroEmail,
    membroNome,
    status
  )
}
}