const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
    "288770490906-7c6tf66tnq8l1vm5rlgh47l6luk8c4tr.apps.googleusercontent.com"
);

app.use(bodyParser.json())
app.use(cors());

app.post('/api/google-login', async(req, res) => {
    const data = await client.verifyIdToken({
        idToken: req.body.token
    })

    res.status(200).json(data.getPayload())
});

app.listen(4001, () => {
    console.log('Server is ready at http://localhost:4001');
})