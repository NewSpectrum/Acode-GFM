// import fs from 'node:fs'
// import {micromark} from 'micromark'
// import {gfm, gfmHtml} from 'micromark-extension-gfm'

// var micromarkExtensionGfm = require("micromark-extension-gfm")

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.puzzlers.org/pub/wordlists/pocket.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

const output = getText();

// var source = request.responseText;

/* const output = micromark(fs.readFileSync('example.md'), {
    allowDangerousHtml: true,
    extensions:         [gfm()],
    htmlExtensions:     [gfmHtml()]
}) */

// const output = micromark(source(), {
//     allowDangerousHtml: true,
//     extensions:         [gfm()],
//     htmlExtensions:     [gfmHtml()]
// })

console.log(output)