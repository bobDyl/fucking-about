// Add the count of power ups/passives active on button
//Increase cost after each purchase
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
var maffCount = 0;
let nick = document.getElementById("nick");
var nickCount = 0;
let susie = document.getElementById("susie");
var susieCount = 0;
let kate = document.getElementById("kate");
var kateCount = 0;
let buddy = document.getElementById("buddy");
var buddyCount = 0;
let korra = document.getElementById("korra");
var korraCount = 0;
let whiteSide = document.getElementById("whiteSide");
var whiteSideCount = 0;
let wogSide = document.getElementById("wogSide");
var wogSideCount = 0;

//updating counter
function updateCounter() {
    counter.innerHTML = "Sparkles: " + sparkles;
}

// When click on rans face
cookie.onclick = function (event) {
    event.preventDefault();
    sparkles += sparkleClicks;
    //add in some animation here
    updateCounter();
}

// setting interval time => 1 sec
setInterval(function (){
    if (sparkles == 0) return;
    sparkles += sparklePS;
    updateCounter();
}, 1000)

//PowerUP functions
sexyRing.onclick = function(){
    if (sparkles >= 15){
        sparkles -= 15;
        sexyRing.style.backgroundColor = "red";
        sexyRingCount ++;
        sparkleClicks += sexyRingCount * 2;
        updateCounter();
    }
}

activeWear.onclick = function(){
    if (sparkles >= 50){
        sparkles -= 50;
        activeWear.style.backgroundColor = "red";
        activeWearCount ++;
        sparkleClicks += activeWearCount * 2;
        updateCounter();
    }
}

sleepy.onclick = function(){
    if (sparkles >= 500 || sleepyCount > 0){
        sparkles -= 500;
        sleepy.style.backgroundColor = "red";
        sleepyCount ++;
        sparkleClicks += sleepyCount * 2;
        updateCounter();
    }
}


illama.onclick = function(){
    if (sparkles >= 1000 || illamaCount > 0){
        sparkles -= 1000;
        illamaCount ++;
        sparkleClicks += illamaCount * 2;
        updateCounter();
    }
}

fluffySocks.onclick = function(){
    if (sparkles >= 5000 || fluffySocksCount > 0){
        sparkles -= 5000;
        fluffySocksCount ++;
        sparkleClicks += fluffySocksCount * 2;
        updateCounter();
    }
}

opalNecklace.onclick = function(){
    if (sparkles >= 15000 || opalNecklaceCount > 0){
        sparkles -= 15000;
        opalNecklaceCount ++;
        sparkleClicks += opalNecklaceCount * 2;
        updateCounter();
    }
}

teslaThermals.onclick = function(){
    if (sparkles >= 50000 || teslaThermalsCount > 0){
        sparkles -= 50000;
        teslaThermalsCount ++;
        sparkleClicks += teslaThermalsCount * 2;
        updateCounter();
    }
}

pikachuOnsie.onclick = function(){
    if (sparkles >= 1000000 || pikachuOnsieCount > 0){
        sparkles -= 1000000;
        pikachuOnsieCount ++;
        sparkleClicks += pikachuOnsieCount * 2;
        updateCounter();
    }
}

maff.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

nick.onclick = function(){
    if (sparkles >= 1000) {
        sparkles -= 1000
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

susie.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50 
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

kate.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

buddy.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

korra.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
}

whiteSide.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
} 

wogSide.onclick = function(){
    if (sparkles >= 50) {
        sparkles -= 50
        maffCount ++
        sparklePS = 1 * maffCount;
        updateCounter();
    }
} 
