const { Router } = require('express');
const UsersController = require('./controllers/UsersController');
const { authMidAdm } = require('./services/auth.service');
const route = Router();

route.get('/users', authMidAdm, UsersController.getAll);
route.get('/users-Ativo', authMidAdm, UsersController.getAllAtivo);
route.get('/users-Inativo', authMidAdm, UsersController.getAllInativo);
route.get('/users-Adm', authMidAdm, UsersController.getAllAdm);
route.get('/user/:userId', authMidAdm, UsersController.getOne);
route.post('/user', UsersController.createUser);
route.post('/restore-user/:user_id', authMidAdm, UsersController.restoreUser);
route.put('/edit-user/:userId', UsersController.editUser);
route.delete('/delete-user/:userId', authMidAdm, UsersController.deleteUser);



module.exports = route;