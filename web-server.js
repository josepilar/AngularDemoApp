var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    uuid = require('node-uuid'),

    app = express();

app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.get('/NewEvent', function (req, res) {
    res.sendFile(__dirname + '/app/NewEvent.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
    console.log("Angular app Listening on " + port);
});