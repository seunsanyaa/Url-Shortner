This library allows you to quickly and easily use the URL-Shortner nodejs library.
<h1>Installing</h1>
using npm<br><br>
<b> $ npm install urlshortner</b><br><br>
using yarn<br><br>
<b> $ yarn install urlshortner</b><br><br>

<h1>Example</h1>

<h4>note: CommonJS usage</h4>

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:<br><br>

const shorten = require('@seunsanyaa/urlshortnerr');


shorten('your long url').then(newurl =>
    {
        console.log(newurl)
    }
)
