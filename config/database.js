const mongodb= require('mongodb');
const mongoose = require("mongoose");
// const MongoClient = mongodb.MongoClient;

process.env.MONGODB_URI ='mongodb://seunsanyaa:Z6hTDvWZiLUlUtGZ@urlshortner-shard-00-00.zgp5w.mongodb.net:27017,urlshortner-shard-00-01.zgp5w.mongodb.net:27017,urlshortner-shard-00-02.zgp5w.mongodb.net:27017/Url?ssl=true&replicaSet=atlas-13rvd8-shard-0&authSource=admin&retryWrites=true&w=majority'


function mongoConnect(){
    mongoose.connect(process.env.MONGODB_URI )
        .then(client => {
            console.log('Connected!');


        }).catch(err => {
        console.log(err);
    });
}

module.exports=mongoConnect;

