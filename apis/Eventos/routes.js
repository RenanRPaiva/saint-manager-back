const { Router } = require('express');
const route = Router();

route.get('/eventos', (req, res) => res.send({msg: "Funcionando", serviceRoute: "Eventos Service API"}));

module.exports = route;