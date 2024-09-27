'use strict'
const express = require('express');
const routes = new express.Router();
const nodeProjectController = require('../controllers');
const mongodb = require('../db/connect');

routes.get('/', nodeProjectController.getUser);
routes.use('/users', require('./users'));
// routes.get('/professional', nodeProjectController.getUser);

module.exports = routes;
