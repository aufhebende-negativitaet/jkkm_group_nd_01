var express = require ('express');
var app = express();
var index = require('../routes/index');
var employees = require('../routes/employees');

app.use('/', index);
app.use('/employees', employees);

var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log('App listening on ', port);

});