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

/*app.get('/NewEvent', function (req, res) {
    res.sendFile(__dirname + '/app/NewEvent.html');
});*/

app.get('/EditProfile', function (req, res) {
    res.sendFile(__dirname + '/app/EditProfile.html');
});

app.get('/CacheSample', function (req, res) {
    res.sendFile(__dirname + '/app/CacheSample.html');
});

app.get('/events/:id', function (req, res) {
    res.sendFile(__dirname + '/app/data/event/' + req.params.id + ".json");
});

app.get('/events', function (req, res) {

    var dir = __dirname + '/app/data/event/';
    var data = [];

    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        var c = 0;
        files.forEach(function (file) {
            c++;
            fs.readFile(dir + file, 'utf-8', function (err, json) {
                if (err) throw err;
                    data.push(JSON.parse(json));
                if (0 === --c) {
                    res.send(data); //socket.emit('init', {data: data});
                }
            });
        });
    });
});

app.post('/events', function (req, res) {
    req.body.id = uuid.v4();
    var fs = require('fs');
    fs.writeFile(__dirname + "/app/data/event/" + req.body.id + ".json", JSON.stringify(req.body), function (err) {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end();
            console.log("The file was saved!");
        }
    });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
    console.log("Angular app Listening on " + port);
});