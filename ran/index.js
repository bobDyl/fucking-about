// Make tokens to increase click count
// Make tokens to passively increase count
// Make lightning round click

//dom main variable
let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let sparkles = 0;
let sparkleClicks = 1;
let sparklePS = 0;

//PowerUps
let sexyRing = document.getElementById("sexyRing");
var sexyRingCount = 0;
let activeWear = document.getElementById("activeWear");
var activeWearCount = 0;
let sleepy = document.getElementById("sleepy");
var sleepyCount = 0;
let illama = document.getElementById("illama");
var illamaCount = 0;
let fluffySocks = document.getElementById("fluffySocks");
var fluffySocksCount = 0;
let opalNecklace = document.getElementById("opalNecklace");
var opalNecklaceCount = 0;
let teslaThermals = document.getElementById("teslaThermals");
var teslaThermalsCount = 0;
let pikachuOnsie = document.getElementById("pikachuOnsie");
var pikachuOnsieCount = 0;

//Passives
let maff = document.getElementById("maff");
var sexyRingCount = 0;
let nick = document.getElementById("nick");
var sexyRingCount = 0;
let susie = document.getElementById("susie");
var sexyRingCount = 0;
let kate = document.getElementById("kate");
var sexyRingCount = 0;
let buddy = document.getElementById("buddy");
var sexyRingCount = 0;
let korra = document.getElementById("korra");
var sexyRingCount = 0;
let whiteSide = document.getElementById("whiteSide");
var sexyRingCount = 0;
let wogSide = document.getElementById("wogSide");


// When click on rans face
cookie.onclick = function (event) {
    event.preventDefault();
    sparkles += sparkleClicks;
    //add in some animation here
    console.log(sprinkles);
    counter.innerHTML = "Sparkles: " + sparkles;
}

// setting interval time - 1 second
setInterval(function (){
    sprinkles += sparklePS
    counter.innerHTML = "Sparkles: " + sparkles;
}, 1000);




