var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var path = require('path');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
var root = path.join(path.resolve(__dirname, '../dist'));
app.use(express.static(root));
app.use(cors())
app.use(morgan('dev'));

var http = require('http').Server(app);
var Socket = require('./socket');
var User = require('../models/user');

var MatchineId = require('../models/registerId');

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

            res.sendfile(__dirname + "./../dist/index.html")
        })

        this.app.post('/api/sensors', function(req, res) {
            let sensors = req.body;
            var mid = sensors.mid;
            socket.io.to('0x01').emit("SENSOR", sensors);
            // insert data to database
            database.Insert(sensors, "Sensors")
            res.send("Success");
            res.end();
        })

        this.app.get('/api/sensors', function(req, res) {
            database.Find(null, "Sensors", function(arr) {
                res.json(arr);
                res.end();
            })
        });

        this.app.post('/api/authentication', function(req, res) {
            //console.log(req.body);
        });

        this.app.post('/api/authen', function(req, res) {
            console.log(req.body.User);
            var data = req.body.User;
            User.findOne({
                name: data.username
            }, function(err, user) {

                if (err) throw err;
                console.log(user)
                if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) {
                    console.log(user.password);
                    console.log(data.password);

                    // check if password matches
                    if (data.password === user.password) {
                        res.json({ success: true, message: 'Authentication successfully.' });
                    } else {
                        res.json({ success: false, message: 'Authentication failed. Wrong password' })
                    }
                }

            });
        });

        this.app.get('/setup', function(req, res) {
            // create a sample user
            var nick = new User({
                name: 'admin',
                password: 'admin',
                admin: true
            });

            // save the sample user
            nick.save(function(err) {
                if (err) throw err;

                console.log('User saved successfully');
                res.json({ success: true });
            });
        });

        this.app.get('/api/mid/register', function(req, res) {
            var id = new MatchineId({
                userid: 'admin',
                mid: "INTX01WL"
            })

            MatchineId.find({ userid: 'admin' }, function(err, data) {
                if (err) throw err;
                if (data.length == 0) {
                    id.save(function(err) {
                        if (err) throw err;

                        console.log('User saved successfully');
                        res.json({ success: true });
                    });
                } else {
                    console.log('User saved successfully');
                    res.json({ success: false, message: "duplicate userid." });
                }
            });

        });

        this.app.get('/api/mid/register/list', function(req, res) {
            MatchineId.find({}, function(err, data) {
                if (err) throw err;
                res.json(data);
            })
        });

        this.app.get('/api/mid/register/clear', function(req, res) {
            MatchineId.remove({}, function(err, data) {
                if (err) throw err;
                res.json(data);
            })
        });
    }


}