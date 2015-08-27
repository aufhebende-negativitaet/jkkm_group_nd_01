var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req,res,next){
    console.log("Access to index page");
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
