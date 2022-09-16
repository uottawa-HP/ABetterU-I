// create a new process
const { spawn } = require('child_process');
const { syncBuiltinESMExports } = require('module');
const { send } = require('process');

var someObject = require('./resources.json')
const express = require('express');
var router = express.Router();


// GET users page.
router.get('/', function(req, res, next) {


  res.send(someObject);
});

module.exports = router;
