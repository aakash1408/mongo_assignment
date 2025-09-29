var readLine = require('readline')
var obj = require('./writeFileSync') 

var r1 = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});


r1.question("Do you want to add new product (y/n)? ", function(answer){
    if(answer.toLowerCase() == 'y'){
        r1.question("Enter product id: ", function(id){
            r1.question("Enter product name: ", function(name){
                r1.question("Enter product price: ", function(price){
                    r1.question("Enter product category: ", function(category){         
                       obj.writeData(id, name, price, category);
                    })
                })
            })
        })
    } else {
        console.log("Thank you!")
        r1.close();
    }   
})


process.exit();