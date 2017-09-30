//Se importan los modulose
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

//Se conecta a la bd
mongoose.connect("mongodb://localhost/vinos");

//Esquema de la BD
var vinosSchema = 
{
	nombre: String,
	anio: Number,
	uva: String,
	pais: String,
	region: String,
	descripcion: String,
	foto: String
};

//Inicializamos el modelo a la BD
var Vinos = mongoose.model('vinos',vinosSchema);


//Rutas 
router.get('/', obtenerTodos);

router.get('/:id', obtenerId);

router.post('/', agregarVino);

router.put('/:id', actualizarId);

router.delete('/:id', borrarId);






//Funciones de callback
function  obtenerTodos(req, res, next) {
	Vinos.find(function(error,vinos){
		res.send(vinos);
	});
}


function  obtenerId(req, res, next) {
	Vinos.findOne({"_id": req.params.id},function(error,vinos){
		res.send(vinos);
	});
}



function  agregarVino(req, res, next) {
	var data = 
	{
		nombre: req.body.nombre,
		anio: req.body.anio,
		uva: req.body.uva,
		pais: req.body.pais,
		region: req.body.region,
		descripcion: req.body.descripcion,
		foto: req.body.foto
	};

	var vino = new Vinos(data);
	
	vino.save(function(error){
		if(error){
			res.send(500);
		}else{
			res.send(JSON.stringify(data));
		}
	});

}


function  actualizarId(req, res, next) {
	var data = 
	{
		nombre: req.body.nombre,
		anio: req.body.anio,
		uva: req.body.uva,
		pais: req.body.pais,
		region: req.body.region,
		descripcion: req.body.descripcion,
		foto: req.body.foto
	};

	Vinos.update({"_id": req.params.id}, data, function(error){
		if(error){
			res.send(500);
		}else{
			res.send(JSON.stringify(data));
		}
	});
}


function  borrarId(req, res, next) {
	Vinos.remove({"_id": req.params.id}, function(error){
		if(error){
			res.send(500);
		}else{
			res.send(200);
		}
	});

}

module.exports = router;
