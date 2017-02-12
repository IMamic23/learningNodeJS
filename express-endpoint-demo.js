var express = require('express');
var app = express();
var fs = require('fs');

app.use('/message', function(req, res){
    console.log('user requested endpoint');

    res.send('hellooo');
});

app.use('/users', function(req, res){
        fs.readFile('./users.json', 'utf-8', function(err, data) {

       res.send(data);
        })
});

app.listen(3000);