var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
const session = require('express-session');
const bodyparser = require('body-parser');
const mysql = require('mysql');


// set directory for media like css js images
app.use(express.static(__dirname + '/public'));

// set engine
app.set('view engine', 'ejs');

app.use(session({
    key: 'adminId',
    secret: '1234',
    resave: false,
    saveUninitialized: false
}));


// make bodyparser
app.use(bodyparser.urlencoded({
    extended: true
 }));
 app.use(bodyparser.json());
//use for login security not go to back page without refresh
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

// set routing file
require('./routes/index.js')(app);

app.listen(port);
console.log('project running on localhost: ' + port);
