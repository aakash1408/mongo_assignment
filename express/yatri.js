let express = require('express');
let router = express.Router();


router.use("/yatri/profile", require('./res.js'));

module.exports = router;