"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
const validUrl = require('valid-url');
const shortid = require('shortid');
require('dotenv');
const mongoConnect = require('./config/database');
mongoConnect();
const Url = require('./models/Url');
const PORT = process.env.PORT || 5000;
const baseUrl = "localhost:5000";
app.use(express.json({
    extended: false
}));
app.use('/', require('./routes/redirect'));
function shorten(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let longUrl = url;
        const urlCode = shortid.generate();
        if (validUrl.isUri(url)) {
            try {
                const shortUrl = baseUrl + '/' + urlCode;
                const theUrl = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                yield theUrl.save();
                process.env.URL = longUrl;
                console.log(theUrl);
                return shortUrl;
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}
shorten('https://google.com').then(url => {
    console.log(url);
});
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));
module.exports = shorten;
