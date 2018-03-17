"use strict";

var Todo = require("../app/models/todo");
var path = require('path');

module.exports = function (app) {

	app.get("/todos", function(req, res) {
		Todo.find( function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.get("/todos/:id", function(req, res) {
		Todo.find({_id: req.params.id}, function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.post("/todos", function(req, res) {
		Todo.create({nom: req.body.nom, presentation: ""}, function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.put("/todos/nom/:id", function(req, res) {
		Todo.update({_id: req.params.id}, {$set: {nom: req.body.nom}}, function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.put("/todos/presentation/:id", function(req, res) {
		Todo.update({_id: req.params.id}, {$set: {presentation: req.body.presentation}}, function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.delete("/todos/:id", function(req, res) {
		Todo.remove({_id: req.params.id}, function(err, post) {
			if(err) {
				res.send("err");
			}
			else {
				res.json(post);
			}
		});
	});

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../app/public/index.html')); 
	});

};