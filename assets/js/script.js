var apiKey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'

const tyrionQuote = document.querySelector('#tyrionQuote');
const joffreyQuote = document.querySelector('#jofferyQuote');
const daenerysQuote = document.querySelector('#daenerysQuote');
const jonQuote = document.querySelector('#jonQuote');
const aryaQuote = document.querySelector('#aryaQuote');
const jaimeQuote = document.querySelector('#jaimeQuote');
const cerseiQuote = document.querySelector('#cerseiQuote');

const tyrion = 'https://api.gameofthronesquotes.xyz/v1/author/tyrion/2'
const joffrey = 'https://api.gameofthronesquotes.xyz/v1/author/joffrey/2'
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
    fetch(joffrey)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tywinQuote.textContent = quote;
            localStorage.setItem('joffreyQuote', quote);
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


//trying to make it with jquery 
//testing the first fetch function for tyrion
//now we are attempting to get it to function with our button 
$(document).ready(function () {
    $('#mondayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=tyrion+lannister',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#tyrionQuote').append(img);


            },

            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }


        })
    })
})

$(document).ready(function () {
    $('#tuesdayBtn').click(function(){
//nested the fetch function inside so that it will be trigger everytime we press the generate button 
$.ajax({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=tywin+lannister',
    // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
method: 'GET',

success : function(data){
    //our success is working 
    console.log(data);
    //this is how we get the url of the first gif 
    var gifUrl = data.data.images.original.url;
    //this is how we create an image with the url as source
    var img = $('<img>').attr('src', gifUrl);
    //allows us to append ! 
    $('#tywinQuote').append(img);
    
    
},
//our error is currently working 
error: function(error){
    //testing to see if its not working 
    console.error(error);
}


        })
    })
})

$(document).ready(function () {
    $('#wednesdayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=daenerys+targaryen',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#daenerysQuote').append(img);


            },
            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }


        })
    })
})

$(document).ready(function () {
    $('#thursdayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=jon+snow',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#jonQuote').append(img);


            },
            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }


        })
    })
})

$(document).ready(function () {
    $('#fridayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=arya+stark',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#aryaQuote').append(img);


            },
            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }


        })
    })
})

$(document).ready(function () {
    $('#saturdayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=jaime+lannister',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#jaimeQuote').append(img);


            },
            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }


        })
    })
})

$(document).ready(function () {
    $('#sundayBtn').click(function () {
        //nested the fetch function inside so that it will be trigger everytime we press the generate button 
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=cersei+lannister',
            // url:'https://api.giphy.com/v1/gifs/?q=tyrion+lannister&api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&limit=1',
            method: 'GET',

            success: function (data) {
                //our success is working 
                console.log(data);
                //this is how we get the url of the first gif 
                var gifUrl = data.data.images.original.url;
                //this is how we create an image with the url as source
                var img = $('<img>').attr('src', gifUrl);
                //allows us to append ! 
                $('#cerseiQuote').append(img);


            },
            //our error is currently working 
            error: function (error) {
                //testing to see if its not working 
                console.error(error);
            }

        })
    })
    
    //added functionality of reset button by clearing local storage and reloading page
    $(document).ready(function() {
        $("#resetBtn").click(function() {
          localStorage.clear();
          location.reload();
        });
      });
})