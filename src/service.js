const express = require('express');
const eventoRoutes = require('./presentation/routes/eventos.route');
const inscricoesRoutes = require('./presentation/routes/inscricoes.route');
const app = express()


app.use(express.json());

eventoRoutes(app);
inscricoesRoutes(app);

module.exports = app