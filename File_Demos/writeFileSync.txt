const fs = require('fs');

var file = 'customer.json'

function createFile() {
 fs.open(file,'w',(err) =>
 {
     console.log(err);
 });
}

function loadDataAsynch()
{
    fs.readFile(file, (err,data) => {
        console.log('reading async.....');
        console.log(data.toString());
        // adding the below code after running the main.js
        fs.writeFile('copy.json',data.toString(),(err)=>{
            if(err)
            console.log(err);
            else
            console.log('written the data....');
        })
    });
    // till here
    console.log('finished reading asynch !!!!!');
}
loadDataAsynch()


//--------------- writing data into file --------------//
function loadData()
{
    console.log('we are starting with loadData() method....');
    var customers = fs.readFileSync(file, {encoding: 'utf8'});
    return JSON.parse(customers.toString())
}

function writeData(name, city){
    console.log('we are starting with writeData() method....');
    var customers = loadData();
    customers.push({
        "name": name,
        "city": city
    });
    fs.writeFileSync(file,JSON.stringify(customers));
}

module.exports={
    load: loadData,
    writeCustomer: writeData
}

