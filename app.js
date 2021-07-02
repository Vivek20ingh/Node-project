var express = require('express')

var todocontroller = require('./controllers/todocontroller')

var app = express();

// set templete engine

app.set('view engine','ejs');



app.use(express.static('./public'))

//firecontrolers

todocontroller(app);
const PORT = process.env.PORT || 8000;

app.listen(PORT);
console.log('You are listening to port 8000');