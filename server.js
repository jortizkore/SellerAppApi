var express = require('express');

var app = express();

var PUERTO = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.listen(PUERTO, function() {
    console.log('Server is running on PORT:', PUERTO);
});