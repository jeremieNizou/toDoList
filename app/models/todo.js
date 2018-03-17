"use strict";

var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	nom: {type:String},
	presentation: {type:String}
});

module.exports = mongoose.model('Todo', TodoSchema);
