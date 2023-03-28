const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kmitdude:kmitdude@cluster0.qmbqexw.mongodb.net/BhavishyaDwaar?retryWrites=true&w=majority', {
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