'use strict'
const express = require('express');
const routes = new express.Router();
const nodeProjectController = require('../controllers/nodeProjectController');
const mongodb = require('../db/connect');

routes.get('/', nodeProjectController.getUser);
// routes.get('/username', nodeProjectController.getUserName);
routes.get('/professional', nodeProjectController.getUser);

module.exports = routes;
