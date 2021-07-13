'use strict'
var express = require ('express');
var PlataformaController = require('../controllers/plataforma_controller');
var api = express.Router();
api.post('/savep',PlataformaController.savePlataforma);
api.get('/obtenerps',PlataformaController.getPlataformas);
api.put('/updatep/:id',PlataformaController.updatePlataforma);
api.delete('/borrarp/:id',PlataformaController.deletePlataforma);
api.get('/obtnerp/:id',PlataformaController.getPlataforma);
//exportamos
module.exports = api;