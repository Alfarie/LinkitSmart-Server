var Service = require('./modules/service');
var Database = require('./db/database');

var database = new Database();
var service = new Service(3001, database);