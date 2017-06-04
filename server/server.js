var express = require('express');
var app = express();

	app.get('/sum/:num1/:num2', function(req, res){
	    var resultado = parseInt(req.params.num1) + parseInt(req.params.num2);
	    res.json(resultado);
	});

	app.get('/mul/:num1/:num2', function(req, res){
	    var resultado = parseInt(req.params.num1) * parseInt(req.params.num2);
	    res.json(resultado);
	});

app.listen(4000);