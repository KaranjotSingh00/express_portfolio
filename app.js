var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
require('./routes/index.js')(app);
app.listen(port);
console.log('project running on localhost: ' + port);