const mongodb= require('mongodb');
const mongoose = require("mongoose");
const MongoClient = mongodb.MongoClient;

process.env.MONGODB_URI ='mongodb+srv://seunsanyaa:Z6hTDvWZiLUlUtGZ@urlshortner.zgp5w.mongodb.net/Url?retryWrites=true&w=majority'
function mongoConnect(){
    mongoose.connect(process.env.MONGODB_URI )
        .then(client => {
            console.log('Connected!');


        }).catch(err => {
        console.log(err);
    });
}

module.exports=mongoConnect;

