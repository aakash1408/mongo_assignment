var file = './backup_products.json';
var fs = require('fs');

function user1(){
    console.log("user1 function");
    var products = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(JSON.parse(products.toString()));
    user2();
}

function user2(){
    console.log("user2 function");
    var products = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(JSON.parse(products.toString()));
    user3();
}

function user3(){
    console.log("user3 function");
    var products = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(JSON.parse(products.toString()));
    deleteFile();
}


function deleteFile() {
    console.log("Going to delete an existing file");
    fs.unlink(file, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File deleted successfully!");
    });
}


module.exports={
    user1: user1
}