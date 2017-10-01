"use strict";

var express = require('express');
var cors = require('cors');
var bp = require('body-parser');

var app = express();
app.use(cors());
app.use(bp.json());

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/speakers-test', {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//models
var Post = mongoose.model('Post', require('./models/post'));


function prefillDB(){
    Post.remove({}, function (err) {
        if (err) return console.log(err);
        console.log('collection removed')
    });
    var dummys = [
        {
            context: 'this is my context',
            from: 'german',
            poster: 'Kasper',
            text: 'Hi, please translate this for me',
            title: 'Birne',
            to: 'polish'
        },
        {
            context: 'this is my context',
            from: 'german',
            poster: 'Kasper',
            text: 'Hi, please translate this for me',
            title: 'Erdbeere',
            to: 'polish'
        },
        {
            context: 'this is my context',
            from: 'german',
            poster: 'Kasper',
            text: 'Hi, please translate this for me',
            title: 'Banane',
            to: 'polish'
        },
        {
            context: 'this is my context',
            from: 'german',
            poster: 'Kasper',
            text: 'Hi, please translate this for me',
            title: 'Zitrone',
            to: 'polish'
        }

    ];
    dummys.forEach(function (dummy) {
        new Post(dummy).save(function (err, newPost) {
            if (err) return console.log(err);
            else console.log(newPost.title + ' saved');
        });
    })
}

app.get('/', function (req, res) {
   res.send('It Works!');
});

app.get('/items', function (req, res) {
    console.log(req.path);
    Post.find(function (err, posts) {
        if (err) res.status(500).send(err);
        else res.status(200).send(posts);
    })
});

app.get('/items/:id', function(req, res){
    console.log(req.path);
    Post.findById(req.params.id, function (err, post) {
        if (err) res.status(404).send(err);
        else res.status(200).json(post);
    });
});
app.post('/items', function (req, res) {

    new Post(req.body).save(function (err, newPost) {
        if (err) res.status(406).send(err);
        else res.status(201).json(newPost);
    });
});


var PORT = (process.env.PORT) ? process.env.PORT : 2000;

app.listen(PORT, function () {
    console.log('app is listening on port ' + PORT);
    prefillDB()
});