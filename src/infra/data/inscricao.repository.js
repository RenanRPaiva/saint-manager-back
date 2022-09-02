const InscricaoEntity = require('../../core/inscricoes/inscricao.entity');

const data = [
  {
    id: '1',
    idEvento: '1',
    dataCadastro: '2021-10-05',
    membroEmail:  'membro@membro.com',
    membroNome: 'Membro 1'
  },
]

const search = ({ idEvento }) => {

  let resultFromDB = data;
  if (idEvento) {
    
  }
}