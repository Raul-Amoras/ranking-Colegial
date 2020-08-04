const express = require('express');

const OngContoller = require('./controllers/OngController');
const IncidentContoller = require('./controllers/IncidentController');
const { Router } = require('express');

const routes = express.Router();

routes.get('/ongs', OngContoller.List);
routes.post('/ongs', OngContoller.create);

routes.post('/incidents', IncidentContoller.create);
routes.get('/incidents', IncidentContoller.List);
routes.delete('/incidents/:id', IncidentContoller.delete);


module.exports = routes;