const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let jokes = await controller.getJokes();
            response.send(jokes);
        } catch (e) {
            sendStatus(e, response);            
        }
    })
    .post('/', async (request, response) => {
        try {
            let {author, setup, punchline} = request.body;
            await controller.createJoke(author, setup, punchline);
            response.send({message: 'Joke saved!'});            
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .delete('/', async (request, response) => {
        try {
            await controller.deleteAllJokes();
        } catch (e) {
            sendStatus(e, response);
        }
    });

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;