'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas

// body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar CORS

// rutas
app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Esta ruta es de prueba en mi api restful con node y mongo'
	});
});

module.exports = app;