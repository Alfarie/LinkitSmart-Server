var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');
var config = require('../config');
var User = require('../models/user');

module.exports = class Database {
    constructor() {
        this.client = MongoClient;
        this.assert = assert;
        this.url = config.database;
        mongoose.connect(config.database);
        this.user = User;
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