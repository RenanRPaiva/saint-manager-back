const { Router } = require('express');
const UsersController = require('./controllers/UsersController');
const route = Router();

route.get('/users', UsersController.getAll);
route.get('/user/:userId', UsersController.getOne);


module.exports = route;