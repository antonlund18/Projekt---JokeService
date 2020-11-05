// controller.js
const mongoose = require('mongoose');
const Joke = require('../models/Joke');
const config = require('../config');
const fetch = require("node-fetch");


mongoose.connect(config.databaseURI,
{ useNewUrlParser: true, useUnifiedTopology: true });

exports.createJoke = function (author, setup, punchline, score) {
    return Joke.create({
        author,
        setup,
        punchline,
        score
    });
};

exports.getJokes = function() {
    return Joke.find().exec();
}

exports.deleteAllJokes = function() {
    return Joke.deleteMany();
}

exports.getOtherSites = async function() {
    const respons = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}