const { Router } = require('express');
const { authMidAdm } = require('../Users/services/auth.service');
const route = Router();
const EventoController = require('./controllers/EventosController');

route.get('/eventos', EventoController.getAllEventos);
route.get('/evento/:evento_id', EventoController.getOneEvento);
route.post('/evento', authMidAdm, EventoController.createEvento);
route.put('/evento/:evento_id', authMidAdm, EventoController.editEvento);
route.delete('/evento/:evento_id', authMidAdm, EventoController.deleteEvento);

module.exports = route;