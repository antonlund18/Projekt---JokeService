const controller = require("../controllers/controller");
const express = require('express');
const { response } = require("express");
const router = express.Router();

router
    .post('/', async (request, response) => {
        try {
            let { navn, rum, tekst, nr } = request.params;
            await controller.createBesked(navn, rum, tekst, nr);
            response.send({message: "Besked gemt!"});
        } catch (e) {
            sendStatus(e, response);            
        }
    })
    .delete('/:nr', async (request, respone) => {
        let { nr } = request.params;
        let resultat = await controller.deleteBesked(nr);
        if(resultat.deletedCount === 1) {
            response.status(200).json({resultat: 'Besked slettet'});
        } else {
            response.status(404).send('Besked findes ikke!');
        }
    })

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;