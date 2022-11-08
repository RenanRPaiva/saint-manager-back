const { Router } = require('express');
const InscritoController = require('./controllers/InscritosController');
const route = Router();

route.get('/user/:user_id/inscritos/:inscrito_id', InscritoController.getInscrito);
route.put('/inscritos/:inscrito_id/user/:user_id', InscritoController.editInscrito);
route.post('/inscritos/:user_id/user', InscritoController.createInscrito);

module.exports = route;