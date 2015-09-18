var mongoose = require('mongoose');

var express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));


mongoose.connect(process.env.MONGOLAB_URL);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request,response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});