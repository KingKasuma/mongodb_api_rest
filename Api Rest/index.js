'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mongo', {useMongoClient: true})
		.then(() => {
			console.log('La conexion a MongoDB se ha realizado correctamente!!');
		})
		.catch(err => console.log(err));