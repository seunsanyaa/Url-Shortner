const mongoose = require('mongoose');
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');






const urlSchema = new  Schema({

        urlCode: String,
        longUrl: String,
        shortUrl: String,
        date: {
            type: String,
            default: Date.now
        }



},    {timestamp:true});






// urlSchema.plugin(passportLocalMongoose)
const Url=mongoose.model('url',urlSchema);
module.exports=Url;