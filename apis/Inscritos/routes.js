const { Router } = require('express');
const InscritoController = require('./controllers/InscritosController');
const route = Router();

route.get('/user/:user_id/inscritos/:inscrito_id', InscritoController.getInscrito);
route.get('/inscritos/:eventoId', InscritoController.getInscritoPorEvento);
route.get('/user/:user_id/inscrito', InscritoController.getInscritoPorUser);
route.put('/inscritos/:inscrito_id/user/:user_id', InscritoController.editInscrito);
route.post('/inscritos/:user_id/user', InscritoController.createInscrito);
route.delete('/inscritos/:inscrito_id', InscritoController.deleteInscrito);

module.exports = route;