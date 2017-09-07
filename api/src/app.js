"use strict";

var express = require('express');
var store = require('./temp/store');
var cors = require('cors');

var app = express();
app.use(cors());

function prefillDB(){
    store.addItem('Apfel');
    store.addItem('Banane');
    store.addItem('Erdbeere');
    store.addItem('Mango');
    store.addItem('Zitrone');
}

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

app.get('/items/:id', function(req, res){
    console.log(req.path);
    res.json(store.getItem(req.params.id));
});


var PORT = (process.env.PORT) ? process.env.PORT : 2000;

app.listen(PORT, function () {
    console.log('app is listening on port '+PORT);;
    prefillDB()
});