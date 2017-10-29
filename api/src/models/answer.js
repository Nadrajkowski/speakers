var mongoose = require('mongoose');

var answerSchema = mongoose.Schema(
    {
        text: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

module.exports = answerSchema;