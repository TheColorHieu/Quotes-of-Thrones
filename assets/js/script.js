var giphykey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'
const searchBtn = document.getElementById("generateGif");
const character = document.getElementById("monday");
const character2 = document.getElementById("tuesday");
const character3 = document.getElementById("wednesday");
const character4 = document.getElementById("thursday");
const character5 = document.getElementById("friday");
const character6 = document.getElementById("saturday");
const character7 = document.getElementById("sunday");
const tyrion = 'https://api.gameofthronesquotes.xyz/v1/author/tyrion/2'
const Tywin = 'https://api.gameofthronesquotes.xyz/v1/author/tywin/2'
const daenerys = 'https://api.gameofthronesquotes.xyz/v1/author/daenerys/2'
const jon = 'https://api.gameofthronesquotes.xyz/v1/author/jon/2'
const Arya = 'https://api.gameofthronesquotes.xyz/v1/author/arya/2'
const jaime = 'https://api.gameofthronesquotes.xyz/v1/author/jaime/2'
const Cersei = 'https://api.gameofthronesquotes.xyz/v1/author/cersei/2'

//Event Listener
searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/tyrion/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});

searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/tywin/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});

searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/arya/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});

searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/jon/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});
searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/jaime/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});
searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/cersei/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});

//Console.log