'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JuegosSchema = Schema({
    nombre:String,
    lanzamiento:String,
    compania:String,
    genero:String
});


module.exports = mongoose.model('Juegos',JuegosSchema);
