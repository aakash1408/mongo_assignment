const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./users"));    // this will invoke and call the file users.js

app.listen(3001, () => console.log('Server started'));   // listen to server 3001