'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.connect('mongodb://localhost:27017/videojuegos',(err,res)=>{
	if(err){
		throw err;

	}
	else{
		console.log("Conexion exitosa con la base de datos");
		app.listen(port,function(){
			console.log("Servidor escuchando en http://localhost:"+port);
		});
	}
});