const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name" : String,
    "email" : {type : String, unique : true},
    "password" : String,
    "phone" : Number,
    "location" : String,
    "logo" : String,
    
}, {collection : 'Companies'});

module.exports  = mongoose.model("Companies", userSchema);