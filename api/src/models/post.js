var mongoose = require('mongoose');
var answerSchema = require('./answer');

var postSchema = mongoose.Schema(
    {
        context: {type: String, required: true},
        from: {type: String, required: true},
        poster: {type: String, required: true},
        text: {type: String, required: true},
        title: {type: String, required: true},
        to: {type: String, required: true},
        //url_id: {type: String, required: true},
        answers: {default: [], type: [answerSchema]}
    },
    {
        timestamps: true
    }
);
module.exports = postSchema;