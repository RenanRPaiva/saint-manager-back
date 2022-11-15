const { Router } = require('express');
const UsersController = require('./controllers/UsersController');
const route = Router();


route.get('/users', UsersController.getAllAtivo);
route.get('/user/:userId', UsersController.getOne);
route.post('/user', UsersController.createUser);
route.post('/restore-user/:user_id', UsersController.restoreUser);
route.put('/edit-user/:userId', UsersController.editUser);
route.delete('/delete-user/:userId', UsersController.deleteUser);



module.exports = route;