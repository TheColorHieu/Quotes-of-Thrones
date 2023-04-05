var apiKey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'

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

localStorage.setItem('myCode', 'put your code here');

//Event Listener
$("#mondayBtn").on("click", function () {
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
})

$("#tuesdayBtn").on("click", function () {
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

$("#wednesdayBtn").on("click", function () {
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

$("#thursdayBtn").on("click", function () {
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

$("#fridayBtn").on("click", function () {
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

$("#saturdayBtn").on("click", function () {
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

$("#sundayBtn").on("click", function () {
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
// document.addEventListener("DOMContentLoaded", init);
// function init(){
//     document.getElementById("mondayBtn").addEventListener("click", event => {
//         //prevent from the page to reload 
//         event.preventDefault();
//         const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=$XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1q=';
//         fetch(apiUrl)
//         .then(response => response.json() )
//         .then(content => {
//          //data that we are trying to retrieve 
//          console.log(content.data)    
//          console.let('META', content.meta)
//         //creating the html cards so that we can then append 
//         let fig = document.createElement('figure');
//         let img = document.createElement('img');
//         let fc = document.createElement('figcaption');
//         img.src = content.data[0].images.downsized.url;
//         img.alt = content.data[0].title;
//         fig.appendChild(img);
//         fig.appendChild(fc);
//         //need to change where we going to append it 
//         let out = document.querySelector('.out');
//         out.insertAdjacentElement('afterbegin', fig);
//         })
       
//         .catch(error =>{
//             console.error(error);
//         });
//     })
//}
function fetchGiphyByCharacter(apiKey, tyrion) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=Game of Thrones ${tyrion}&limit=1`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Get a random Giphy from the API data
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const randomGiphy = data.data[randomIndex];
  
        // Do something with the random Giphy
        console.log(randomGiphy);
      })
      .catch(error => {
        console.error('Error fetching Giphy', error);
      });
  }
  

//Console.log


//quote content
