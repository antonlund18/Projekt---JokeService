const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let sites = await controller.getOtherSites();
            response.send(sites);    
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .get('/:id', async (request, response) => {
        try {
            let jokes = await controller.getJokesFromOtherSite(request.params.id);
            response.send(jokes);
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