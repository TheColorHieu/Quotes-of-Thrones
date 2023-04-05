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
$("#generateGif").on("click",function(){
    fetch(tyrion)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}) 

$("#generateGif").on("click",function(){
    fetch(Tywin)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}) 

$("#generateGif").on("click",function(){
    fetch(Arya)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}) 

$("#generateGif").on("click",function(){
    fetch(jon)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#generateGif").on("click",function(){
    fetch(jaime)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#generateGif").on("click",function(){
    fetch(Cersei)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#generateGif").on("click",function(){
    fetch(daenerys)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

//creating the function for giphys 
document.addEventListener("DOMContentLoaded", init);
function init(){
    document.getElementById("btnSearch").addEventListener("click", event => {
        //prevent from the page to reload 
        event.preventDefault();
        let url = 'https://api.giphy.com/v1/gifs/search?api_key=${giphykey}&limit=1q=';
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then()
        .then()
    })
}

//Console.log
