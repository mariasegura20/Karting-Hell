'use strict';

const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectId;
const Bookings = function () {
};

Bookings.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://mariasegura20:zmRS3pNBBQ@msb-pnet-2022-2023.1bw9w4u.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        function (err, database) {
            if (err) {
		        console.log(err);
                callback(err);
            }

            db = database.db('pdp-pnet-2020-2021').collection('kartingHell');
            console.log("Conexión correcta");
            callback(err, database);
        });
};

Bookings.prototype.add = function (booking, callback) {
    return db.insertOne(booking, callback);
};

Bookings.prototype.get = function (_id, callback) {
    return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Bookings.prototype.getAll = function (callback) {
    return db.find({}).toArray(callback);
};

Bookings.prototype.update = function (_id, updatedbooking, callback) {
    delete updatedbooking._id;
    return db.updateOne({_id: ObjectId(_id)}, {$set: updatedbooking}, callback);};

Bookings.prototype.remove = function (_id, callback) {
    return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Bookings.prototype.removeAll = function (callback) {
    return db.deleteMany({}, callback);
};

module.exports = new Bookings();


