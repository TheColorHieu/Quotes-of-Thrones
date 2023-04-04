API
var giphykey = 'XdKAq0Iih87Sx83LInGdrQgoMit3ALUH'
const searchBtn = document.getElementById("generateGif");
const Character = document.getElementById();
const tyrion = 'https://api.gameofthronesquotes.xyz/v1/author/tyrion/2'
// const Tywin = https://api.gameofthronesquotes.xyz/v1/author/
// const Daenerys = https://api.gameofthronesquotes.xyz/v1/author/
// const TheHound = https://api.gameofthronesquotes.xyz/v1/author/
// Arya = https://api.gameofthronesquotes.xyz/v1/author/
// PeterBalish = https://api.gameofthronesquotes.xyz/v1/author/
// FLAGS

//Event listerners
searchBtn.addEventListener("click", function () {

    fetch('https://api.gameofthronesquotes.xyz/v1/author/tyrion/2')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
});

//function getcharacter(){

//fetch()


//}



//Console.log