var fs = require('fs');

var data = "\nAdd this line to the file.";

// append data to file
fs.appendFile('./test.txt',data, 'utf8',
// callback function
function(err) {
    if (err) throw err;
     // if no error
    console.log("Data is appended to file successfully!")
});