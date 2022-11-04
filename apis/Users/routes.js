const { Router } = require('express');
const UsersController = require('./controllers/UsersController');
const route = Router();

route.get('/users', UsersController.getAll);
route.get('/user/:userId', UsersController.getOne);
route.post('/user', UsersController.createUser);
route.put('/edit-user/:userId', UsersController.editUser);
route.delete('/delete-user/:userId', UsersController.deleteUser);

module.exports = route;