const mongoose =require('mongoose');
const appliedScheme=new mongoose.Schema(
    {
        "jobid":{type:'ObjectId'},
        "students":[{type:'ObjectId',ref:'Students'}],
        "compid":'ObjectId',
    },{collection:'AppliedJobs'});
module.exports=mongoose.model("AppliedJobs",appliedScheme);