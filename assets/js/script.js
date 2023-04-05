var giphykey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'

const tyrionQuote = $("#monday");
const twyinQuote = $("#tuesday");
const daenerysQuote = $("#wednesday");
const jonQuote = $("#thursday");
const arayQuote = $("#friday");
const jaimeQuote = $("#saturday");
const cerseiQuote = $("#sunday");

const tyrion = 'https://api.gameofthronesquotes.xyz/v1/author/tyrion/2'
const tywin = 'https://api.gameofthronesquotes.xyz/v1/author/tywin/2'
const daenerys = 'https://api.gameofthronesquotes.xyz/v1/author/daenerys/2'
const jon = 'https://api.gameofthronesquotes.xyz/v1/author/jon/2'
const arya = 'https://api.gameofthronesquotes.xyz/v1/author/arya/2'
const jaime = 'https://api.gameofthronesquotes.xyz/v1/author/jaime/2'
const cersei = 'https://api.gameofthronesquotes.xyz/v1/author/cersei/2'

//Event Listener
$("#mondayBtn").on("click",function(){
    fetch(tyrion)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

    
}) 

$("#tuesdayBtn").on("click",function(){
    fetch(tywin)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}) 

$("#wednesdayBtn").on("click",function(){
    fetch(arya)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}) 

$("#thursdayBtn").on("click",function(){
    fetch(jon)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#fridayBtn").on("click",function(){
    fetch(jaime)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#saturdayBtn").on("click",function(){
    fetch(cersei)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 

$("#sundayBtn").on("click",function(){
    fetch(daenerys)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}) 



//Console.log


//quote content
