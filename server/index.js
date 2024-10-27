const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { orgin: '*' }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        io.emit('message', `${socket.id.substring(0,2)} said ${message}`);
    });
});

const port = 8080;
http.listen(port, () => {
    console.log('server run in 8080 port');
});
