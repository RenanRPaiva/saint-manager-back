const { Router } = require('express');
const route = Router();
const EventoController = require('./controllers/EventosController');

route.get('/eventos', EventoController.getAllEventos);
route.get('/evento/:evento_id', EventoController.getOneEvento);
route.post('/evento', EventoController.createEvento);

module.exports = route;