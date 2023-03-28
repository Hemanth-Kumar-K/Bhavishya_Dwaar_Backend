const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hemanth:PS@cluster0.ycp22wl.mongodb.net/Bhavisya_Dwar?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("MongoDB connected Successfully!");
    }
});