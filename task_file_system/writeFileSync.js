
var fs = require('fs');
var users = require('./users')

var file = 'product.json';
var backup_file = 'backup_products.json';


//reading data from product.json 
function readData(){
    console.log("Reading data from product.json")
    var products = fs.readFileSync(file, {encoding: 'utf8'});
    return JSON.parse(products.toString());
}


function writeData(id, name, price, category){
    console.log('we are starting with writeData() method....');
    var products = readData()  // array in which we are pulling the recrods from customer.json
    
    fs.writeFileSync(backup_file, JSON.stringify(products)) // creating the backup of the original file
    
    products.push({
        "id": Number(id), 
        "name": name,
        "price": Number(price),
        "category": category
    });
    fs.writeFileSync(file,JSON.stringify(products));
}

users.user1();



module.exports={
    readData: readData,
    writeData: writeData
}