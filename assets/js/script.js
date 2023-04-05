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

const savedQuote = localStorage.getItem('tyrionQuote')
if (savedQuote) {
    tyrionQuote.textContent = savedQuote;
} 
$("#mondayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(tyrion)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tyrionQuote.textContent = quote;
            localStorage.setItem('tyrionQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
});

const savedQuote1 = localStorage.getItem('tywinQuote')
if (savedQuote1) {
    tywinQuote.textContent = savedQuote1;
} 
$("#tuesdayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(tywin)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tywinQuote.textContent = quote;
            localStorage.setItem('tywinQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

const savedQuote2 = localStorage.getItem('daenerysQuote')
if (savedQuote2) {
    daenerysQuote.textContent = savedQuote2;
} 
$("#wednesdayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(daenerys)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            daenerysQuote.textContent = quote;
            localStorage.setItem('daenerysQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

const savedQuote3 = localStorage.getItem('jonQuote')
if (savedQuote3) {
    tywinQuote.textContent = savedQuote3;
} 
$("#thursdayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(jon)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jonQuote.textContent = quote;
            localStorage.setItem('jonQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

const savedQuote4 = localStorage.getItem('aryaQuote')
if (savedQuote4) {
    tywinQuote.textContent = savedQuote4;
} 
$("#fridayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(arya)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            aryaQuote.textContent = quote;
            localStorage.setItem('aryaQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

const savedQuote5 = localStorage.getItem('jaimeQuote')
if (savedQuote5) {
    tywinQuote.textContent = savedQuote5;
} 
$("#saturdayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(jaime)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jaimeQuote.textContent = quote;
            localStorage.setItem('jaimeQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

const savedQuote6 = localStorage.getItem('cerseiQuote')
if (savedQuote6) {
    tywinQuote.textContent = savedQuote6;
} 
$("#sundayBtn").on("click", function (event) {
    event.preventDefault();
    fetch(cersei)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            cerseiQuote.textContent = quote;
            localStorage.setItem('cerseiQuote', quote);
        })
        .then(function (data) {
            console.log(data);
        })
})

//creating the function for giphys 
document.addEventListener("DOMContentLoaded", init);
function init(){
    document.getElementById("mondayBtn").addEventListener("click", event => {
        //prevent from the page to reload 
        event.preventDefault();
        let url = 'https://api.giphy.com/v1/gifs/search?api_key=${giphykey}&limit=1q=';
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(content => {
         //data that we are trying to retrieve 
         console.log(content.data)    
         console.let('META', content.meta)
        })
       
        .catch(error =>{
            console.error(error);
        });
    })
}

//Console.log


//quote content
