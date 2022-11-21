const { Router } = require('express');
const { authMidAdm, authMidUser } = require('../Users/services/auth.service');
const InscritoController = require('./controllers/InscritosController');
const route = Router();

route.get('/user/:user_id/inscritos/:inscrito_id', InscritoController.getInscrito);
route.get('/inscritos/:eventoId', authMidAdm, authMidUser, InscritoController.getInscritoPorEvento);
route.get('/user/:user_id/inscrito', authMidAdm, authMidUser,InscritoController.getInscritoPorUser);
route.put('/inscritos/:inscrito_id/user/:user_id', authMidAdm, authMidUser, InscritoController.editInscrito);
route.post('/inscritos/:user_id/user', InscritoController.createInscrito);
route.post('/user/disabled/:user_id', authMidAdm, InscritoController.disableUser);
route.delete('/inscritos/:inscrito_id', authMidAdm, authMidUser, InscritoController.deleteInscrito);

module.exports = route;