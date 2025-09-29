let express = require('express');
let router = express.Router();

router.get('/home', (req, res) => {
    res.send("Home Page")
})

router.get('/login', (req, res) => {
    res.send("Login Page");
})

module.exports = router;