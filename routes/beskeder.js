const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let beskeder = await controller.getBeskeder();
            response.send(beskeder);
        } catch (e) {
            sendStatus(e, response);            
        }
    })
    .get('/:rum', async (request, response) => {
        try {
            let { rum } = request.params;
            let beskeder = await controller.getBeskederByRum(rum);
            response.send(beskeder);
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