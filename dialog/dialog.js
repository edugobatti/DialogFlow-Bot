const express = require("express")
const dialog = express.Router()



const dialogflow = require('dialogflow');
const uuid = require('uuid');


async function runSample(textoUser) {

    const projectId = 'letstalk-9c058'
    // A unique identifier for the given session
    const sessionId = uuid.v4();

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        'keyFilename': './dialog/letstalk-9c058-d5e6bdd67910.json'
    });

    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: textoUser,
                // The language used by the client (en-US)
                languageCode: 'pt-BR',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        const resposta = `${result.fulfillmentText}`;
        return resposta
    } else {
        console.log(`  No intent matched.`);
    }
}


dialog.post('/msgUser', async (req, res) => {
    const msg = req.body.msg
    const respDialog = await runSample(msg)
    res.send(respDialog)
})

module.exports = dialog