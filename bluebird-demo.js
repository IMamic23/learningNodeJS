var fs = require('fs');
var Promise = require('bluebird');

Promise.promisifyAll(fs);
fs.readFile('./data2.json', 'utf-8', function(err, data) {
    
    if(err){
        console.log("unable to read file");
    } else {
        try {
        data = JSON.parse(data);
        console.log(data.name);
         }
         catch(e){
             console.log("invalid json in file");
         }
    }
});

fs.readFileAsync('./data1.json')
    .then(JSON.parse)
    .then(function (val) {
        console.log(val);
    })
    .catch(SyntaxError, function(e){
        console.log("invalid json in file");
    })
    .catch(function(e){
        console.log("unable to read file");
    });