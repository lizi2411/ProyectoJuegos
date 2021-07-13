'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlataformaSchema = Schema({
    nombrep:String,
    id_j:String
});
module.exports = mongoose.model('Plataforma',PlataformaSchema);