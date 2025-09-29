const fs = require('fs')
const path = require('path')
/*
fs.mkdir(path.join(__dirname,'Viren','demos'),{recursive:true},(err) =>{
    if(err)
    console.log(err);
    else
    console.log('created')
});


 // permission grant on the folder crated
fs.access(path.join(__dirname,'Viren','demos'),fs.F_OK | fs.R_OK, (err) =>
{
    if(err)
    console.log(err)
    else
    console.log('access and read poosible')
});


fs.rename(path.join(__dirname,'Viren'), path.join(__dirname,'Rajeev'), (err) =>
{
    if(err)
    console.log(err)
    else
    console.log('renamed')
});

*/
fs.rmdir(path.join(__dirname,'Rajeev'), (err) =>
{
    if(err)
    console.log(err)
    else
    console.log('removed')
});




