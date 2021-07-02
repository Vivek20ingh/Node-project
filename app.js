var express = require('express')

var todocontroller = require('./controllers/todocontroller')

var app = express();

// set templete engine

app.set('view engine','ejs');



app.use(express.static('./public'))

//firecontrolers

todocontroller(app);

app.listen(8000);
console.log('You are listening to port 3000');