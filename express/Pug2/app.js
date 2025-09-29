const express = require('express')
const app = express();
const {join} = require('path');




const morgan = require("morgan");
const {createWriteStream} = require("fs");
 
const logFile = join(__dirname, "blogchefNew.log");   // create the log file in the current project directory
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
//---------------- end ------------------------//
 


 

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/yatri", (req,res) => {
    res.render("welcome")
})

app.get('/register', (req, res) => {
    res.render("register")
})

app.listen(3000, () => console.log("Pug Life"))