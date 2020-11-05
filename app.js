// const cors = require('cors')
const express = require('express');
const app = express();
const config = require('./config');
const controller = require('./controllers/controller');

// app.use(cors());
// app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use('/api/jokes', require('./routes/jokes'));
app.use('/api/othersites', require('./routes/othersites'));

const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app; // test