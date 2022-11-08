const { Router } = require('express');
const route = Router();
const EventoController = require('./controllers/EventosController');

route.get('/eventos', EventoController.getAllEventos);

module.exports = route;