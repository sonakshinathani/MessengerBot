var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// GET to check if server is up and running
app.get('/', function (req, res) {
    res.send('This is TestBot Server');
});

// GET for Facebook Webhook
app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'c63cd136-9564-4b62-acc0-16a68980c036') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Invalid verify token');
    }
});