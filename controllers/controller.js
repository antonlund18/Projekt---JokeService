// controller.js
const mongoose = require('mongoose');
const Besked = require('../models/Besked');
const config = require('../config');

mongoose.connect(config.databaseURI,
{ useNewUrlParser: true, useUnifiedTopology: true });

exports.createBesked = function (navn, rum, tekst, nr) {
    return Besked.create({
        navn,
        rum,
        tekst,
        nr
    });
};

exports.getBeskeder = function() {
    return Besked.find().select('-_id -__v').exec();
}

exports.getBeskederByRum = function(rum) {
    return Besked.find().where('rum').eq(rum).select('-_id -__v').exec()
}

exports.getRum = function() {
    return Besked.find().distinct('rum').exec()
}

exports.deleteBesked = function(nr) {
    return Besked.deleteOne().where('nr').eq(nr).exec();
}