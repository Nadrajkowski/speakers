"use strict";

var express = require('express');
var store = require('./temp/store');
var cors = require('cors');
var bp = require('body-parser');

var app = express();
app.use(cors());
app.use(bp.json());

function prefillDB(){
    store.addItem({
        context: 'this is my context',
        from: 'german',
        poster: 'Kasper',
        text: 'Hi, please translate this for me',
        title: 'Apfel',
        to: 'polish'
    });
    store.addItem({
        context: 'this is my context',
        from: 'german',
        poster: 'Kasper',
        text: 'Hi, please translate this for me',
        title: 'Birne',
        to: 'polish'
    });
    store.addItem({
        context: 'this is my context',
        from: 'german',
        poster: 'Kasper',
        text: 'Hi, please translate this for me',
        title: 'Erdbeere',
        to: 'polish'
    });
    store.addItem({
        context: 'this is my context',
        from: 'german',
        poster: 'Kasper',
        text: 'Hi, please translate this for me',
        title: 'Banane',
        to: 'polish'
    });
    store.addItem({
        context: 'this is my context',
        from: 'german',
        poster: 'Kasper',
        text: 'Hi, please translate this for me',
        title: 'Zitrone',
        to: 'polish'
    });
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
app.post('/items', function (req, res) {
    console.log(req.path);
    console.log(req.body);
    var id = store.addItem(req.body);
    res.status(201).json({msg: 'Post created', id: id});
});


var PORT = (process.env.PORT) ? process.env.PORT : 2000;

app.listen(PORT, function () {
    console.log('app is listening on port ' + PORT);
    prefillDB()
});