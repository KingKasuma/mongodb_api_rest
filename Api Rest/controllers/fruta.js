'use strict'

var Fruta = require('../models/fruta');

function pruebas(req, res){
	res.status(200).send({
		message: 'Esta ruta es de prueba en mi api restful con node y mongo'
	});
};

function saveFruta(req, res){
	var fruta = new Fruta();

	var params = req.body;

	if(params.nombre){
		fruta.nombre = params.nombre;
		fruta.color = params.color;
		fruta.temporada = params.temporada;

		fruta.save((err, frutaStored) => {
			if(err){
				res.status(500).send({
					message: 'Error en el servidor'
				});
			}else{
				if(frutaStored){
					res.status(200).send({
						fruta: frutaStored
					});
				}else{
					res.status(200).send({
						message: 'No se ha guardado la fruta'
					});
				}
			}
		});
	}else{
		res.status(500).send({
			message: 'El nombre de la fruta es obligatorio'
		});
	}
};

function getFrutas(req, res){
	Fruta.find({}).sort({'_id': -1}).exec((err, frutas) => {
		if(err){
			res.status(500).send({
				message: 'Error en el servidor'
			});
		}else{
			if(frutas){
				res.status(200).send({
					frutas
				});
			}else{
				res.status(404).send({
					message: 'No hay frutas'
				});	
			}
		}
	});
}

module.exports = {
	pruebas,
	saveFruta,
	getFrutas
};