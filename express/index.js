// let express = require('express');
// let app = express();

// // start creating the endpoints
// // app.get('/cartify/home', (req, res) => {
// //     res.send("Testing the server...")
// // })

// // app/get('/cartify/login', (res, req) => {
// //     res.send("Testing the login");
// // })

// app.use('/cartify',require('./cartify.js'))

// //to create and launch the server
// app.listen(3001, () => console.log('Server has started'))

let express = require('express');
let app = express();
let router = express.Router();

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/index', (req,res) => {
    res.render('index')
})


app.use('/professor/', require('./yatri.js'));
app.use('/student/', require('./yatri.js'));
app.use('/employee/', require('./yatri.js'));


app.listen(3000, () => console.log('Server has started'));