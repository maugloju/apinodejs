const { Router } = require('express');
const UserController = require('./app/Controllers/UserController');
const User = require('./models/User');
const routes = new Router();

routes.get('/user', UserController.index);

routes.get('/user/listar', UserController.listar);

routes.get('/user/ver/:id', UserController.ver);

routes.get('/user/atualiza/:id', UserController.atualiza);

routes.get('/user/exclui/:id', UserController.exclui);

routes.post('/user/criar', UserController.criar); 

module.exports = routes;