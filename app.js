var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;

// set directory for media like css js images
app.use(express.static(__dirname + '/public'));

// set engine
app.set('view engine', 'ejs');

// set routing file
require('./routes/index.js')(app);


app.listen(port);
console.log('project running on localhost: ' + port);
