var express = require('express');
var path = require('path');
var app = express();
var index = require('../routes/index');
var employees = require('../routes/employees');

app.use('/', index);
app.use('/employees', employees);
app.use('/scripts', express.static(path.join(__dirname, './assets/scripts')));
app.use('/styles', express.static(path.join(__dirname, './assets/styles')));

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('listening for traffic on port ', port);
});
