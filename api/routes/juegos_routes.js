'use strict'
var express = require ('express');
var JuegosController = require('../controllers/juegos_controller');

var api = express.Router();

//rutas:
api.get('/prueba-controlador',JuegosController.prueba);
api.post('/save',JuegosController.saveVideoj);
api.get('/videojs',JuegosController.getVideoj);
api.put('/videojup/:id',JuegosController.updateVideoj);
api.delete('/videojd/:id',JuegosController.deleteVideoj);
api.get('/videoj/:id',JuegosController.getVideoj);




//exportamos
module.exports = api;