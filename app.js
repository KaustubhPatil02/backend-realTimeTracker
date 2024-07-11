const exp = require('constants');
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const socketio = require('socket.io');

const server = http.createServer(app);

const io = socketio(server);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res){
    res.send("This is going to be an awesome project!");
});

server.listen(3000)