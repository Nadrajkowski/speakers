"use strict";

var express = require('express');
var store = require('./temp/store');

var app = express();

app.get('/', function (req, res) {
   res.send('It Works!');
});

app.get('/items', function (req, res) {
    console.log(req.path);
    res.json(store.getItems());
});

app.get('/items/add/:name', function(req, res){
    console.log(req.path);
    store.addItem(req.params.name);
    res.send('Added '+req.params.name);
});


var PORT = (process.env.PORT) ? process.env.PORT : 3000;

app.listen(PORT, function () {
    console.log('app is listening on port '+PORT);
});