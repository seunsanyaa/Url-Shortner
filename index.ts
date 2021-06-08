

const express = require('express');
const app = express();

const validUrl = require('valid-url')
const shortid = require('shortid')
require('dotenv');
const mongoConnect= require('./config/database');

mongoConnect()
const Url = require('./models/Url')
const PORT = process.env.PORT || 5000;
const baseUrl='http://localhost:5000'
app.use(express.json({
    extended: false
}));
app.use('/', require('./routes/redirect'))

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

async function shorten(url: string) {

let longUrl=url;

    const urlCode = shortid.generate()

    if (validUrl.isUri(url)) {

        try {

            const shortUrl = baseUrl + '/' + urlCode

            const theUrl = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            })
            await theUrl.save()

process.env.URL=longUrl;
            console.log(theUrl)
            return shortUrl

        } catch (err) {
            console.log(err)

        }


    }
}



shorten('https://google.com').then(e =>
    {
        console.log(e)
    }
)



app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));