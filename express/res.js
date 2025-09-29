let express = require('express');
let router = express.Router();

router.get("/stud/:username", (req, res) => {
    let username = req.params.username;
    if(username === 'Daniel'){
         res.send(`Yes, ${username} is a student`);
    }  else {
        res.send(`${username} is not Daniel`);
    }
})

router.post('/prof/:username', (req, res) => {
    let username = req.params.username;
    res.send(`Welcome to this page - ${username}`);
});

router.post('/emp', (req,res) => {
    console.log('Hey, you are employee');
})


module.exports = router;