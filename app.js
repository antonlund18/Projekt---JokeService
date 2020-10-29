const cors = require('cors')
const express = require('express');
const app = express();
const config = require('./config');
const controller = require('./controllers/controller');

app.use(cors());
// app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/beskeder', require('./routes/beskeder'));
app.use('/rum', require('./routes/rum'));
app.use('/besked', require('./routes/besked'));

const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

controller.createJoke("hej", "hejsa");

module.exports = app; // test
