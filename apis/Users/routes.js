const { Router } = require('express');
const route = Router();

route.get('/users', (req, res) => res.send({msg: "Funcionando", serviceRoute: "Users Service API"}));

module.exports = route;