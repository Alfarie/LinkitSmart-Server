var Service = require('./service');
var Database = require('./database');

var database = new Database();
var service = new Service(3001, database);