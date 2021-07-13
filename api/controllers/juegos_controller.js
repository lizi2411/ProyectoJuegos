'use strict'
const juegos = require('../models/juegos');
var Juegos = require('../models/juegos');


//funcion de prueba
function prueba(req,res){
    res.status(200).send({
        mensaje:'Esta es una respuesta exitosa a la peticion de prueba'
    });
}
//funcion que permite insertar un nuevo videojuego  en la BD 
function saveVideoj(req,res){
	var juegos = new Juegos();
	var params = req.body;
	juegos.nombre = params.nombre;
	juegos.lanzamiento = params.lanzamiento;
	juegos.compania = params.compania;
    juegos.genero = params.genero;
	if(juegos .nombre != '' && juegos.lanzamiento != '' && juegos.compania!='' && juegos.genero!=''){
		
	 	juegos.save((err,juegoGuardado)=> {
	 		if(err){
	 			res.status(500).send({mensaje:"Error del servidor"});
	 		}
	 		else{
	 			if(!juegoGuardado){
	 				res.status(404).send({mensaje:"Error al guardar registro"});
	 			}
	 			else
	 			{
	 				res.status(200).send({juegos:juegoGuardado});
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
function getVideoj(req,res){
    juegos.find(
        function(err,juegos){
            if (err){
                res.status(500).send({mensaje:'Error al obtener los datos'});
            }else{
                res.json(juegos);
            }
        }
    );
}
//funcion que permite modificar un documento en base de datos 
function updateVideoj(req,res){
	var idJuego = req.params.id;
	var juegoActualizado = req.body;
	juegos.findByIdAndUpdate(idJuego,juegoActualizado,(err,juegoModificado)=>{
		if(err){
			res.status(500).send({mensaje:'Error en el servidor'});
		}
		else{

			if(!juegoModificado){
				res.status(400).send({mensaje:'Error al actualizar'});
			}
			else
			{
				res.status(200).send({mensaje:'Se actualizo el registro'});
			}
		}
	});
}
//Funcion para eliminar un amigo 
function deleteVideoj(req,res){
	var idJuego = req.params.id;
	juegos.findByIdAndRemove(idJuego,(err,juegoEliminado)=>{
		if(err){
			res.status(500).send({mensaje:'Error en el servidor'});
		}
		else{
			if(!juegoEliminado){
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
function getVideoju(req,res){
	var idJuego = req.params.id;
	juegos.findById(idJuego,(err,juegoEncontrado)=>{
		if(err){
			res.status(500).send({mensaje:'error en el servidor'})
		}
		else
		{
			if(!juegoEncontrado){
				res.status(404).send({mensaje:'No se encontro el videojuego'});
			}
			else
			{
				res.status(200).send({mensaje:juegoEncontrado});
			}
		}
	});
}




//exportamos las funciones
module.exports={
    prueba,
    saveVideoj,
	getVideoj,
	updateVideoj,
	deleteVideoj,
	getVideoju
	
};