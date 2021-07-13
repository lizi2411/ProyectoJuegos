'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// importamos nuestro archivo de rutas
var juegos_routes = require('./routes/juegos_routes');
var plataformas_routes = require('./routes/plataformas_routes')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    
    next();
});
// ruta base
app.use('/api',juegos_routes);
app.use('/api',plataformas_routes);

module.exports = app;