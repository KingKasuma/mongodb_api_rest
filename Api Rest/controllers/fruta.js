'use strict'

function pruebas(req, res){
	res.status(200).send({
		message: 'Esta ruta es de prueba en mi api restful con node y mongo'
	});
};

module.exports = {
	pruebas
};