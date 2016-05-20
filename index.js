
const assert = require('assert');

// add helpers
var helpers = require('./helpers');
(helpers.mongo) ? console.log('Ok, helpers are loaded successfully.') : 
  console.error(new Error('Whoops, helpers files are not available'));

var express = helpers.express;
var app = helpers.app;
var db = helpers.db;
var mongoskin = helpers.mongoskin;
var id = helpers.id;



