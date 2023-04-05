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
    jonQuote.textContent = savedQuote3;
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
    aryaQuote.textContent = savedQuote4;
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
    jaimeQuote.textContent = savedQuote5;
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
    cerseiQuote.textContent = savedQuote6;
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
// }
// function fetchGiphyByCharacter(apiKey, tyrion) {
//     document.getElementById("mondayBtn").addEventListener("click", event => {
//     const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=Game of Thrones ${tyrion}&limit=1`;
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Get a random Giphy from the API data
//             const randomIndex = Math.floor(Math.random() * data.data.length);
//             const randomGiphy = data.data[randomIndex];
//             const gifUrl = data.data.images.original.url;
//             const gifContainer = document.getElementById('gif-container');
//             const img = document.createElement('img');
//             img.src = gifUrl;
//             gifContainer.appendChild(img);
//         })
//         .catch(error => console.error(error));
  
//         // Do something with the random Giphy
//         console.log(randomGiphy);
//       })
//       .catch(error => {
//         console.error('Error fetching Giphy', error);
//       });
//     }

//trying to make it with jquery 
//testing the first fetch function for tyrion
//now we are attempting to get it to function with our button 
$(document).ready(function () {
    $('#mondayBtn').click(function(){
        

$.ajax({
url:'https://api.giphy.com/v1/gifs/search?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
method: 'GET',

success : function(data){
    //our success is not working 
    console.log(data);
    //this is how we get the url of the first gif 
    var gifUrl = data.data[0].images.original.url;
    //this is how we create an image with the url as source
    var img = $('<img>').attr('src', gifUrl);
    //this is how append it 
    $('tyrionQuote').append(img);
    
},
//our error is currently working 
error: function(error){
    //testing to see if its not working 
    console.error(error);
}


})
})
})

  

//Console.log


//quote content
