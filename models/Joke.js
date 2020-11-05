const mongoose = require('mongoose');

const joke = new mongoose.Schema({
    author: String,
    setup: String,
    punchline: String,
    score: Number
});

module.exports = mongoose.model('Joke', joke);