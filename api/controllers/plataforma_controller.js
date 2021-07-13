'use strict'
const plataforma = require('../models/plataformas');
var Plataforma = require('../models/plataformas');

//funcion que permite insertar una nueva plataforma en la BD 
function savePlataforma(req,res){
	var plataforma = new Plataforma();
	var params = req.body;
	plataforma.nombrep = params.nombrep;
	plataforma.id_j = params.id_j;
	
	if(plataforma.nombrep != '' && plataforma.id_j !=''){
		
	 	plataforma.save((err,plataformaGuardada)=> {
	 		if(err){
	 			res.status(500).send({mensaje:"Error del servidor"});
	 		}
	 		else{
	 			if(!plataformaGuardada){
	 				res.status(404).send({mensaje:"Error al guardar registro"});
	 			}
	 			else
	 			{
	 				res.status(200).send({plataforma:plataformaGuardada});
	 			}
	 		}
	 	});
	}
	else
	{
		res.status(500).send({mensaje:'Hay que teclear todos los campos'});
	}
}
//funcion que permite obtener todos los documentos de la BD
function getPlataformas(req,res){
    plataforma.find(
        function(err,plataforma){
            if (err){
                res.status(500).send({mensaje:'Error al obtener los datos'});
            }else{
                res.json(plataforma);
            }
        }
    );
}
//funcion que permite modificar un documento en base de datos 
function updatePlataforma(req,res){
	var idPlataforma = req.params.id;
	var plataformaActualizada = req.body;
	plataforma.findByIdAndUpdate(idPlataforma,plataformaActualizada,(err,plataformaModificada)=>{
		if(err){
			res.status(500).send({mensaje:'Error en el servidor'});
		}
		else{

			if(!plataformaModificada){
				res.status(400).send({mensaje:'Error al actualizar'});
			}
			else
			{
				res.status(200).send({mensaje:'Se actualizo el registro'});
			}
		}
	});
}
//Funcion para eliminar un plataforma
function deletePlataforma(req,res){
	var idPlataforma = req.params.id;
	plataforma.findByIdAndRemove(idPlataforma,(err,plataformaEliminada)=>{
		if(err){
			res.status(500).send({mensaje:'Error en el servidor'});
		}
		else{
			if(!plataformaEliminada){
				res.status(404).send({mensaje:'No se pudo eliminar'});
			}
			else
			{
				res.status(200).send({mensaje:'Se elimino el registro'});
			}
		}
	});
}
//funcion que permite obtener un videojuego  mediante su ID
function getPlataforma(req,res){
	var idPlataforma = req.params.id;
	plataforma.findById(idPlataforma,(err,plataformaEncontrada)=>{
		if(err){
			res.status(500).send({mensaje:'error en el servidor'})
		}
		else
		{
			if(!plataformaEncontrada){
				res.status(404).send({mensaje:'No se encontro plataforma'});
			}
			else
			{
				res.status(200).send({mensaje:plataformaEncontrada});
			}
		}
	});
}
module.exports={
  
	savePlataforma,
	getPlataformas,
	updatePlataforma,
	deletePlataforma,
	getPlataforma
};