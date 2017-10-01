var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    context: String,
    from: String,
    poster: String,
    text: String,
    title: String,
    to: String
});

module.exports = postSchema;