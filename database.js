var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

module.exports = class Database {
    constructor() {
        this.client = MongoClient;
        this.assert = assert;
        this.url = 'mongodb://localhost:27017/LinkitSmart';
    }

    Insert(data, collection) {
        this.client.connect(this.url, function(err, db) {
            assert.equal(null, err);
            db.collection(collection).insertOne(data, function(err, res) {
                assert.equal(err, null);
            });
        });
    }

    Find(data, collection, callback) {
        this.client.connect(this.url, function(err, db) {
            assert.equal(null, err);
            var cursor = db.collection(collection).find().limit(10).toArray(function(err, item) {
                callback(item);
            });
        });
    }
}