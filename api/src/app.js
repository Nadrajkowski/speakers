"use strict";

//npm
const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

//own
const urlIdParser = require('./utils/urlIdParser');

var app = express();
app.use(cors());
app.use(bp.json());

//mongoose
const mongoose = require('mongoose');
const dbName = (process.env.NODE_ENV === 'dev') ? 'speakers-dev' : 'speakers';
mongoose.connect('mongodb://localhost/' + dbName, {
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
        //var urlId = urlIdParser.getUrlId(dummy.title, Post);
        //dummy.url_id = urlId;
        //console.log(dummy.url_id);
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
    console.log(req.method + ' - ' + req.path);
    Post.find(function (err, posts) {
        if (err) res.status(500).send(err);
        else res.status(200).send(posts);
    })
});
app.get('/items/:id', function(req, res){
    console.log(req.method + ' - ' + req.path);
    Post.findById(req.params.id, function (err, post) {
        if (err) res.status(404).send(err);
        else res.status(200).json(post);
    });
});
app.get('/items/byUrlId/:id', function (req, res) {
    console.log(req.path);
    Post.findOne({url_id: req.params.id}, function (err, post) {
        if (err) res.status(404).send(err);
        else res.status(200).json(post);
    });
});
app.post('/items', function (req, res) {
    console.log(req.method + ' - ' + req.path);
    new Post(req.body).save(function (err, newPost) {
        if (err) res.status(406).send(err);
        else res.status(201).json(newPost);
    });
});
app.put('/items/answer', function (req, res) {
    console.log(req.method + ' - ' + req.path);
    Post.update(
        {
            _id: req.body.id // filter
        },
        {
            $push: { // use push method
                answers: { // array pushed to
                    text: req.body.text // item to be pushed
                }
            }
        },
        function (err) { // callback function
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
            //console.log();
            res.status(201).send(req.body);
        }
    )
});


const PORT = process.env.PORT || 2001;

app.listen(PORT, function () {
    console.log('app is listening on port ' + PORT);
    if (process.env.NODE_ENV === 'dev') prefillDB()
});