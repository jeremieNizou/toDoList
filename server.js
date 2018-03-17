"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');
var bodyParser = require('body-parser');

mongoose.connect(database.onlineUrl, { useMongoClient: true })

app.use("/", express.static(__dirname + "/app/public"));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

require('./server/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
