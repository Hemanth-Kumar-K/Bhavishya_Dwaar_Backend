const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name" : String,
    "email" : {type : String, unique : true},
    "password" : String,
    "rollno" : String,
    "phone" : Number
}, {collection : 'Students'});

module.exports  = mongoose.model("Students", userSchema);