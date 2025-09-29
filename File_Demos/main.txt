//This file is to be executed before writeFileSync.js

var obj = require('./writeFileSync')

var readLine = require('readline');
var r1 = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});

r1.question('Enter name', function(name){
    r1.question('Enter city', function(city){
        obj.writeCustomer(name,city)
    });
})