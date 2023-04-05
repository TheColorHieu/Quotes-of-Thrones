var giphykey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'

const tyrionQuote = document.querySelector('#tyrionQuote');
const tywinQuote = document.querySelector('#tywinQuote');
const daenerysQuote = document.querySelector('#daenerysQuote');
const jonQuote = document.querySelector('#jonQuote');
const aryaQuote = document.querySelector('#aryaQuote');
const jaimeQuote = document.querySelector('#jaimeQuote');
const cerseiQuote = document.querySelector('#cerseiQuote');

const tyrion = 'https://api.gameofthronesquotes.xyz/v1/author/tyrion/2'
const tywin = 'https://api.gameofthronesquotes.xyz/v1/author/tywin/2'
const daenerys = 'https://api.gameofthronesquotes.xyz/v1/author/daenerys/2'
const jon = 'https://api.gameofthronesquotes.xyz/v1/author/jon/2'
const arya = 'https://api.gameofthronesquotes.xyz/v1/author/arya/2'
const jaime = 'https://api.gameofthronesquotes.xyz/v1/author/jaime/2'
const cersei = 'https://api.gameofthronesquotes.xyz/v1/author/cersei/2'

//Event Listener
$("#mondayBtn").on("click", function () {
    fetch(tyrion)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tyrionQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#tuesdayBtn").on("click", function () {
    fetch(tywin)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tywinQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#wednesdayBtn").on("click", function () {
    fetch(daenerys)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            daenerysQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#thursdayBtn").on("click", function () {
    fetch(jon)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jonQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#fridayBtn").on("click", function () {
    fetch(arya)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            aryaQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#saturdayBtn").on("click", function () {
    fetch(jaime)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jaimeQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})

$("#sundayBtn").on("click", function () {
    fetch(cersei)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            cerseiQuote.textContent = quote;
        })
        .then(function (data) {
            console.log(data);
        })
})



//Console.log
