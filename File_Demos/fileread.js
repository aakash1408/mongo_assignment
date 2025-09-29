const fs = require('fs');   // Step 1

var file = 'customer.json'  // Step 2: define the source of the file
/*
function createFile() {
 fs.open(file,'w',(err) =>
 {
     console.log(err);
 });
}

console.log(" weare sartign the method now .")
function loadData_Synchronous()  //loading the data from customer.json file in Sync
{
    console.log('we are inside teh method !!')
    var customers = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(customers);

    console.log(' in beetwen the method !!')
    var customers_1 = fs.readFileSync(file);  //without encoding
    console.log(customers_1);
    console.log(customers_1.toString()); 
    console.log('finished reading..............')
}

console.log(' before calling the async function');

loadData_Synchronous()
*/
console.log(' before the async function...');
function loadData_Asynchronous()    //loading the data from customer.json file in ASync
{
    console.log(' first line inside the function method')

    fs.readFile(file, (err,data) => {          // asynchronous = lowest of all prirority
        console.log('reading async.....');
        console.log(data.toString());
    });

    console.log('finshed reading asynch !!!!!');
    console.log('finshed reading asynch !!!!! ......1');
    console.log('finshed reading asynch !!!!!........2');
}
loadData_Asynchronous();
console.log(' after the async function...');

//createFile();  // 2nd time calling commnet this line

//loadData_Synchronous();

