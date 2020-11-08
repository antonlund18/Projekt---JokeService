// controller.js
const mongoose = require('mongoose');
const Joke = require('../models/Joke');
const config = require('../config');
const fetch = require("node-fetch");

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

mongoose.connect(config.databaseURI,
{ useNewUrlParser: true, useUnifiedTopology: true });

exports.createJoke = function (author, setup, punchline) {
    return Joke.create({
        author,
        setup,
        punchline
    });
};

exports.getJokes = function() {
    return Joke.find().exec();
}

exports.deleteJoke = function(id) {
    return Joke.deleteOne().where('_id').equals(id).exec();
}

exports.deleteAllJokes = function() {
    return Joke.deleteMany();
}

exports.getOtherSites = async function() {
    let respons = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.getJokesFromOtherSite = async function(id) {
    let sites = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
    let address;
    for(let site of await sites.json()) {
        if(site._id == id) {
            address = site.address;
        }
    }
    if(address.substr(-1) != '/') { address += '/'; }
    let respons = await fetch(address + 'api/jokes');
    if(respons.status !== 200) {
        throw new Error(respons.status);
    }
    return await respons.json();
}