const fs = require('fs');
/*
let data = "This is a file containing a collection of books. We are writing this data inside File....";
let data3 = "Hello we are inserting into the file again"

fs.writeFile("books.txt", data3, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
    console.log(fs.readFileSync("books.txt"));
  }
});

*/
//---------------------Example-2 --------------------//

let data1 = "This is a file containing a collection of movies. Today is Thursday";
let data2 = "Today we are learning file system module"
  
fs.writeFile("movies.txt", data2,
  {
    encoding: "utf8",
    flag: "a",         // change the flag to 'a' : append mode tht means appending the data inside thr file.
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("movies.txt", "utf8"));
    }
}); 

