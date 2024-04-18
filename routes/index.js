const routes = require('express').Router();

const baseController = require('../controllers');

routes.get('/', baseController.getName);


// routes.get('/index.html', baseController.index);


module.exports = routes;