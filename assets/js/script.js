// API
//quotes url = https://api.gameofthronesquotes.xyz/v1/author/tyrion/2
//its by character?
//giphy key = XdKAq0Iih87Sx83LInGdrQgoMit3ALUH
//quote key =
//Consts
//const searchBtn = document.getElementById();
//const searchBtn = document.getElementById();
//const searchBtn = document.getElementById();
//const Character = document.getElementById();
//const tyrion = https://api.gameofthronesquotes.xyz/v1/author/tyrion/2
//const Tywin = https://api.gameofthronesquotes.xyz/v1/author/
//const Daenerys = https://api.gameofthronesquotes.xyz/v1/author/
//const The Hound = https://api.gameofthronesquotes.xyz/v1/author/
//Arya = https://api.gameofthronesquotes.xyz/v1/author/
//Peter Balish = https://api.gameofthronesquotes.xyz/v1/author/
//FLAGS

//Event listerners
$("#b1,#b2,#b3,#b4,#b5,#b6,#b7").bind("click",function(){
    console.log("clicky clacky");
})

//function getcharacter(){

//fetch()


//}
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
