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



//Console.log
let APIKEY = XdKAq0Iih87Sx83LInGdrQgoMit3ALUH;
document.addEventListener("DOMContentLoaded", init);
function init (){
    document.getElementById("btnSearch").addEventListener("click", ev => {
        //preventing the website to refresh 
        ev.preventDefault();
        let url = 'https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=';
        let str = document.getElementById("search").ariaValueMax.trim();
        url = url.concat(str);
        coknsole.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(content => {
            //data
            console.log(content.data);
            cosole.log('META', content.meta);
           
        })
        .catch(err=>{
            console.error(err);

        })
    });
}