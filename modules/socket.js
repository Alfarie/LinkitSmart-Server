var register = require('../models/registerId')

module.exports = class Socket {
    constructor(http) {
        this.io = require('socket.io')(http);

        this.Event();
    }


    Event() {
        this.io.on('connection', function(socket) {
            console.log("[Socket] Client Connected");
            // socket.join('0x01');
            socket.on('disconnect', function() {
                console.log("[Socket] Client Disconnected");
            });
            socket.on('join', function(data) {
                var mid = data.mid;
                register.findOne({ mid: mid }, function(err, data) {
                    if (data) {
                        console.log(data.userid);
                        socket.join('admin')
                        console.log("[Socket] Join " + mid + ":" + data.userid);
                    }
                });
            });

            socket.on('join-wa', function(data) {
                var user = data.user;
                socket.join(user);
            })

            socket.on('SENSORS_DATA', function(data) {
                var user = data.user;
                socket.broadcast.to(user).emit('SENSORS_DATA', data);
            });

            socket.on('RELAYS', function(data) {
                var user = data.user;
                socket.broadcast.to(user).emit('RELAYS', data);
            })
        });



    }
}