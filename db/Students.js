const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name" : {type:String,unique:true},
    "email" : String,
    "password" : String,
    "rollno" : String,
    "phone" : Number
}, {collection : 'Students'});

module.exports  = mongoose.model("Students", userSchema);