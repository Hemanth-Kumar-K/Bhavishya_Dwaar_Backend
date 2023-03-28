const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
    "name" : String,
    "logo" : String,
    "location" : String,
    "position" : String,
    "gpa" : String,
    "date" : String,
    "type" : String,
    "minq" : {
        "minq1" : String,
        "minq2" : String,
        "minq3" : String
    },
    "preq" : {
        "preq1" : String,
        "preq2" : String,
        "preq3" : String,
        "preq4" : String
    },
    "abtJob" : String,
    "resp" : {
        "resp1" : String,
        "resp2" : String,
        "resp3" : String,
        "resp4" : String
    }
}, {collection : 'JobsPosted'});

module.exports = mongoose.model("JobsPosted", jobsSchema);