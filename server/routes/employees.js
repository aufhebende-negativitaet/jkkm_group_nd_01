/**
 * Created by JKKM on 8/26/15.
 */

var newEmployee = require('../public/assets/scripts/newEmployee');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    console.log('Someone accessed the employees page');
    res.send(newEmployee.createEmployee());
});
module.exports = router;

