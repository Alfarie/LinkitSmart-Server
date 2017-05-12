var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('online', new Schema({
    userid: String,
    mid: String,
    root: String
}));