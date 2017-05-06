var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
var root = path.join(path.resolve(__dirname, './dist'));
app.use(express.static(root));

var http = require('http').Server(app);
var Socket = require('./socket');
module.exports = class Service {
    constructor(port, database) {
        //init
        this.http = http;
        this.port = port;
        this.app = app;
        this.socket = new Socket(http);

        //init func
        this.api(database, this.socket);
        this.listen(this.port);
    }

    listen(port) {
        this.http.listen(port, function() {
            console.log('listening *:' + port);
        });
    }

    api(database, socket) {
        this.app.get('/', function(req, res) {

            res.sendfile(__dirname + "/dist/index.html")
        })

        this.app.post('/', function(req, res) {
            let body = req.body;
            console.log(body);
            socket.io.to('0x01').emit("SENSOR", body);
            // insert data to database
            database.Insert(body, "Sensors")
            res.send("Success");
            res.end();
        })

        this.app.get('/sensors', function(req, res) {
            database.Find(null, "Sensors", function(arr) {
                res.json(arr);
                res.end();
            })

        })
    }


}