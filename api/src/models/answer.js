var mongoose = require('mongoose');

var answerSchema = mongoose.Schema(
    {
        body: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

module.exports = answerSchema;