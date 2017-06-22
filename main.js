const express = require('express');
const app = express();
const validator = require('express-validator');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'mustache');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

words = ['hello', 'banjo', 'dog', 'basketball'];

app.get('/game', function(){
  res.render('main',)
});

app.post('/game')


app.listen(3000, function(){
  console.log("We are working");
});
