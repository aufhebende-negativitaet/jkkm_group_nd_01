/**
 * Created by JKKM on 8/26/15.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){

    console.log('Someone accessed the homepage');
    res.send('Dis is da homepage\n');
});

module.exports = router;