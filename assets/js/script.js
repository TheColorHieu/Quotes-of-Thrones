const apiKey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'

const tyrionQuote = document.querySelector('#tyrionQuote');
const baelishQuote = document.querySelector('#baelishQuote');
const daenerysQuote = document.querySelector('#daenerysQuote');
const jonQuote = document.querySelector('#jonQuote');
const aryaQuote = document.querySelector('#aryaQuote');
const jaimeQuote = document.querySelector('#jaimeQuote');
const cerseiQuote = document.querySelector('#cerseiQuote');

const weekday = {
    monday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/tyrion/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=tyrion+lannister",
    },
    tuesday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/baelish/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=petyr+baelish",
    },
    wednesday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/daenerys/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=daenerys+targaryen",
    },
    thursday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/jon/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=jon+snow",
    },
    friday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/arya/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=arya+stark",
    },
    saturday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/jaime/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=jaime+lannister",
    },
    sunday: {
        quote: "https://api.gameofthronesquotes.xyz/v1/author/cersei/2",
        image: "https://api.giphy.com/v1/gifs/random?api_key=XdKAq0Iih87Sx83LInGdrQgoMit3ALUH&tag=cersei+lannister",
    }
}


const today = dayjs().format("dddd");
const currentTime = dayjs().hour();
$("h2").append(today);


const savedQuote = localStorage.getItem('tyrionQuote')
if (savedQuote) {
    tyrionQuote.textContent = savedQuote;
}
$("#mondayBtn").on("click", function (event) {
    event.preventDefault();
    const mondayQuote = weekday.monday.quote
    fetch(mondayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            tyrionQuote.textContent = quote;
            localStorage.setItem('tyrionQuote', quote);
        })
        .then(function (data) {
        })

    const mondayImg = weekday.monday.image
    fetch(mondayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#tyrionQuote').append(img);
        })
});

const savedQuote1 = localStorage.getItem('baelishQuote')
if (savedQuote1) {
    baelishQuote.textContent = savedQuote1;
}
$("#tuesdayBtn").on("click", function (event) {
    event.preventDefault();
    const tuesdayQuote = weekday.tuesday.quote
    fetch(tuesdayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            baelishQuote.textContent = quote;
            localStorage.setItem('baelishQuote', quote);
        })
        .then(function (data) {
        })

    const tuesdayImg = weekday.tuesday.image
    fetch(tuesdayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#baelishQuote').append(img);
        })
});

const savedQuote2 = localStorage.getItem('daenerysQuote')
if (savedQuote2) {
    daenerysQuote.textContent = savedQuote2;
}
$("#wednesdayBtn").on("click", function (event) {
    event.preventDefault();
    const wednesdayQuote = weekday.wednesday.quote
    fetch(wednesdayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            daenerysQuote.textContent = quote;
            localStorage.setItem('daenerysQuote', quote);
        })
        .then(function (data) {
        })

    const wednesdayImg = weekday.wednesday.image
    fetch(wednesdayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#daenerysQuote').append(img);
        })
});

const savedQuote3 = localStorage.getItem('jonQuote')
if (savedQuote3) {
    jonQuote.textContent = savedQuote3;
}
$("#thursdayBtn").on("click", function (event) {
    event.preventDefault();
    const thursdayQuote = weekday.thursday.quote
    fetch(thursdayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jonQuote.textContent = quote;
            localStorage.setItem('jonQuote', quote);
        })
        .then(function (data) {
        })

    const thursdayImg = weekday.thursday.image
    fetch(thursdayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#jonQuote').append(img);
        })
});

const savedQuote4 = localStorage.getItem('aryaQuote')
if (savedQuote4) {
    aryaQuote.textContent = savedQuote4;
}
$("#fridayBtn").on("click", function (event) {
    event.preventDefault();
    const fridayQuote = weekday.friday.quote
    fetch(fridayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            aryaQuote.textContent = quote;
            localStorage.setItem('aryaQuote', quote);
        })
        .then(function (data) {
        })

    const fridayImg = weekday.friday.image
    fetch(fridayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#aryaQuote').append(img);
        })
});

const savedQuote5 = localStorage.getItem('jaimeQuote')
if (savedQuote5) {
    jaimeQuote.textContent = savedQuote5;
}
$("#saturdayBtn").on("click", function (event) {
    event.preventDefault();
    const saturdayQuote = weekday.saturday.quote
    fetch(saturdayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            jaimeQuote.textContent = quote;
            localStorage.setItem('jaimeQuote', quote);
        })
        .then(function (data) {
        })

    const saturdayImg = weekday.saturday.image
    fetch(saturdayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#jaimeQuote').append(img);
        })
});

const savedQuote6 = localStorage.getItem('cerseiQuote')
if (savedQuote6) {
    cerseiQuote.textContent = savedQuote6;
}
$("#sundayBtn").on("click", function (event) {
    event.preventDefault();
    const sundayQuote = weekday.sunday.quote
    fetch(sundayQuote)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].sentence;
            cerseiQuote.textContent = quote;
            localStorage.setItem('cerseiQuote', quote);
        })
        .then(function (data) {
        })

    const sundayImg = weekday.sunday.image
    fetch(sundayImg)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            const img = $('<img>').attr('src', gifUrl);
            $('#cerseiQuote').append(img);
        })
});

$(document).ready(function () {
    $("#resetBtn").click(function () {
        localStorage.clear();
        location.reload();
    });
});
