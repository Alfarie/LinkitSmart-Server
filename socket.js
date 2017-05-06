module.exports = class Socket {
    constructor(http) {
        this.io = require('socket.io')(http);

        this.Event();
    }


    Event() {
        this.io.on('connection', function(socket) {
            console.log("[Service] Client Connected");
            socket.join('0x01');
            socket.on('disconnect', function() {
                console.log("Client Disconnected");
            });
        });

    }
}