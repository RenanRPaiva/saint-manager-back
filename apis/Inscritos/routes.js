const { Router } = require('express');
const route = Router();

route.get('/inscritos', (req, res) => res.send({msg: "Funcionando", serviceRoute: "Inscritos Service API"}));

module.exports = route;