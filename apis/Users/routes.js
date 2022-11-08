const { Router } = require('express');
const UsersController = require('./controllers/UsersController');
const route = Router();

//Usuários
route.get('/users', UsersController.getAll);
route.get('/user/:userId', UsersController.getOne);
route.post('/user', UsersController.createUser);
route.put('/edit-user/:userId', UsersController.editUser);
route.delete('/delete-user/:userId', UsersController.deleteUser);

//Inscritos
route.get('/user/:user_id/inscritos/:inscrito_id', UsersController.getInscrito);
route.put('/inscritos/:inscrito_id/user/:user_id', UsersController.editInscrito);
route.post('/inscritos/:user_id/user', UsersController.createInscrito);

module.exports = route;