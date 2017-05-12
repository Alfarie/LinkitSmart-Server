var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('midregister', new Schema({
    userid: String,
    mid: String
}));