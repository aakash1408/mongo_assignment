var express = require('express');  

var app = express();  

app.get('/', function (req, res) {  
   res.send('Welcome to First Example of Express !!!');  
})  

const server = app.listen(8000, function () {  
 console.log("Example app listening"); 
})  