// ==UserScript==
// @name         Ae86
// @description  pulsar's ae86 
// @author       Pulsar
// @grant        none
// @noframes
// @match        *://*/*
// @exclude      *://stratums.io/*
// @exclude      *://*.com/*
// @exclude      *://*.x-x-client.glitch.me/*
// @require      *://feudalwars.glitch.me/*
// @exclude      *://sploop.io/*
// @exclude      *://*.ru/*
// @exclude      *://*.to/*
// @exclude      *://*.net/*
// @version      17
// @require      
// @require https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @grant  unsafeWindow
// ==/UserScript==

/**
Ae86 Remake

Credits:
Original code: x-z3r0 (X-Ware 3.1)
Non-Bundle base: Nudo
Autoheal idea: Watersheep
Helper: ! pegas
Optimisations:Apple
Dont try to skid or ill 10-0 u ez
**/
let weaponsNear = []
$("#gameUI").css("box-shadow", "inset 0px 0px 9999px black, inset 0px 0px 9999px black")


function menu2() {
    men.style.display = (men.style.display == "block") ? "none" : "block"
}

function antiRuby() {
    sendws(foodType)
    sendws(foodType)
    sendws(foodType);
    setTimeout(()=>{ 
        sendws(foodType)
        storeEquip(22);
        sendws(foodType)  
        setTimeout(()=>sendws(foodType),20);
    },48);
}


let men = document.createElement('div')
men.innerHTML = `

<div id = "men" style = "height:100%;width:
40%;top:0%;right:0;position:fixed;font-family:monospace !important;color:white;font-size:30 !important; background-color:rgba(0,0,0,0.8);border-radius:3px;max-width:30%;max-height:100%;overflow-x:auto;overflow-y:auto;overflow:auto;"> 
<h1>Ae86</h1><br>
<input type = "checkbox" id = "a"> AutoInsta<br>
<input type = "checkbox" id = "b"> LagInsta?<br>
<input type = "checkbox" id = "c"> UseBoostForInsta?<br>
<input type = "checkbox" id = "d"> InstaWaitForBull?<br>
<input type = "checkbox" id = "e"> AutoTickSD<br>
<input type = "checkbox" id = "f"> SolidierInsta<br>
<input type = "checkbox" id = "g"> AutoQSpammer?<br>
<input type = "checkbox" id = "h"> AntiGaySex?<br>
<input type = "checkbox" id = "j"> TickGlitch<br>
<input type = "checkbox" id = "k"> ZeroTick (Works with TickGlitch)<br>
<input type = "checkbox" id = "l"> DamageSpoof<br>
<input type = "checkbox" id = "m"> AutoEMP<br>
<input type = "checkbox" id = "n"> AutoSOL<br>
<input type = "checkbox" id = "o"> AutoShameReset<br>
<input type = "checkbox" id = "p"> AutoAntiZeroFrame<br>
<input type = "checkbox" id = "q"> AutoAntiZeroTick<br>
<input type = "checkbox" id = "r"> AutoAntiPulseInsta<br>
<input type = "checkbox" id = "s"> AutoAntiLagInsta<br>
<input type = "checkbox" id = "t"> AutoAntiAntiBull<br>
<input type = "checkbox" id = "y1"> AutoBoostSpike<br>
<input type = "checkbox" id = "v"> AutoFixAim<br>
<input type = "checkbox" id = "u"> AutoAE86Aim<br>
<input type = "checkbox" id = "x"> AutoAntiBullTick<br>
<input type = "checkbox" id = "y"> SafeInsta<br>
<input type = "checkbox" id = "z"> AutoAntiAutoInsta<br>
<input type = "checkbox" id = "a2"> GameTickTest<br>
<input type = "checkbox" id = "b2">AutoSpike<br>
<input type = "checkbox" id = "c2">eXtrem3 B3T4 HeaL<br>

</div>

`
top.document.body.appendChild(men);

function c(a) {
    return document.getElementById(a).checked;
}

let angl = Number.MAX_VALUE

ezz = 100;

setInterval(()=>{
MVH = c("c2")
if (c("b2") && makingHit) sendws(spikeType)
if (c("p") && enemyMakingHit) sendws(boostType)
if (c("a")) aI = c("a")
if (c("g")) autoq = 90
else autoq = 0;
if (c("d") && !enemies.acc.includes(18)) socketsender([["c"],[0,null]])
if (c("f")) storeEquip(6);
if (c("o") && dist(enemy) > 500) storeEquip(7)
if (c("h") && ezz != 100 && enemyMakingHit) antiRuby()
if (c("m")) storeEquip(22);
if (c("y1")) BS = c("y1")
if (c("a2") && enemyMakingHit) {
   storeBuy(13,!0)
   storeEquip(13,!0);
   // Test if spike near
   if (dist(spike) < 100) {
      // Place quad
      sendws(spikeType)
   } else {
      // Every tick we should check is everything okay.
      if (enemies.acc.includes(18) && Date.now() - lastTick > 100) {
        // Insta or antiinsta!!!
        sendws(foodType)
      }
   }
}
if (c("t") && !enemyMakingHit && enemies.acc.includes(21) && ezz != 100) storeEquip(11)
if (c("v")) socketsender([["2"],[angl]])
if (c("y") && enemyMakingHit) storeEquip(6);
if (c("s") && window.pingTime < 1500 && enemyMakingHit) sendws(foodType);
if (c("l") && ezz < 60) sendws(spikeType)
if (c("u")) {
    let aim = enemyMakingHit ? Math.atan2((myPlayer.y - enemy.y), (myPlayer.x - enemy.x)) : Number.MAX_VALUE 
    socketsender(["2"],[aim])
}
if (c("j") && window.pingTime < 700) {
    slpacketr()
} 
if (c("z")) {
   if (enemyMakingHit) storeEquip(6);
   else storeEquip(22);
}
if (c("q") && enemyMakingHit && hbarWidth != 100 && dist(enemy) < 350) {
    sendws(foodType);
    sendws(foodType);
    sendws(foodType);
}
    if (Date.now() - lastHeal >= 70 ) {
                    sendws(foodType);
                    sendws(foodType);
        sendws(foodType);
        sendws(foodType);
    }
},0.1);

let autoReplace = location.href.includes("sandbox")

let locked = true;

function fakedash(delay) { // fan
   let old = window.requestAnimationFrame;
   let f = []
   window.requestAnimationFrame = function(l){f.push(l)}
   setTimeout(()=>{
       for (let i = 0;i < f.length; i++) {
           i[f-1]();
       }
       setTimeout(()=>{
           window.requestAnimationFrame = old;
       },100);
   },delay);
}

CanvasRenderingContext2D.prototype._moveTo = CanvasRenderingContext2D.prototype.moveTo;
let pz = document.createElement("div")
pz.style = `
z-index:9999999999999;
background:rgba(0,0,0,0.5);
width:180px;
height:80px;
position:fixed;
top:25%;
color:white;
left:10px;
border-radius:20px;
`
pz.id = "sap"
document.body.append(pz)
let speed = 120;
function resize(w,h) {
    window.config.maxScreenWidth = w;
    window.config.maxScreenHeight = h;
    unsafeWindow.config.maxScreenWidth = w;
    unsafeWindow.config.maxScreenHeight = h;
    window.dispatchEvent(new Event("resize"));
}

function ezpz() {
    // Noobs now think about me skidding ezlol
    // When i didn't skidded a shit here
    sendws(spikeType,myPlayer.dir - Math.PI - 1.3);
    sendws(spikeType,myPlayer.dir + Math.PI + 1.3);
    // ezzz everyone XD
    let path = Math.atan2((myPlayer.y - enemy.y), (myPlayer.x - enemy.x))
    socketsender([["33"],[path]])
    setTimeout(()=>{
         path = Math.atan2((myPlayer.y - enemy.y), (myPlayer.x - enemy.x))
         sendws(spikeType,path + 1.3);
         sendws(spikeType,path - 1.3);
    },37);
}

let angleKl = 0;



class AimLock {
    constructor(angle) {
        this.angle = angle
    }
    start() {
        this.int = setInterval(()=>{socketsender([["2"],[this.angle]])},1);
    }
    stop() {
        clearInterval(this.int);
        
    }
}
window.addEventListener('mousedown',(e)=>{
    if (e.button == 2) {
        storeBuy(40);
        storeEquip(40);
        locked = false
        socketsender([["5"],[10,true]])
        socketsender([["c"],[1,null]])
    }
});
window.addEventListener('mouseup',(e)=>{
    if (e.button == 2) {
        storeBuy(11);
        storeEquip(11);
        locked = true
        socketsender([["5"],[primary,true]])
        socketsender([["c"],[0,null]])
    }
});

window.addEventListener("keydown",function (e) {
    switch (e.keyCode) {
        case 82:
            locked = false
            storeEquip(0,!0)
            storeEquip(21,!0)
            cjt("-ZeroTick-")
            fakedash(70)
            socketsender([["5"],[primary,true]])
           socketsender([["c"],[1,null]])
            storeEquip(7);
            setTimeout(()=>{
                storeEquip(53)
                        socketsender([["5"],[secondary,true]])
        socketsender([["c"],[0,null]])
            },69);
            setTimeout(()=>locked=true,200);
            break;
        case 192:
            play()
            break;
        case 78:
            sendws(millType,myPlayer.dir - 1.2)
            sendws(millType,myPlayer.dir + 1.2)
            sendws(millType,myPlayer.dir + 0.3);
            break;
    }
})
window.recalibrate = function(){}
let bullspam = false;
setInterval(()=>{
    bullspam = false;
},5000);
let enemyMakingHit = false;
window.addEventListener('mousedown',function(e){
    if (enemyMakingHit && e.button == 2) {isAutoS=true
                                          setTimeout(()=>{
                                              isAutoS=false
                                          },120);
                                          cjt("pancake power")
                                         }
})
function cjt(a) {
    socketsender([["ch"],[a]])
}
function play() {
    var Fallout = new Audio("https://cdn.discordapp.com/attachments/888447750943957053/966698073172627476/neoni-x-unsecret-fallout-lyric-video.mp3");
    Fallout.play();
    setTimeout(() => {
        cjt('Hush now')
    }, 19000)
    setTimeout(() => {
        cjt('Dry your eyes')
    }, 21000)
    setTimeout(() => {
        cjt('Fate is upon us')
    }, 23500)
    setTimeout(() => {
        cjt('The changing of times')
    }, 25000)
    setTimeout(() => {
        cjt('Welcome')
    }, 28000)
    setTimeout(() => {
        cjt('Blood red skies')
    }, 30000)
    setTimeout(() => {
        cjt('Burn in wake of')
    }, 32000)
    setTimeout(() => {
        cjt('A world left behind')
    }, 34000)
    setTimeout(() => {
        cjt('DI YA')
    }, 37000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 38000)
    setTimeout(() => {
        cjt('DI YA')
    }, 39000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 40000)
    setTimeout(() => {
        cjt('DI YA')
    }, 41500)
    setTimeout(() => {
        cjt('DA DA DE, DA')
    }, 42000)
    setTimeout(() => {
        cjt('DI YA')
    }, 46000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 47000)
    setTimeout(() => {
        cjt('DI YA')
    }, 48000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 49000)
    setTimeout(() => {
        cjt('DI YA')
    }, 50000)
    setTimeout(() => {
        cjt('DA DA DE, DA')
    }, 51000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 53000)
    setTimeout(() => {
        cjt('Feel the fire rain down')
    }, 57500)
    setTimeout(() => {
        cjt("See the shadows rising all a'")
    }, 62000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 66000)
    setTimeout(() => {
        cjt('Fallout')
    }, 69000)
    setTimeout(() => {
        cjt('Down to the ashes')
    }, 72000)
    setTimeout(() => {
        cjt('Bones are left to dry')
    }, 76000)
    setTimeout(() => {
        cjt('Waves of desolation')
    }, 80000)
    setTimeout(() => {
        cjt("There's nowhere safe to hide")
    }, 84000)
    setTimeout(() => {
        cjt('DI YA')
    }, 89000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 90000)
    setTimeout(() => {
        cjt('DI YA')
    }, 91500)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 92000)
    setTimeout(() => {
        cjt('DI YA')
    }, 93500)
    setTimeout(() => {
        cjt('DA DA DE, DA')
    }, 95000)
    setTimeout(() => {
        cjt('DI YA')
    }, 98000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 99000)
    setTimeout(() => {
        cjt('DI YA')
    }, 100000)
    setTimeout(() => {
        cjt('DA DA DE')
    }, 101000)
    setTimeout(() => {
        cjt('DI YA')
    }, 102000)
    setTimeout(() => {
        cjt('DA DA DE, DA')
    }, 103000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 106000)
    setTimeout(() => {
        cjt('Feel the fire rain down')
    }, 110000)
    setTimeout(() => {
        cjt("See the shadows rising all a'")
    }, 114000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 118000)
    setTimeout(() => {
        cjt('Fallout')
    }, 121000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 166000)
    setTimeout(() => {
        cjt('Feel the fire rain down')
    }, 171000)
    setTimeout(() => {
        cjt("See the shadows rising all a'")
    }, 175000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 180000)
    setTimeout(() => {
        cjt('Fallout')
    }, 182000)
    setTimeout(() => {
        cjt("Can't escape the fallout")
    }, 184000)
    setTimeout(() => {
        cjt(`FALLOUT!`)
    }, 186500)
}



setInterval(()=>{
    window.recalibrate()
},10000);
function oneFrame() {
    storeBuy(7);storeEquip(7);
    storeBuy(11,!0);storeEquip(11,!0);
    socketsender([["c"],[1,null]])
    window.requestAnimationFrame(function(){
        storeBuy(53);storeEquip(53)
        setTimeout(()=>{
            socketsender([["5"],[secondary,true]])
            socketsender([["c"],[0,null]])
            setTimeout(()=>{
                sendws(spikeType)
            },dist(enemy) / 3.6)
        },dist(enemy) / 7);
    })
}

function scary() {
}

//if (hbarWidth != 100) setTimeout(()=>{scary();},75);

let autoPush = false;
let spike = {x:0,y:0}
setInterval(()=>{
    if (autoPush) {
        if (dist(enemy) > 90) {
            if (dist(enemy) > 200) return
            socketsender([["33"],[Math.atan2((myPlayer.y - enemy.y), (myPlayer.x - enemy.x))]])
        } else {
            sendws(spikeType,myPlayer.dir-1.5);
            sendws(spikeType,myPlayer.dir+1.5);
            sendws(spikeType,myPlayer.dir-3);
            socketsender([["33"],[Math.atan2((myPlayer.y - spike.y), (myPlayer.x - spike.x))]])
        }
    }
    if (hbarWidth < 100) {
        setTimeout(()=>{
            if (hbarWidth < 100) {
                hbarWidth = 100;
            }
        },35);
    }
},1);

function drawMarker(ctx) {
    if (!item) return;
    ctx.fillStyle = "rgba(100,25,25,0.5)";
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
    ctx.fill();
    item = null;
}
CanvasRenderingContext2D.prototype.restore = new Proxy(CanvasRenderingContext2D.prototype.restore, {
    apply(target, _this, args) {
        MVH && drawMarker(_this);
        return target.apply(_this, args);
    }
});



let dedTraps = []
let itemIds = []


function dedSpike() {
    sendws(spikeType);
    slpacketr()
}



var ranges = [75,80,85,120,128,152,120,75]
let voo = false;
CanvasRenderingContext2D.prototype._fillText = CanvasRenderingContext2D.prototype.fillText;
CanvasRenderingContext2D.prototype.fillText = function() {
    //if (voo) this.fillStyle = "red"
    this._fillText.call(this,...arguments);
}

var item;

function spike_insta() {
    //voo = true
    sendws(secondary)
    storeBuy(7);
    storeEquip(7);
    socketsender([["c"],[1,null]]);
    setTimeout(()=>{
        sendws(primary)
        storeEquip(53);
        
    },dist(enemy) / 3.6);
}

window.addEventListener('auxclick', function(e) {
    if (e.button == 1) {
        spike_insta();
    }
})

let speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
var aK = 0;


var autoq = 0;
let reloadBarMax = 25;
let r1val = 50;
let r2val = 50;
// Heal stuff
setInterval(()=>{
    window.defaultHat = 6;
    window.defaultAccessory = 21
    if (enemyMakingHit) storeEquip(6);
},45);
let aD = 35;
function updateHealStuff() {
    if (shameCount == 0 || shameCount == 2 || shameCount == 4 || shameCount == 6) {
        autoq = 0;
    } else {
        autoq = 0
    }
}

function fillBar1(int) {
    if (!r1val < 49) {
        let i = setInterval(()=>{
            if (r1val >= 50) clearInterval(i)
            r1val++;
        },speeds[primary] / 50);
    }
}
function fillBar2(int) {
    if (!r2val < 49) {
        let i = setInterval(()=>{
            if (r2val >= 50) clearInterval(i)
            r2val++;
        },speeds[secondary] / 50);
    }
}

function hpToW(hp) {
    return hp;
}
let health = 100;
let isAutoS = false;
setInterval(()=>{
    isAutoS && storeEquip(6)
    if (bullspam) {
        if (enemyMakingHit) storeEquip(11);
        else storeEquip(7);
    }
},1);
window.insta = function(){}
function aim(x, y){
    //    clientX: x,
    //    clientY: y
    //}));
}

var featuredYoutuber = document.getElementById('featuredYoutube');
var youtuberList = [{
    name: "Pulsar",
    link: "https://youtube.com/channel/UCqDsLQPY-Ecd2saIdXbyt2g"
},  {
    name: "x-z3r0",
    link: ""
},  {
    name: "Watersheep",
    link: ""
},  {
    name: "! pegas",
    link: ""
},  {
    name: "Nudo",
    link: ""
}]
setInterval(()=>{
    document.getElementsByClassName("ytLink").style.display = "block";
    var tmpYoutuber = youtuberList[Math.floor(Math.random()*youtuberList.length-1)];
    featuredYoutuber.innerHTML = "<a target='_blank' class='ytLink' href='" + tmpYoutuber.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + tmpYoutuber.name + "</a>";
},1000);

function slpacketr() {
    ws.send(new Uint8Array([223, 0, 83, 80, 29, 38, 3, 17, 15, 4, 7]));
}
var sR = false; // Pancake reload
var pR = false; // Retarded reload
var tR = false; // Nigger reload
var reloading = true; // Reload status
var aI = false; // Autoinsta status

function reload_retarded() {
    reloading = true;
    socketsender(["5", [secondary, true]]); // retarded 💀💀💀💀💀💀
    setTimeout(()=>{
        sR = true;
        setTimeout(()=>{
            pR = true;
            setTimeout(()=>{
                tR = true;
            },1000);
        },600);
        socketsender(["5", [primary, true]]); // retarded 💀💀💀💀💀💀
        reloading = false;
    },2505);
}


var BS = false;
var healInNextTick = false;
function lagger(power) {
    ws.send(new Uint8Array([135,0,83,80,29,38,3,17,15,~~Math.random()*200,power]))
}

var version = "4.1.1";

let pb = document.createElement("progressbar");
pb.style = `
width:100%;
position:fixed;
text-align:center;
left:0%;
height:100%;
z-index:9999999999999;
border-radius:9px;
background:black;
color:white;
`
pb.innerHTML = `
Waiting for DOM...
`;

pb.val = "0"

top.document.body.appendChild(pb);



var ae86 = 0;
var enemies = {acc:[]}
var gt86 = 0;
function af(from,to) {
    let a = setInterval(()=>{
        if (from < to) {
            hbarWidth++
        } else {
            hbarWidth--
        }
    },10);
    setTimeout(()=>{
        clearInterval(a)
    },(from-to) * 10);
}
let lastTick = Date.now();
let lastHeal = Date.now()
let shameCount = 0;
let lU = Date.now()
function pro_anti() {
    healInNextTick = true;
    storeBuy(6);storeEquip(6);
    setTimeout(()=>{
        if (!enemyMakingHit) storeBuy(22);storeEquip(22);
        setTimeout(()=>{
            alive = false;
            setTimeout(()=>{
                alive = true;
                for (let i = 0; i < pack.length; i++) ws.send(pack[i-1]);
            },10);
        },Date.now() - lastTick);
    },Date.now() - lastTick - 3);
}

window._css_updatePingCounter = function(){return unsafeWindow.pingTime}

var menu;
let opened = false;
function remap(d) {
    if (d) return "block";
    else return "none";
}
function openM() {
    opened = !opened;
    menu.style.display = remap(opened);
}

function reseter() {
    if (!enemyMakingHit) {
        storeEquip(7);
    }
}

let dash1 = new Uint8Array([
    223, 0, 83, 80, 29, 38, 3, 17, 15, 4, 7, 0, 5, 16, 9, 5, 22,
])
let dash2 = new Uint8Array([
    135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
]);

function crash() {
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
    ws.send(new Uint8Array([
        135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180
    ]),myPlayer.dir)
}
let {
    primary,
    secondary,
    foodType,
    wallType,
    spikeType,
    spawned,
    millType,
    autosecondary,
    mineType,
    boostType,
    turretType,
    spawnpadType,
    baitType
} = {
    primary: null,
    secondary: null,
    foodType: null,
    wallType: null,
    spikeType: null,
    millType: null,
    mineType: null,
    boostType: null,
    turretType: null,
    spawnpadType: null,
    baitType: null
}

let mouseX;
let mouseY;
let width;
let height;
let enemiesNear;
let isEnemyNear;
var ws;
let myPlayer = {
    'id': null,
    'x': null,
    'y': null,
    'x1':null,
    'y1':null,
    'dir': null,
    'object': null,
    'weapon': null,
    'clan': null,
    'isLeader': null,
    'hat': null,
    'accessory': null,
    'isSkull': null
};
let enemy = {
    'id': null,
    'x': null,
    'y': null,
    'x1':null,
    'y1':null,
    'dir': null,
    'object': null,
    'weapon': null,
    'clan': null,
    'isLeader': null,
    'hat': null,
    'accessory': null,
    'isSkull': null
};
document.msgpack = msgpack;
function filter(L) {

    if (L==primary) {
        if (!r1val < 49) r1val = 0;
        if (!r1val < 49) fillBar1(10);
    } else {
        if (!r2val < 49) r2val = 0;
        if (!r2val < 49) fillBar2(10);
    }
}
// Make high ping users feel better

let hbarWidth = 100;

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){


    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
let alive = true;
let pack = []
function socketFound(a) {
    pb.innerHTML = `
Hooked WebSocket
`;


    a['addEventListener']('message', function (b) {
        handleMessage(b);
    });
}
var healing = false;
let Ty = Date.now()
let lovemen = false;
function handleMessage(a) {
    let b = msgpack['decode'](new Uint8Array(a['data']));
    let c;
    if (b['length'] > 0x1) {
        c = [b[0x0], ...b[0x1]];
        if (c[0x1] instanceof Array) {
            c = c;
        }
    } else {
        c = b;
    }
    let d = c[0x0];
    if (!c) {
        return;
    };

    if (d == '1' && myPlayer['id'] == null) {
        myPlayer['id'] = c[0x1];
        pb.innerHTML = `
Get PID [${c[1]}]
`;
        pb.style.display = "none";

    }
    if (d == '11' && lovemen) crash()
    if (d == '2' && lovemen) socketsender([["ch"],["Kill me=crash!"]])
    if (d == '7' && c[1] != myPlayer.id) {reseter();enemyMakingHit=true;setTimeout(()=>{enemyMakingHit=false},120);storeBuy(6);storeEquip(6);storeBuy(21,!0);storeEquip(21,!0);
                                          if (enemies.acc.includes(21)) pro_anti();
                                          //if (window.pingTime < 1900) sendws(foodType)

                                         }
    if(d == "6"){
        for(let i = 0; i < c[1].length / 8; i++){
            let ObjectData = c[1].slice(8*i, 8*i+8);

            if(ObjectData[6] == 16 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){

                //socketsender([["ch"],["skid detect test"]])



            }
            if (ObjectData[6] == spikeType && ObjectData[7] == myPlayer.id) {
                spike.x = ObjectData[1]
                spike.y = ObjectData[2]
            }
            if(ObjectData[6] == 15 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){

                //socketsender([["ch"],["skid detect test"]])
                let ObjectDataa;
                ObjectDataa.x = ObjectData[1]
                ObjectDataa.y = ObjectData[2]
                if (dist(ObjectDataa) < 92) {
                    let aimer = new AimLock(ObjectData[3])
                    aimer.start()
                    setTimeout(()=>{
                        aimer.stop()
                    },speeds[myPlayer.weapon]*5);
                    for (let i = 0;i<5;i++) {
                        for (let a=0;a<361;a+=30) sendws([spikeType,millType,boostType,wallType][i],a/180/Math.PI)
                    }
                }



            }
            if (ObjectData[6] == 15 && ObjectData[7] == myPlayer.id) {
                itemIds.push(ObjectData[0])
                if (dist({x:ObjectData[1],y:ObjectData[2]}) < 120) ezpz();
            }
        }
    }
    if (d == '12') {
        if (autoReplace) sendws(spikeType,null)
        if (itemIds.includes(c[1])) {
            itemIds = []
            dedSpike()
            bullspam = true;
        }
    }
    if (d == 'h') ezz = (ezz + c[2]) / 2
    if (d == '7' && c[1] == myPlayer.id) {
        makingHit = true;
        
        setTimeout(()=>{
            
            makingHit=false
        },speeds[myPlayer.weapon])

        filter(myPlayer.weapon)
        aim(0,0);
        setTimeout(()=>{
            aim(1920,0);
            setTimeout(()=>{
                aim(0,1080);
                setTimeout(()=>{
                    aim(1920,1080);
                    setTimeout(()=>{
                        aim(enemy.x1,enemy.x2);
                        !myPlayer.weapon == secondary && socketsender([["2"],[null]]);
                    },45);
                },45);
            },45);
        },45);
    }
    if (d == 'h' && c[1] == myPlayer.id) { hbarWidth = c[2];  }


    if (d == "33") {
        if (healInNextTick && unsafeWindow.pingTime > 150) {
            //sendws(foodType);sendws(foodType);sendws(foodType);sendws(foodType);
            hbarWidth = 100;
            health = 100;
            healInNextTick = false;
            setTimeout(()=>{
                //sendws(foodType);sendws(foodType);sendws(foodType);sendws(foodType);
                hbarWidth = 100;
                scroll();
                setTimeout(()=>{
                    hbarWidth = 100;
                },10);
            },10);
        }

        enemiesNear = [];
        var f = 0;

        for (; f < c[1].length / 13; f++) {
            var object = c[1].slice(13 * f, 13 * f + 13);
            if (object[0] == myPlayer.id) {
                myPlayer.x = object[1];
                myPlayer.y = object[2];
                myPlayer.dir = object[3];
                myPlayer.object = object[4];
                myPlayer.weapon = object[5];
                myPlayer.clan = object[7];
                myPlayer.isLeader = object[8];
                myPlayer.hat = object[9];
                myPlayer.accessory = object[10];
                myPlayer.isSkull = object[11];
            } else if(object[7] != myPlayer.clan || object[7] === null) {
                enemiesNear.push(object);
                enemy.x = object[1];
                enemy.y= object[2];
                enemy.dir = object[3];
                enemy.object = object[4];
                enemy.weapon = object[5];
                weaponsNear.push(enemy.weapon)
                enemy.clan = object[7];
                enemy.isLeader = object[8];
                enemy.hat = object[9];
                enemy.accessory = object[10];
                enemy.isSkull = object[11];
                if (!enemies.acc.includes(object[10])) enemies.acc.push(object[10]);    
                if (enemy.accessory == 18) sendws(boostType);
                if (enemy.accessory == 21) sendws(boostType);
                if (enemy.hat == 53) storeEquip(22);
                if (enemy.hat == 7) storeEquip(6);


            }
        }
    }
    update();
}
var enemyAngelds;
var boostDir;
function onKill() {
    sendws(foodType) // antisync
    sendws(foodType)
    sendws(foodType)
    sendws(foodType)
    hbarWidth = 100;
    health = 100;
    socketsender([["ch"],["gg - AutoGG - Master Race"]])

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dist(a,b=false) {
    return b ? Math.sqrt(Math.pow((myPlayer.y1 - a.y), 2) + Math.pow((myPlayer.x1 - a.x), 2)) : Math.sqrt(Math.pow((myPlayer.y - a.y), 2) + Math.pow((myPlayer.x - a.x), 2))
}
function socketsender(a) {
    ws['send'](new Uint8Array(Array['from'](msgpack['encode'](a))));
}



function sendws(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    socketsender(["5", [id, null]]);
    socketsender(["c", [1, angle + 984674000034]]);
    socketsender(["c", [0, angle + 984674000034]]);
    socketsender(["5", [myPlayer.weapon, true]]);
    socketsender(["5", [primary, true]]);
    makingHit && socketsender([["c"],[1, angle + 984674000034]]);
    (foodType == id) && (
        (Date.now() - lastHeal < 120) ? function(){
            shameCount++;
        } : function(){
            shameCount--;
        },
        lastHeal = Date.now()
    )

}
function isElementVisible(a) {
    return a['offsetParent'] !== null;


}
function update() {
    for (let a = 0x10; a < 0x13; a++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + a['toString']()))) {
            foodType = a - 0x10;
        }
    }
    var event = 0;
    for (; event < 9; event++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + event['toString']()))) {
            primary = event;
        }
    }
    var div = 9;
    for (; div < 16; div++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + div['toString']()))) {
            secondary = div;
        }
    }
    var tobj = 16;
    for (; tobj < 19; tobj++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + tobj['toString']()))) {
            foodType = tobj - 16;
        }
    }
    var props = 19;
    for (; props < 22; props++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + props['toString']()))) {
            wallType = props - 16;
        }
    }
    var e = 22;
    for (; e < 26; e++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + e['toString']()))) {
            spikeType = e - 16;
        }
    }
    var f = 26;
    for (; f < 29; f++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + f['toString']()))) {
            millType = f - 16;
        }
    }
    var g = 29;
    for (; g < 31; g++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + g['toString']()))) {
            mineType = g - 16;
        }
    }
    var h = 31;
    for (; h < 33; h++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + h['toString']()))) {
            boostType = h - 16;
        }
    }
    var intval = 33;
    for (; intval < 39; intval++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + intval['toString']())) && intval != 36) {
            turretType = intval - 16;
        }
    }
    spawnpadType = 36;
}
let closestEnemyTargetImg = new Image()

closestEnemyTargetImg.src = 'https://media.discordapp.net/attachments/827112969304277012/888080795921694811/png-clipart-red-target-icon-sniper-rifle-aim-miscellaneous-text-thumbnail-removebg-preview.png?width=125&height=125'
closestEnemyTargetImg.loaded = false;
closestEnemyTargetImg.onload = function() {
    closestEnemyTargetImg.loaded = true, console.log('loaded')
}


let A = 1;
let B = 1;


CanvasRenderingContext2D.prototype._fillRect = CanvasRenderingContext2D.prototype.fillRect
    CanvasRenderingContext2D.prototype.fillRect = function(x,y,width,height) {
        if (this.fillStyle == "#b6db66" || this.fillStyle == "#b6db66") this.fillStyle="#5b820d";
        if (this.fillStyle == "#dbc666") this.fillStyle="#8c8520";
        if (this.fillStyle == "#91b2d6") this.fillStyle="#090cb8";
        this.shadowBlur = undefined;
        this._fillRect.call(this,...arguments)
    }
// Next code will come dont skid 1*;::;*
setInterval(()=>{
    autoSolidier = false;
},10000);

var MVH = false;
var autoSolidier = false;
var reseting = false;

var ad = {
    speed: 58,
    health:100,
    inProgress:false,
    last:Date.now(),
    weapon:0,
    food:null,
    place: function(id) {
        let j = [[["c"],[1,null]],[["5"],[ad.food,1]],[["c"],[0,null]],[["5"],[ad.weapon,1]],[["c"],[0,null]]]
        let jL = j.length;
        for (let i = 0;i < jL; i++) ad.newPacket(j[i-1]);
    },
    cycle: function(num,type) {
        for (let i = 0; i < num; i++) ad.place(type);
    },
    newPacket: function(a) {
        window.ws.send(ad.encodeRequest(a));
    },
    encodeRequest: function(d) {
        return msgpack.encode(new Uint8Array(Array.from(d)))
    },
    update: function() {
        for (let i = 16; i < 19; i++) if (ad.haveParent(document.getElementById("actionBarItem" + i.toString()))) ad.food = i - 16
    },
    haveParent: function(why_skid_bro) {
        return why_skid_bro.offsetParent !== null
    }
}
setInterval(function() {
    if (ad.health < 68 && !ad.inProgress && Date.now() - ad.last > 800) {
        ad.update();
        setTimeout(()=>{
            ad.last = Date.now();
            ad.cycle(2,ad.food);
        },ad.speed);
    } else if (autoSolidier && !reseting) {
        if (A % 2 == 0) {
            storeBuy(6);storeEquip(6);
        } else {
            storeBuy(22);storeEquip(22);
        }
        if (B % 2 == 0) {
            storeBuy(21,!0);
            storeEquip(21,!0);
        } else {
            storeBuy(18,!0);
            storeEquip(18,!0);
        }
        B = ~~Math.random()*4
        A = ~~Math.random()*4
    }
    window.config.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"];
    unsafeWindow.config.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"];
    if (dist(enemy) < 450) {
        sendws(boostType)
    }
    if (autoGrind) {
        sendws(turretType)
        sendws(turretType,Math.PI/2);
        sendws(turretType,-Math.PI/2);
        sendws(turretType,Math.PI);
        sendws(turretType,-Math.PI);
    }
},70);


var autoGrind = false;
var tumama = 1;
function animate(text) {
    return text.replace(text[~~Math.random() * text.length], "_")
}

let base = "https://plankton-app-29vjq.ondigitalocean.app/";

function rpl_tp(src) {
    return src.replace("moomoo", base).replace("dev", "").replace("sandbox", "").replace("mm_beta", "");
}


function instakill_56() {
    // 4=katana
    // 15=musket

    window.ws.send([
        ["5"],
        [15, true]
    ]);
    window.ws.send([
        ["c"],
        [1]
    ]);
    setTimeout(() => {
        window.ws.send([
            ["5"],
            [4, true]
        ]);
    }, 5);
    setTimeout(() => {
        window.ws.send([
            ["c"],
            [0, false]
        ]);

    }, 15);



}
// why skid nigga

localStorage.setItem("moofoll", !0), localStorage.setItem("follmoo", !0), window.follmoo && follmoo();


setInterval(() => {
    window.onbeforeunload = null;
    var text = document.getElementById("loadingText").innerText;
    if (text == "disconnected\nreload") {
        document.body.remove();
        var newurl = location.href.split("?")[0]
        window.location.href = newurl + "?n=" + Math.floor(Math.random() * 900000000);
    }

}, 100);
var ezsound = new Audio("https://cdn.discordapp.com/attachments/995042643128098930/995647198463262720/RIP.mp3");

var kills = 0;



setInterval(getkills, 10);

function getkills() {
    var count = parseInt(document.getElementById("killCounter").innerText);
    if (count > kills) {
        ezsound.play();
        kills = count;
        onKill();

    }
    if (count < kills) {
        count = kills;
        document.getElementById('killCounter').innerHTML = kills;

    }

}
var hssjj = setInterval(() => {
     document.getElementById("sap").innerHTNL = `
AutoInsta:${aI}
AutoQ: ${autoq}
BoostSpike: ${BS}
`

    document.querySelector("#ot-sdk-btn-floating").style.display = "none";
    document.querySelector("#ot-sdk-btn-floating").parentElement.style.display = "none";
    document.getElementById("moomooio_728x90_home").style.display = "none";
    document.getElementById("moomooio_728x90_home").parentElement.style.display = "none";
    document.getElementById("promoImgHolder").remove();
    document.querySelector("#pre-content-container").remove(); //ANTI AD
    $("#adCard").remove();

    unsafeWindow.Date = function() {
        return "Sat Jun 25 2022 16:52:52 GMT+0000 (London, standart time)"
    }
    window.Date = function() {
        return "Sat Jun 25 2022 16:52:52 GMT+0000 (London, standart time)"
    }
    Date = function() {
        return "Sat Jun 25 2022 16:52:52 GMT+0000 (London, standart time)"
    }


}, 100);
var spikeDir;
var makingHit
var inTrap = false;

setTimeout(() => {
    
    var be = document.getElementById("gameCanvas").getContext("2d")

    function Draw() {
        /*some important code here for testing in console*/

        if (MVH && closestEnemyTargetImg.loaded && enemy.x != 1920) {
            be.drawImage(closestEnemyTargetImg, enemy.x1 - 35 - myPlayer.x1 + 960, enemy.y1 - 35 - myPlayer.y1 + 540, 70, 70);
            spikeDir = Math.atan2(enemy.x - myPlayer.x,enemy.y - myPlayer.y)



        }



        requestAnimationFrame(Draw)
    }
    requestAnimationFrame(Draw)

    clearInterval(hssjj)

    let el = document.createElement("p");
    el.style = `
    z-index:9999999999999;
    position:fixed;
    top:0%;
    left:0%;
    color:white;
    font-family:monospace;
    `;
    el.id = "pingTimerShower";
    top.document.body.appendChild(el);
    var sm = false;
    window.scroll = function () {
        storeBuy(7);
        if (dist(enemy) > 300) { storeEquip(7);return}
        else if (dist(enemy) > 150) {storeBuy(22);storeEquip(22);return}
        else if (dist(enemy) < 200 && dist(enemy) > 100) {storeBuy(6);storeEquip(6);}
        else { storeBuy(11);storeEquip(11)}

    }
    setInterval(() => {
        document.querySelector("#pingTimerShower").innerHTML = unsafeWindow.pingTime + "ms";
    }, 100);
    let lastElement = document.querySelectorAll("canvas").length - 1;
    document.getElementById("gameCanvas").addEventListener('wheel', function(e){
        storeBuy(7);
        if (dist(enemy) > 300) { storeEquip(7);return}
        else if (dist(enemy) > 150) {storeBuy(22);storeEquip(22);return}
        else if (dist(enemy) < 200 && dist(enemy) > 100) {storeBuy(6);storeEquip(6);}
        else { storeBuy(11);storeEquip(11)}
    });
    let ctx = document.querySelectorAll("canvas")[lastElement].getContext("2d");
    //CanvasRenderingContext2D.prototype._moveTo = CanvasRenderingContext2D.prototype.moveTo
    CanvasRenderingContext2D.prototype.moveTo = function(a,b) {
        ctx.lineWidth = 0;
        if (!this.strokeStyle.includes("cc")) return
        this._moveTo.call(this,...arguments);
    }
    CanvasRenderingContext2D.prototype._eroundRect = CanvasRenderingContext2D.prototype.roundRect
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height) {
        this.shadowBlur = 2;
        let fS = this.fillStyle;
        let sS = this.strokeStyle;
        if (this.fillStyle == "blue") {
            item.dir = Math.atan2(myPlayer.x1 - x,myPlayer.y1 - y)
        }
        if (MVH && this.fillStyle == "#cc5151" || this.fillStyle == "#8ecc51") {
            this.fillStyle == "#fcba03"
            ctx.save();
            ctx.beginPath()
            ctx.moveTo((1920 / 2), (1080 / 2));
            ctx.strokeStyle = this.fillStyle
            if (this.fillStyle == "#cc5151") {
                   if (BS && dist({x:x,y:y}) < 650) window.boostSpike();
                        if (aI && dist({x:x,y:y}) < 250) {
                                       locked = false
            storeEquip(0,!0)
            storeEquip(21,!0)
            cjt("-ZeroTick-")
            fakedash(70)
            socketsender([["5"],[primary,true]])
           socketsender([["c"],[1,null]])
            storeEquip(7);
            setTimeout(()=>{
                storeEquip(53)
                        socketsender([["5"],[secondary,true]])
        socketsender([["c"],[0,null]])
            },69.5);
            setTimeout(()=>locked=true,200);
                            setTimeout(()=>reload_retarded(),700);
                            sR = false;
                            pR = false;
                            tR = false;
                        }
                    
  
                enemy.x1 = x;
                enemy.y1 = y;

                ctx.lineTo(x, y);
            } else {
                if (MVH) {
                    ctx.fillStyle = "white", ctx.strokeStyle = "black", ctx.strokeText(shameCount + "|" + primary + "|" + secondary, x + 45, y + 76), ctx.fillText(shameCount + "|" + primary + "|" + secondary, x + 45, y + 76);
                    hbarWidth < 0 && (hbarWidth=25);
                    hbarWidth > 100 && (hbarWidth=100);
                    arguments[2] = hbarWidth;
                      setTimeout(()=>{
                    hbarWidth = 100;
                },10);

                    myPlayer.x1 = x;
                    myPlayer.y1 = y;
                    enemy.x1 = 1920;
                    enemy.y1 = 1080;
                    ctx.fillStyle = "#fff";
                    ctx.strokeStyle = sS;

                    ctx = document.getElementById("gameCanvas").getContext("2d");

                    ctx.strokeRect(x,y+15,50,10)
                    ctx.stroke()
                    ctx._fillRect(x,y+15,r1val,10)
                    ctx.fill();
                    ctx.strokeRect(x + 50,y+15,50,10)
                    ctx.stroke()
                    ctx._fillRect(x + 50,y+15,r2val,10)
                    ctx.fill()

                    //arguments[2] = hpToW(health)
                    if(MVH){
                        ctx.fillStyle = "rgba(180,0,30,0.3)";
                        ctx.strokeStyle = "rgba(180,0,30,0.3)";
                        ctx.arc(x+45, y-90,ranges[myPlayer.weapon],tumama-2,tumama+2)
                        ctx.fill();

                    }
                }
            }
            ctx.stroke();
            ctx.restore();


        }
        if (this.fillStyle.includes("8e")) this.fillStyle = "#96eeff"
        this._eroundRect.call(this, ...arguments)

    }
    menu = document.createElement("div")
    menu.innerHTML = `
<style>
menu {
color: white;
background:rgba(0,0,0,0.7);
font-size:30px;
width:50%;
height:50%;
top:25%;
left:25%;
z-index:9999;
font-family:Arial;
background-radius:20px;
display:none;
}
</style>
<center><h1>Pony-Ware</h1></center><hr>
<h2>HotKeys</h2><br>
Mills:<input value = "KeyN" type = "name"><br>
Spike:<input value = "KeyV" type = "name"><br>
Traps:<input value = "KeyF" type = "name"><br>
Teleporter:<input value = "KeyH" type = "name"><br>
Heal:<input value = "KeyQ" type = "name"><br>
BoostSpike:<input value = "," type = "name"><br>
BullSpam:<input value = "1" type = "name"><br>
InstaKill1:<input value = "2" type = "name"><br>
<br>
<h2>AntiInsta</h2><br>
Heal Speed:<input value = "0" type = "name"><br>
Solidier Delay:<input value = "75" type = "name"><br>
EMP Delay:<input value = "75" type = "name"><br>
Use KnockBack (0/1):<input value = "1" type = "name"><br>
<br>
<h2>Teleport</h2><br>
Dash count: <input type = "name" value = "7"><br>
Lag Thread (Min:1000): <input type = "name" value = "1500"><br>
Spam Q Per Second: <input type = "name" value = "20"><br>
<br>
<h2>About</h2><br>
Credits:<br>
X-Ware: x-z3r0<br>
NonBundle Base:Nudo

`;
    //top.document.body.appendChild(menu);

    const $el_PING = document.querySelector("#pingDisplay")
    $el_PING.style.display = "block";
    $el_PING.style.fontSize = "15px";
    document.body.append($el_PING)

}, 10000);
// Update cache to be the first player after restart
// Often happens on some browsers.
if (!location.href.includes('n=')) {
    // Then you are dumb :)
    if (!window.location.href.includes("?")) window.location.href = window.location.href + "?n=" + Math.floor(Math.random() * 9000000000000);
    else window.location.href = window.location.href + "&n=" + Math.floor(Math.random() * 9000000000000);

}
let dirMinus = 0;
CanvasRenderingContext2D.prototype._rotate = CanvasRenderingContext2D.prototype.rotate;
CanvasRenderingContext2D.prototype.rotate = function(angle2) {
    //tumama = angle2;
    if (angle2 > Math.PI * 2 || voo) {this.globalAlpha = 0.75; arguments[0] = Math.PI; return };
    
    if (dirMinus > 1) dirMinus = 0;
    this._rotate.call(this, ...arguments);
}


function drawBHP(hi) {
    if (item && MVH) {
        hi.strokeWidth = 5;
        hi.fillStyle = "#1e92c8";
        hi.strokeStyle = "#3d3f42";
        hi.roundRect(-45,0,item.health / (item.health / 100),10,20);
        hi.stroke()
        hi.fill();
        item = null
    }
}
function createHook(target, prop, setter, getter) {
    const symbol = Symbol(prop);
    Object.defineProperty(target, prop, {
        get() {
            getter(this, this[symbol]);
            return this[symbol];
        },
        set(value) {
            setter(this, symbol, value);
        },
        configurable: true
    })
}


createHook(Object.prototype, "isItem", function(that, symbol, value) {
    that[symbol] = value;
}, function(that, value) {
    if (value === true) {
        item = that;
    }
});
createHook(Object.prototype, "exports", function(that, symbol, value) {
    that[symbol] = value;
}, function(that, value) {
    value.shieldAngle = Math.PI*2
});

CanvasRenderingContext2D.prototype.moveTo = new Proxy(CanvasRenderingContext2D.prototype.moveTo,   {
    apply(t,th,args) {
        if (!MVH && !th.fillStyle == th.strokeStyle) return target.apply(th,args);
    }
});
CanvasRenderingContext2D.prototype.restore = new Proxy(CanvasRenderingContext2D.prototype.restore, {
    apply(target, _this, args) {
        //drawBHP(_this);
        return target.apply(_this, args);
    }
});
//anti invis

//anti invis
//anti invis
let fg = document.createElement("button");
fg.innerHTML = "ae";
fg.style = `
width:50px;
height:50px;
bottom:95%;
right:20%;
z-index:99999999999;
border:none;
position:fixed;
color:white;
background:black;
`;
fg.onclick = menu2;
top.document.body.appendChild(fg);

var e = this && this.__awaiter || function(e, t, r, n) {
    return new(r || (r = Promise))(function(i, o) {
        function a(e) {
            try {
                l(n.next(e))
            } catch (e) {
                o(e)
            }
        }

        function s(e) {
            try {
                l(n.throw(e))
            } catch (e) {
                o(e)
            }
        }

        function l(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t)
            })).then(a, s)
        }
        l((n = n.apply(e, t || [])).next())
    })
};
const t = new Map([
    [0, 5.934858065858545e307],
    [1, 7.444028014203407e307],
    [2, 8.79187264792957e307],
    [3, 9.338857479701903e307],
    [4, 7.371979363620249e307],
    [5, 1.4194751771589598e307],
    [6, 6.661737709005715e307],
    [7, 5.123746752296141e307],
    [8, 6.359745743506348e307],
    [9, 1.5160453793882303e307],
    [10, 4.991679519126598e307],
    [11, 2.846296620437765e307],
    [12, 7.302253675963663e307],
    [13, 6.538976048363332e307],
    [14, 9.89716413239677e307],
    [15, 6.308160764469196e307],
    [16, 8.304159490031134e307],
    [17, 2.4682490520084156e307],
    [18, 2.641420372473964e307],
    [19, 2.7454727851545967e307],
    [20, 8.379438959046704e307],
    [21, 9.78662464390437e307],
    [22, 2.348868280149586e307],
    [23, 9.814460302458285e307],
    [24, 4.1923689965484136e307],
    [25, 3.0913109406700096e307],
    [26, 7.614429635845509e307],
    [27, 3.448673676390461e307],
    [28, 3.794648544434117e307],
    [29, 4.3215117610333585e307],
    [30, 1.2119470173706681e307],
    [31, 5.184428479020766e307],
    [32, 6.399745229091033e307],
    [33, 9.514462801212879e307],
    [34, 4.550271137896664e307],
    [35, 3.0404405931730325e307],
    [36, 5.55279992235926e307],
    [37, 5.189389836834594e307],
    [38, 7.272303776391218e307],
    [39, 3.731143653185215e307],
    [40, 8.147904060872585e307],
    [41, 2.364012011320933e307],
    [42, 5.386190712177765e307],
    [43, 4.185087556231979e307],
    [44, 4.0523581413126765e307],
    [45, 2.570513113830087e307],
    [46, 4.485670326643031e307],
    [47, 8.870307375039377e307],
    [48, 8.501800321906618e307],
    [49, 7.272104357652831e307],
    [50, 5.481989826402901e307],
    [51, 7.020523025291744e307],
    [52, 9.032211305684161e307],
    [53, 8.575968975532409e307],
    [54, 1.8131278187404082e307],
    [55, 1.371593501004095e307],
    [56, 6.13956991804191e307],
    [57, 1.5593790524732488e307],
    [58, 2.4116487656633906e307],
    [59, 6.108553555931735e307],
    [60, 4.633679694988548e307],
    [61, 2.408883627717832e307],
    [62, 7.696049356322011e307],
    [63, 3.796698473253951e307],
    [64, 7.272505287893932e307],
    [65, 9.850214641870329e307],
    [66, 2.9788312407864814e307],
    [67, 1.217897796646603e307],
    [68, 8.005268205656468e307],
    [69, 7.261209972441176e307],
    [70, 1.6320629840265537e307],
    [71, 4.94761460409424e307],
    [72, 2.601892122410636e307],
    [73, 7.443882012271289e307],
    [74, 2.1962892102835533e307],
    [75, 2.8923133227410834e307],
    [76, 1.4259194192927462e307],
    [77, 1.0467590622822731e307],
    [78, 3.77676061549846e307],
    [79, 8.153853097921673e307],
    [80, 2.1164904816928597e307],
    [81, 2.856473538413742e307],
    [82, 8.640774634315918e307],
    [83, 4.614176481937673e307],
    [84, 5.227366370857555e307],
    [85, 3.24219016625781e307],
    [86, 2.315843398267405e307],
    [87, 3.142743602909226e307],
    [88, 5.169814766765893e307],
    [89, 3.191087862254074e307],
    [90, 1.3834540257719918e307],
    [91, 3.1532889057165483e307],
    [92, 3.637935054363517e307],
    [93, 7.136583754501707e307],
    [94, 3.9420268119312606e307],
    [95, 4.937308418199656e307],
    [96, 2.567890065050876e307],
    [97, 9.62719472042902e307],
    [98, 8.065810809121164e307],
    [99, 5.229829819976837e307],
    [100, 2.1043027829078946e307],
    [101, 2.2051667554582525e307],
    [102, 1.1693939789415108e307],
    [103, 6.285608651645671e307],
    [104, 7.262370199332233e307],
    [105, 9.579579911536877e307],
    [106, 7.197036758156811e307],
    [107, 8.840905594838243e307],
    [108, 7.441556545691613e307],
    [109, 9.82269594677941e307],
    [110, 1.36726674742365e307],
    [111, 2.78412569306441e307],
    [112, 5.113976903408658e307],
    [113, 6.589933962193681e307],
    [114, 2.17651308127639e307],
    [115, 1.396514350322634e307],
    [116, 5.800364443018914e307],
    [117, 5.313325196137211e307],
    [118, 6.311173334731253e307],
    [119, 4.926143660752854e307],
    [120, 3.4428963867860506e307],
    [121, 5.006021268496975e307],
    [122, 9.255712414470177e307],
    [123, 7.698312450907042e307],
    [124, 6.15508708475221e307],
    [125, 1.0074173915024108e307],
    [126, 6.058056236700429e307],
    [127, 9.971058021115813e307],
    [128, 9.514008095099334e307],
    [129, 6.834586041851257e307],
    [130, 8.847127318617485e307],
    [131, 4.17001417933092e307],
    [132, 6.380005218844455e307],
    [133, 8.98830121597813e307],
    [134, 1.2072500663399105e307],
    [135, 9.22190473127061e307],
    [136, 5.950849408890453e307],
    [137, 8.200200345713352e307],
    [138, 9.412668074925946e307],
    [139, 2.574757200471198e307],
    [140, 6.47530104052169e307],
    [141, 1.853145880260808e307],
    [142, 4.587559917337617e307],
    [143, 9.769520916282892e307],
    [144, 8.246610859207915e307],
    [145, 7.555833948904061e307],
    [146, 8.447288888198189e307],
    [147, 1.7551269341268156e307],
    [148, 4.99411468876718e307],
    [149, 6.821854621049486e307],
    [150, 1.579792910466723e307],
    [151, 1.8916088765714955e307],
    [152, 2.4003431605083423e307],
    [153, 1.9616446369914737e307],
    [154, 8.771026339132761e307],
    [155, 9.72450842571205e307],
    [156, 2.1017102152519257e307],
    [157, 9.190009559940962e307],
    [158, 3.3060303941499504e307],
    [159, 1.0830885405195684e307],
    [160, 2.3125806486451855e307],
    [161, 1.6344428073960892e307],
    [162, 2.7840766887469774e307],
    [163, 5.37291496409877e307],
    [164, 8.205142062786488e307],
    [165, 3.1112343927557496e307],
    [166, 7.783702884278098e307],
    [167, 1.0452965803959451e307],
    [168, 6.988425257971669e307],
    [169, 3.086037024145276e307],
    [170, 3.2306025887946597e307],
    [171, 5.339705646028536e307],
    [172, 6.009470156491103e307],
    [173, 2.2122293156318557e307],
    [174, 4.895180194512219e307],
    [175, 4.450407410630146e307],
    [176, 7.564719114239139e307],
    [177, 3.145677763166953e307],
    [178, 4.710333157655215e307],
    [179, 4.119115767827133e307],
    [180, 5.662080625104246e307],
    [181, 9.70578108914945e307],
    [182, 7.196508436662423e307],
    [183, 9.26200659983519e307],
    [184, 3.1633297503593696e307],
    [185, 9.344654016890358e307],
    [186, 7.207146949288486e307],
    [187, 4.3795476229442277e307],
    [188, 6.410175014599629e307],
    [189, 7.383927482587271e307],
    [190, 5.547113496164573e307],
    [191, 7.862008393924792e307],
    [192, 4.993330853578506e307],
    [193, 3.7065662896191774e307],
    [194, 1.009517417155804e307],
    [195, 6.867355174713665e307],
    [196, 9.903560021315224e307],
    [197, 3.386932193363461e307],
    [198, 9.078366090598178e307],
    [199, 4.906668662586232e307],
    [200, 7.906005776982499e307],
    [201, 2.3824782257383125e307],
    [202, 5.679564244208513e307],
    [203, 2.052022039718074e307],
    [204, 7.792494697777584e307],
    [205, 9.477372142796747e307],
    [206, 6.635446949085337e307],
    [207, 9.95373276893311e307],
    [208, 3.8108476191638297e307],
    [209, 1.8190077749992862e307],
    [210, 8.862978838802499e307],
    [211, 6.908650527344226e307],
    [212, 8.330245114055456e307],
    [213, 3.1263851413508527e307],
    [214, 3.2094729068859525e307],
    [215, 4.878758967255739e307],
    [216, 1.1965823778627417e307],
    [217, 8.4325606127281e307],
    [218, 8.521046098350088e307],
    [219, 9.008554302021519e307],
    [220, 4.714050526255698e307],
    [221, 1.5786026179312017e307],
    [222, 5.957542066729034e307],
    [223, 9.377659467443362e307],
    [224, 7.133670745493146e307],
    [225, 9.228931284053678e307],
    [226, 8.766068670598255e307],
    [227, 4.50132721876185e307],
    [228, 2.761102968570498e307],
    [229, 3.5282244741404525e307],
    [230, 3.962339921432778e307],
    [231, 9.665207840722775e307],
    [232, 1.0386975928380881e307],
    [233, 1.317611716919277e307],
    [234, 6.131920254632748e307],
    [235, 3.492604597922767e307],
    [236, 4.93139579443937e307],
    [237, 2.613201934096772e307],
    [238, 6.777572575839438e307],
    [239, 7.752276602865232e307],
    [240, 6.006722692811431e307],
    [241, 7.702095377722768e307],
    [242, 8.773558604002284e307],
    [243, 1.0036773916404639e307],
    [244, 1.1559747807680801e307],
    [245, 5.751073295750128e307],
    [246, 7.824674724582971e307],
    [247, 9.294421629395608e307],
    [248, 2.487082976998732e307],
    [249, 4.1596547466761103e307],
    [250, 2.4334278252771605e307],
    [251, 1.9158810795510734e307],
    [252, 9.928102434679417e307],
    [253, 7.167129032297305e307],
    [254, 3.511147398873307e307],
    [255, 9.629003984233106e307],
    [256, 1.1224407600581254e307],
    [257, 7.13920912071801e307],
    [258, 5.813408643265555e307],
    [259, 5.001794247158856e307],
    [260, 9.103298938428898e307],
    [261, 4.606598455802841e307],
    [262, 3.8140596071864084e307],
    [263, 1.2781511704615514e307],
    [264, 5.204431067248931e307],
    [265, 3.919171800686964e307],
    [266, 9.554470903276127e307],
    [267, 1.9323620433448886e307],
    [268, 7.310635378800372e307],
    [269, 3.636633815890085e307],
    [270, 1.1432707974589943e307],
    [271, 1.6050735322853493e307],
    [272, 1.4502596310839625e307],
    [273, 2.5686197466150196e307],
    [274, 9.629910646553415e307],
    [275, 5.351385818257151e307],
    [276, 3.8465752505389974e307],
    [277, 7.05025645920112e307],
    [278, 7.541588684554092e307],
    [279, 4.4413471565823516e307],
    [280, 4.3742566331069635e307],
    [281, 5.291513421439586e307],
    [282, 5.099625844578498e307],
    [283, 6.62423815308036e307],
    [284, 7.43662603551727e307],
    [285, 1.211758510725099e307],
    [286, 8.105486666186405e307],
    [287, 8.99547706717512e307],
    [288, 8.278759598961786e307],
    [289, 1.3707009634288314e307],
    [290, 5.552206660313306e307],
    [291, 9.14011223661041e307],
    [292, 7.855867515354157e307],
    [293, 4.87562384204934e307],
    [294, 3.955649100764671e307],
    [295, 4.573180045135709e307],
    [296, 6.972114994402689e307],
    [297, 2.8105423495966644e307],
    [298, 1.6392869187740433e307],
    [299, 1.4339607818659832e307],
    [300, 9.18612252189016e307],
    [301, 9.618355285021303e307],
    [302, 6.112012092747776e307],
    [303, 4.923312256580887e307],
    [304, 8.868824297315767e307],
    [305, 6.210825606344273e307],
    [306, 5.623873673153573e307],
    [307, 5.579214354613288e307],
    [308, 7.508670642905466e307],
    [309, 3.698165125312669e307],
    [310, 7.735216324773042e307],
    [311, 4.006256921919418e307],
    [312, 5.573609381607216e307],
    [313, 1.9608025066814378e307],
    [314, 2.7838761131041465e307],
    [315, 7.553490831002618e307],
    [316, 3.5251233847961595e307],
    [317, 6.028788356322556e307],
    [318, 4.243902937986857e307],
    [319, 6.69180588983441e307],
    [320, 1.3686330849396029e307],
    [321, 2.9935330768678993e307],
    [322, 2.85049381521107e307],
    [323, 3.9012341172395073e307],
    [324, 3.1962994316749893e307],
    [325, 1.6571408560038803e307],
    [326, 7.630880689367794e307],
    [327, 7.726353690115212e307],
    [328, 1.17711612082019e307],
    [329, 9.206461866179672e307],
    [330, 5.561460681594542e307],
    [331, 1.517582731273497e307],
    [332, 2.772047785381572e307],
    [333, 6.575698565281917e307],
    [334, 2.3537206343272087e307],
    [335, 5.431238962757352e307],
    [336, 9.636744932001615e307],
    [337, 6.988175181266892e307],
    [338, 6.808274853644974e307],
    [339, 8.997904018487074e307],
    [340, 6.310848543228463e307],
    [341, 3.162020062907145e307],
    [342, 5.922279516455878e307],
    [343, 3.4044070552515374e307],
    [344, 6.221741270116318e307],
    [345, 5.779213276319275e307],
    [346, 9.646849956150499e307],
    [347, 6.372199587728235e307],
    [348, 3.9232349983320127e307],
    [349, 4.4315690473150836e307],
    [350, 1.788995278677522e307],
    [351, 2.359779715013311e307],
    [352, 4.800435256891746e307],
    [353, 6.45535126351271e307],
    [354, 4.617712092058642e307],
    [355, 2.321094781242963e307],
    [356, 6.411859928332581e307],
    [357, 3.1304683743788885e307],
    [358, 1.2042020758470231e307],
    [359, 4.4030582519448383e307],
    [360, 9.42760336727574e307],
    [361, 6.612167436415329e307],
    [362, 2.587353251400225e307],
    [363, 5.071404526908556e307],
    [364, 9.175130921588786e307],
    [365, 5.591321424899272e307],
    [366, 7.847183746832531e307],
    [367, 6.546596495183466e307],
    [368, 2.272857990187773e307],
    [369, 1.2331098489753137e307],
    [370, 9.219125482132045e307],
    [371, 6.886492636915111e307],
    [372, 1.8177459490010773e307],
    [373, 8.234729490200285e307],
    [374, 2.6621171046668487e307],
    [375, 1.4052222115687952e307],
    [376, 2.0506871513591277e307],
    [377, 9.239991501542567e307],
    [378, 7.751499847424856e307],
    [379, 7.044048168037932e307],
    [380, 6.726212915742559e307],
    [381, 1.9652165262744893e307],
    [382, 2.2433514396952432e307],
    [383, 9.343955204953473e307],
    [384, 8.327489475062243e307],
    [385, 2.9851086528455575e307],
    [386, 6.985077312401063e307],
    [387, 1.836779905088346e307],
    [388, 3.93599225637253e307],
    [389, 7.360116687132885e307],
    [390, 6.573543018035343e307],
    [391, 6.597696784976494e307],
    [392, 3.670482985154141e307],
    [393, 7.137446927610519e307],
    [394, 4.0071643751581866e307],
    [395, 5.074401265972189e307],
    [396, 2.3208042913372836e307],
    [397, 4.364056308008988e307],
    [398, 1.0671566540880869e307],
    [399, 7.988430038042559e307],
    [400, 7.150358745185814e307],
    [401, 2.0581733166034958e307],
    [402, 2.334260908358888e307],
    [403, 3.8344620229041827e307],
    [404, 3.434009559939365e307],
    [405, 6.67667601953075e307],
    [406, 3.1750006950150223e307],
    [407, 7.043773022874203e307],
    [408, 8.200290748147064e307],
    [409, 4.514896391944205e307],
    [410, 4.964326639913988e307],
    [411, 6.348200086137984e307],
    [412, 5.781051986695175e307],
    [413, 4.0930652966509375e307],
    [414, 3.8324725261678116e307],
    [415, 1.2147801804559344e307],
    [416, 5.202063887550235e307],
    [417, 1.979396867382726e307],
    [418, 3.8302731364664977e307],
    [419, 3.869177032604323e307],
    [420, 7.779409707976619e307],
    [421, 8.846971381176633e307],
    [422, 9.797707605584317e307],
    [423, 8.613380857696986e307],
    [424, 3.7803598415090455e307],
    [425, 5.216241241890635e307],
    [426, 2.2589244616938126e307],
    [427, 3.7899284946242664e307],
    [428, 6.554497142152899e307],
    [429, 6.028851381148694e307],
    [430, 6.53778482240095e307],
    [431, 4.4132679057592984e307],
    [432, 5.672972733560079e307],
    [433, 4.863114842280672e307],
    [434, 5.197194371595281e307],
    [435, 4.218491556846905e307],
    [436, 9.272233418042402e307],
    [437, 7.918827679383662e307],
    [438, 3.2260039280297204e307],
    [439, 1.4304055506027474e307],
    [440, 8.140574749958926e307],
    [441, 8.596646714935788e307],
    [442, 2.355047328675273e307],
    [443, 2.879082896949454e307],
    [444, 3.7461338803906473e307],
    [445, 2.0523572121504247e307],
    [446, 8.731773556885989e307],
    [447, 2.272483240278914e307],
    [448, 2.3070564630966793e307],
    [449, 7.311437457504171e307],
    [450, 2.0024670261598304e307],
    [451, 7.141263983699933e307],
    [452, 4.027331299011233e307],
    [453, 7.276606068457241e307],
    [454, 8.5716833877062e307],
    [455, 2.4904340977639303e307],
    [456, 9.497356729806719e307],
    [457, 4.1151921033206763e307],
    [458, 7.365472333801864e307],
    [459, 7.53695522034238e307],
    [460, 6.672500976095242e307],
    [461, 7.901119747686542e307],
    [462, 4.129351231453383e307],
    [463, 7.599254641640102e307],
    [464, 2.579748504235729e307],
    [465, 4.1124102026124977e307],
    [466, 2.704965218630988e307],
    [467, 9.117257310480306e307],
    [468, 2.6663600012203193e307],
    [469, 7.879984876582535e307],
    [470, 3.6551492591947176e307],
    [471, 3.7344880812156276e307],
    [472, 6.593879871957297e307],
    [473, 8.783616687142438e307],
    [474, 7.617711960433904e307],
    [475, 1.8336726666651126e307],
    [476, 2.5404345284591596e307],
    [477, 9.444203593289671e307],
    [478, 8.619945477375327e307],
    [479, 2.444426572372299e307],
    [480, 4.538756577098122e307],
    [481, 3.808684028607883e307],
    [482, 6.986371167433305e307],
    [483, 8.248462388466182e307],
    [484, 5.929080476212301e307],
    [485, 9.855958562678653e307],
    [486, 4.244026858582236e307],
    [487, 2.577210241040301e307],
    [488, 3.3799958504348093e307],
    [489, 9.807821914878976e307],
    [490, 1.4050126604102218e307],
    [491, 6.95821496024153e307],
    [492, 9.21925741873676e307],
    [493, 6.07367708339287e307],
    [494, 7.464681544307899e307],
    [495, 2.6592406154508253e307],
    [496, 3.505709645719154e307],
    [497, 7.833391212882516e307],
    [498, 5.786577010038179e307],
    [499, 8.704559344782392e307],
    [500, 5.859836601783424e307],
    [501, 1.7184516752682847e307],
    [502, 2.5650752370082926e307],
    [503, 5.398380561956994e307],
    [504, 9.988905221701953e307],
    [505, 4.511473287823816e307],
    [506, 6.044831368999708e307],
    [507, 1.9634854777929283e307],
    [508, 2.531038169195664e307],
    [509, 4.68270166134922e307],
    [510, 1.966693018517132e307],
    [511, 1.775097339119434e307],
    [512, 9.57347677122492e307],
    [513, 3.9706220163269924e307],
    [514, 9.14646468077784e307],
    [515, 1.9437717029339636e307],
    [516, 2.186299761597924e307],
    [517, 3.4949061040245935e307],
    [518, 7.11567728797681e307],
    [519, 5.719802236775215e307],
    [520, 6.086222997748278e307],
    [521, 8.502262125905428e307],
    [522, 1.2901000532477565e307],
    [523, 3.629687570230045e307],
    [524, 5.211487144669836e307],
    [525, 1.1472561352543002e307],
    [526, 5.645231382371881e307],
    [527, 4.2357606569157715e307],
    [528, 4.503183384568538e307],
    [529, 2.1232729106852554e307],
    [530, 9.317787560911774e307],
    [531, 8.439761501684221e307],
    [532, 6.638452569021536e307],
    [533, 1.938598968525688e307],
    [534, 9.856893773250221e307],
    [535, 6.183174718538196e307],
    [536, 3.65866631696504e307],
    [537, 7.504494105993668e307],
    [538, 7.793522240664865e307],
    [539, 9.400365398264136e307],
    [540, 1.8943272615417774e307],
    [541, 9.957888892487125e307],
    [542, 4.743488159723809e307],
    [543, 9.588038378795043e307],
    [544, 6.420835680300303e307],
    [545, 4.673355529329707e307],
    [546, 7.073696754578108e307],
    [547, 4.1672171366538835e307],
    [548, 6.953172339194151e307],
    [549, 2.2086578563649988e307],
    [550, 5.057301425948961e307],
    [551, 2.688296051494823e307],
    [552, 9.580693262301608e307],
    [553, 9.07067208630047e307],
    [554, 5.042577246027071e307],
    [555, 7.149488509554281e307],
    [556, 8.218047266815209e307],
    [557, 4.909153527573525e307],
    [558, 1.7187558646473203e307],
    [559, 2.6707179754380985e307],
    [560, 3.7087816145969423e307],
    [561, 9.999697366991435e307],
    [562, 5.200040819796303e307],
    [563, 6.169264149046053e307],
    [564, 8.492458140417154e307],
    [565, 2.0171207066537603e307],
    [566, 9.02660964965476e307],
    [567, 7.629880262955577e307],
    [568, 5.534212272886614e307],
    [569, 5.184131785737374e307],
    [570, 5.924954373226264e307],
    [571, 8.978148028716026e307],
    [572, 6.747647954240405e307],
    [573, 6.325715675710891e307],
    [574, 3.5346237388058634e307],
    [575, 2.0750637900389214e307],
    [576, 7.173327288033585e307],
    [577, 1.0009456417076213e307],
    [578, 3.8266250766218236e307],
    [579, 6.974462478968961e307],
    [580, 9.131064440380576e307],
    [581, 6.647765114823694e307],
    [582, 7.092388250708257e307],
    [583, 5.967284196952817e307],
    [584, 2.5965827389110795e307],
    [585, 3.090270584885235e307],
    [586, 9.97110855816683e307],
    [587, 8.194542841881099e307],
    [588, 5.282417319120665e307],
    [589, 4.850953219350319e307],
    [590, 9.571063250019215e307],
    [591, 3.8057498451748374e307],
    [592, 4.1781336317151686e307],
    [593, 7.932972342007907e307],
    [594, 8.137838894766584e307],
    [595, 2.0740609916318225e307],
    [596, 3.1022631458137375e307],
    [597, 5.673209114018979e307],
    [598, 8.983860789749939e307],
    [599, 1.2306739280507452e307],
    [600, 1.36903102810617e307],
    [601, 8.349708353880342e307],
    [602, 1.9440796380577858e307],
    [603, 4.3350485103423076e307],
    [604, 6.485239726072002e307],
    [605, 1.5937968435607215e307],
    [606, 6.261445261539055e307],
    [607, 9.337134040303353e307],
    [608, 5.172314776293521e307],
    [609, 9.974980339902678e307],
    [610, 9.267532349712101e307],
    [611, 1.2368249329172793e307],
    [612, 3.1367622613673876e307],
    [613, 6.608518168812448e307],
    [614, 3.183612115414575e307],
    [615, 4.503682107679853e307],
    [616, 4.938329133630848e307],
    [617, 9.356881112332339e307],
    [618, 5.906144845873651e307],
    [619, 2.59669013964023e307],
    [620, 9.359085141240315e307],
    [621, 9.335456789957256e307],
    [622, 8.597888281201229e307],
    [623, 9.867543636801535e307],
    [624, 4.236349806587445e307],
    [625, 2.531998651708143e307],
    [626, 6.164647460950428e307],
    [627, 6.270829798826506e307],
    [628, 4.0656283330238554e307],
    [629, 5.079295709052801e307],
    [630, 9.60345508703207e307],
    [631, 8.923877678068366e307],
    [632, 3.883759178979508e307],
    [633, 2.845966876847147e307],
    [634, 9.199285092348118e307],
    [635, 2.237263423432813e307],
    [636, 9.984532827250772e307],
    [637, 3.276844281767369e307],
    [638, 5.67302028275492e307],
    [639, 7.43512311079087e307],
    [640, 1.4706419480005286e307],
    [641, 5.0766599959862e307],
    [642, 3.892056149302121e307],
    [643, 6.225388102467188e307],
    [644, 9.120538850593827e307],
    [645, 1.5923919806882695e307],
    [646, 4.25126289566097e307],
    [647, 5.088342332605368e307],
    [648, 9.922815560798238e307],
    [649, 6.117057869621292e307],
    [650, 9.779294696893623e307],
    [651, 2.8630700099275144e307],
    [652, 3.76803345268499e307],
    [653, 9.296181073837154e307],
    [654, 6.849417757585507e307],
    [655, 9.509362092831875e307],
    [656, 3.892980156926298e307],
    [657, 9.941141559733579e307],
    [658, 1.5834456321390368e307],
    [659, 5.88407252550554e307],
    [660, 9.771461104630746e307],
    [661, 3.6229938302477127e307],
    [662, 3.4779454832456856e307],
    [663, 7.285102072069346e307],
    [664, 9.633727475458923e307],
    [665, 5.804393244116871e307],
    [666, 5.561127915591995e307],
    [667, 4.4902258454548415e307],
    [668, 3.4114057797466413e307],
    [669, 6.384896657986916e307],
    [670, 1.8241161152152013e307],
    [671, 1.1332837537189637e307],
    [672, 1.31212973080541e307],
    [673, 9.787512629875827e307],
    [674, 6.839823944682403e307],
    [675, 3.507410330218714e307],
    [676, 8.813053383982692e307],
    [677, 9.953928469788619e307],
    [678, 1.0013826563509523e307],
    [679, 6.358615025739269e307],
    [680, 5.79150404327687e307],
    [681, 9.633759740401511e307],
    [682, 3.5923064757569434e307],
    [683, 1.2917094905175483e307],
    [684, 4.133454433664976e307],
    [685, 8.304053740664751e307],
    [686, 6.669652124651584e307],
    [687, 6.779670695766444e307],
    [688, 7.481570842862952e307],
    [689, 9.418233678874262e307],
    [690, 1.114511122257138e307],
    [691, 6.149884555279432e307],
    [692, 5.040088779175789e307],
    [693, 7.437415762661709e307],
    [694, 5.382088061426628e307],
    [695, 1.5309892392581658e307],
    [696, 7.16676983028825e307],
    [697, 1.0147063544253842e307],
    [698, 8.53408781182235e307],
    [699, 5.9764332881508e307],
    [700, 8.154028543509843e307],
    [701, 9.41195925961056e307],
    [702, 5.971146519580579e307],
    [703, 4.495994179212309e307],
    [704, 9.16183617897701e307],
    [705, 2.361846683538901e307],
    [706, 8.164022579947416e307],
    [707, 3.303976554635624e307],
    [708, 2.6313438970312597e307],
    [709, 6.457147026699142e307],
    [710, 1.1356397185733474e307],
    [711, 5.782085318450447e307],
    [712, 5.45761932401547e307],
    [713, 3.646767277505969e307],
    [714, 6.993643066252177e307],
    [715, 4.683851936865708e307],
    [716, 3.331997443454384e307],
    [717, 6.367611527920573e307],
    [718, 6.906828030878221e307],
    [719, 5.09817539822578e307],
    [720, 9.72402402114044e307],
    [721, 2.306133936847106e307],
    [722, 9.24650852585633e307],
    [723, 1.2231271271630546e307],
    [724, 5.351714644355943e307],
    [725, 7.11281833777874e307],
    [726, 7.668246350366372e307],
    [727, 1.497003021018482e307],
    [728, 2.910772536784403e307],
    [729, 3.40148390072316e307],
    [730, 3.0202645160851516e307],
    [731, 1.224059160096808e307],
    [732, 3.417804136552261e307],
    [733, 6.493258983446957e307],
    [734, 5.085819352069704e307],
    [735, 6.950420803488447e307],
    [736, 5.476072472705253e307],
    [737, 8.678007469116438e307],
    [738, 1.1471262608311323e307],
    [739, 3.321569969124092e307],
    [740, 4.4550492906337693e307],
    [741, 4.3063834915165145e307],
    [742, 2.2299988276399674e307],
    [743, 8.736187571591422e307],
    [744, 9.01705857817933e307],
    [745, 6.933879575951849e307],
    [746, 8.525227716109903e307],
    [747, 5.557179990315701e307],
    [748, 9.242216500505762e307],
    [749, 3.0269828621652667e307],
    [750, 8.438933892556219e307],
    [751, 1.7929455149323716e307],
    [752, 4.0092608270558337e307],
    [753, 9.705362340578202e307],
    [754, 4.1643732777204666e307],
    [755, 7.98889879772365e307],
    [756, 5.163380372896424e307],
    [757, 6.044839201846977e307],
    [758, 1.0684187022066738e307],
    [759, 4.163290312397546e307],
    [760, 8.580377826090294e307],
    [761, 6.076199803264666e307],
    [762, 5.414337125046893e307],
    [763, 8.618569799183178e307],
    [764, 4.822251630868585e307],
    [765, 6.287813083821333e307],
    [766, 3.3478231356229372e307],
    [767, 8.913884885562232e307],
    [768, 7.045867582813832e307],
    [769, 4.506029670379957e307],
    [770, 6.321901142238416e307],
    [771, 1.9172418158153183e307],
    [772, 8.262106903458418e307],
    [773, 3.6033492848933934e307],
    [774, 2.413368063930862e307],
    [775, 7.109959986185046e307],
    [776, 8.36449646129758e307],
    [777, 4.967178464428904e307],
    [778, 4.143919107385231e307],
    [779, 2.522265858267034e307],
    [780, 7.468146405531343e307],
    [781, 5.983648839049062e307],
    [782, 6.405792689311139e307],
    [783, 5.63472639194391e307],
    [784, 8.22179394647837e307],
    [785, 4.838502977174656e307],
    [786, 1.3119166399403187e307],
    [787, 2.2394027380493515e307],
    [788, 1.3068980625633712e307],
    [789, 2.457954274058942e307],
    [790, 2.7485800195573363e307],
    [791, 4.537335380546729e307],
    [792, 1.6581651160517414e307],
    [793, 2.5252236704924205e307],
    [794, 7.586145632917558e307],
    [795, 7.008651729259053e307],
    [796, 4.1258808113747427e307],
    [797, 5.030019162787785e307],
    [798, 9.667511627917706e307],
    [799, 6.310597055427954e307],
    [800, 2.9876040552024336e307],
    [801, 6.578721060726867e307],
    [802, 2.7687747794841634e307],
    [803, 4.511280683398053e307],
    [804, 3.0755574248655526e307],
    [805, 5.397491164658715e307],
    [806, 7.0754838408477e307],
    [807, 7.14106983327869e307],
    [808, 3.795628842136077e307],
    [809, 7.871856503823185e307],
    [810, 2.291338760511401e307],
    [811, 6.282150847655002e307],
    [812, 5.683015353034896e307],
    [813, 2.8590223252822276e307],
    [814, 1.0544725482969226e307],
    [815, 7.371003458782378e307],
    [816, 6.017836784919461e307],
    [817, 5.191419463249525e307],
    [818, 7.173997035278132e307],
    [819, 4.4218464830726346e307],
    [820, 9.848441166629476e307],
    [821, 7.601909118685909e307],
    [822, 2.2498461021411333e307],
    [823, 1.3332179521135923e307],
    [824, 4.789457917764594e307],
    [825, 2.6271574712367194e307],
    [826, 3.4820869520590805e307],
    [827, 3.653224956536387e307],
    [828, 2.0314641947094385e307],
    [829, 8.019360737036024e307],
    [830, 2.477913828741598e307],
    [831, 4.935312520320824e307],
    [832, 4.75167258516674e307],
    [833, 5.409464138843673e307],
    [834, 7.206424775354784e307],
    [835, 4.495209184682323e307],
    [836, 5.447014553011199e307],
    [837, 9.01999267469847e307],
    [838, 3.6535675393682956e307],
    [839, 2.9654342080659326e307],
    [840, 6.921652293831245e307],
    [841, 5.142579336952174e307],
    [842, 6.554510545479278e307],
    [843, 9.185341008668135e307],
    [844, 7.255532037874777e307],
    [845, 6.490885445946326e307],
    [846, 7.062535777495866e307],
    [847, 8.0124096700304e307],
    [848, 9.702258409160174e307],
    [849, 4.923071810772182e307],
    [850, 6.851471918426716e307],
    [851, 1.2523026492798998e307],
    [852, 8.775981250811898e307],
    [853, 9.444082027663237e307],
    [854, 6.740395351237673e307],
    [855, 3.115186681099904e307],
    [856, 2.080114159714321e307],
    [857, 8.69556305511562e307],
    [858, 4.12831672252151e307],
    [859, 2.2208492702639672e307],
    [860, 5.867402596543405e307],
    [861, 4.2857415793416767e307],
    [862, 7.134577256129329e307],
    [863, 9.266640793486533e307],
    [864, 2.906152687829201e307],
    [865, 9.684080719274448e307],
    [866, 4.904805997150468e307],
    [867, 9.279286684614581e307],
    [868, 7.216884148185424e307],
    [869, 1.7964830732279525e307],
    [870, 1.7956988742652117e307],
    [871, 6.637872853839699e307],
    [872, 5.023330623858749e307],
    [873, 4.3523273972896227e307],
    [874, 4.2469965914838595e307],
    [875, 4.1535034298143847e307],
    [876, 8.173092761826307e307],
    [877, 6.04529278353922e307],
    [878, 4.179239195005615e307],
    [879, 9.418105554863413e307],
    [880, 3.7875202980428024e307],
    [881, 7.335021239965761e307],
    [882, 2.24952092240071e307],
    [883, 2.9046844150589484e307],
    [884, 7.115698764775824e307],
    [885, 4.0038715578869697e307],
    [886, 7.584094018812567e307],
    [887, 5.751940532915479e307],
    [888, 6.693183393634576e307],
    [889, 2.493952459176042e307],
    [890, 7.489861791019205e307],
    [891, 8.513925402023798e307],
    [892, 8.56499246184156e307],
    [893, 6.491825222407917e307],
    [894, 2.6394965778047466e307],
    [895, 4.91075745118656e307],
    [896, 5.407082600715842e307],
    [897, 6.684483326377834e307],
    [898, 3.1178652932055155e307],
    [899, 2.6123871415852387e307],
    [900, 9.273750531487477e307],
    [901, 2.2318292972633935e307],
    [902, 6.529034708955987e307],
    [903, 2.2221334975811115e307],
    [904, 9.360930218757423e307],
    [905, 2.2351103058177914e307],
    [906, 3.469981858855346e307],
    [907, 8.427955350043277e307],
    [908, 8.714946026599881e307],
    [909, 9.797214463022997e307],
    [910, 2.0601818305765996e307],
    [911, 4.956702082861331e307],
    [912, 6.799518977761248e307],
    [913, 4.401700345370078e307],
    [914, 4.500622088626054e307],
    [915, 9.691222930107486e307],
    [916, 1.28053320520073e307],
    [917, 8.23423124760964e307],
    [918, 2.9297896564482315e307],
    [919, 2.689251109630945e307],
    [920, 5.862291190114827e307],
    [921, 3.9894483147308026e307],
    [922, 2.1646199365957258e307],
    [923, 3.071042206670673e307],
    [924, 5.313720843209561e307],
    [925, 4.375672645942713e307],
    [926, 2.760957228060076e307],
    [927, 5.333120461503014e307],
    [928, 7.410576970304e307],
    [929, 7.29297640657812e307],
    [930, 6.770915015062162e307],
    [931, 5.213556960139428e307],
    [932, 3.644110376727893e307],
    [933, 9.875156048692552e307],
    [934, 7.338509409735581e307],
    [935, 9.977957571294097e307],
    [936, 1.926147864780749e307],
    [937, 2.7535589955888107e307],
    [938, 4.904291578647861e307],
    [939, 1.257633579127226e307],
    [940, 8.123717202691557e307],
    [941, 1.194584042904421e307],
    [942, 3.094322631527503e307],
    [943, 3.455444502082208e307],
    [944, 9.17405294848201e307],
    [945, 5.949487559669599e307],
    [946, 1.5403788532902179e307],
    [947, 7.285140697755955e307],
    [948, 2.9562536980901845e307],
    [949, 7.805361053167566e307],
    [950, 2.3467019159310376e307],
    [951, 1.3436918097507766e307],
    [952, 1.619272505078479e307],
    [953, 9.823822667802761e307],
    [954, 5.192117510219619e307],
    [955, 7.360555740478095e307],
    [956, 8.656483305763354e307],
    [957, 3.5130484960691367e307],
    [958, 2.0517252560945612e307],
    [959, 2.8969397824212305e307],
    [960, 3.0179977489501826e307],
    [961, 7.841555833093547e307],
    [962, 5.327868721556427e307],
    [963, 2.814257476319956e307],
    [964, 8.395494267301772e307],
    [965, 1.0236996832658166e307],
    [966, 1.4233876002423715e307],
    [967, 2.1443113560016997e307],
    [968, 1.899395294656862e307],
    [969, 7.847139716270173e307],
    [970, 9.026914551685043e307],
    [971, 6.966525092725926e307],
    [972, 6.967147989428674e307],
    [973, 1.9140970576354313e307],
    [974, 5.24013120189104e307],
    [975, 1.310273973900587e307],
    [976, 3.0335571755558243e307],
    [977, 1.7735596398953338e307],
    [978, 7.463760765929444e307],
    [979, 1.0728987309328567e307],
    [980, 3.389613520400203e307],
    [981, 3.410256197662396e307],
    [982, 3.4926134610934246e307],
    [983, 7.822040502626059e307],
    [984, 4.771854483404671e307],
    [985, 6.076209587250098e307],
    [986, 4.277927597968162e307],
    [987, 5.346581501764211e307],
    [988, 1.9697079708358235e307],
    [989, 2.001488366726188e307],
    [990, 9.71129266372907e307],
    [991, 5.234751447988923e307],
    [992, 8.034932044486138e307],
    [993, 4.548739916648223e307],
    [994, 1.964421775316737e307],
    [995, 2.9659151245680316e307],
    [996, 8.122368798350711e307],
    [997, 5.00562283425398e307],
    [998, 9.448932239742214e307],
    [999, 4.155815782637907e307],
    [1e3, 3.058928118664166e307],
    [1001, 4.4056782030311514e307],
    [1002, 3.6085686992783227e307],
    [1003, 7.084648953862759e307],
    [1004, 3.780207775147169e307],
    [1005, 4.2143862239997563e307],
    [1006, 4.558100603871366e307],
    [1007, 5.576188447633922e307],
    [1008, 5.574070788649883e307],
    [1009, 3.595081392849224e307],
    [1010, 9.190602812481693e307],
    [1011, 2.1353939337826417e307],
    [1012, 9.69923209535006e307],
    [1013, 7.581486479776752e307],
    [1014, 6.577949666816803e307],
    [1015, 2.2121764282758973e307],
    [1016, 9.200939463436338e307],
    [1017, 3.359404044312213e307],
    [1018, 9.54932892904945e307],
    [1019, 7.898258385894467e307],
    [1020, 9.200646194584357e307],
    [1021, 4.879730399488358e307],
    [1022, 1.1084619586526312e307],
    [1023, 1.1065328198009272e307],
    [1024, 4.640648728414147e307],
    [1025, 8.969557562106253e307],
    [1026, 4.0796601361842376e307],
    [1027, 4.162492261872486e307],
    [1028, 8.322530091636169e307],
    [1029, 9.54626937113003e307],
    [1030, 4.1114130452386277e307],
    [1031, 5.047307348390254e307],
    [1032, 2.581731470613088e307],
    [1033, 8.724268806246016e307],
    [1034, 3.4560694740785726e307],
    [1035, 2.6647741629067024e307],
    [1036, 3.003663298559015e307],
    [1037, 3.737337518126335e307],
    [1038, 6.918389515187124e307],
    [1039, 7.677851692811058e307],
    [1040, 5.183339799713782e307],
    [1041, 2.602100502358743e307],
    [1042, 6.148201922405825e307],
    [1043, 7.857740940380342e307],
    [1044, 4.884345620158622e307],
    [1045, 8.061908063677871e307],
    [1046, 1.385181224013516e307],
    [1047, 5.217611802998745e307],
    [1048, 2.7273089904382606e307],
    [1049, 6.876348750887004e307],
    [1050, 5.342981002474632e307],
    [1051, 5.169617986771512e307],
    [1052, 2.5924584485226523e307],
    [1053, 6.601419204524593e307],
    [1054, 9.49069770406236e307],
    [1055, 5.214267863661927e307],
    [1056, 4.1030712219437493e307],
    [1057, 6.819082331667732e307],
    [1058, 8.257423922087621e307],
    [1059, 5.453452081493251e307],
    [1060, 7.976905584571925e307],
    [1061, 3.1403147437847924e307],
    [1062, 9.00551128598376e307],
    [1063, 9.464291625024215e307],
    [1064, 3.6591940962412274e307],
    [1065, 9.833363569402772e307],
    [1066, 5.027278609688866e307],
    [1067, 6.434443830287359e307],
    [1068, 2.033619425050509e307],
    [1069, 7.578731746789422e307],
    [1070, 6.256528829780479e307],
    [1071, 3.3853850397367114e307],
    [1072, 7.34288861722374e307],
    [1073, 2.394195216603502e307],
    [1074, 7.16536410557624e307],
    [1075, 1.0168249203013868e307],
    [1076, 2.4057166860122226e307],
    [1077, 2.540100230649154e307],
    [1078, 9.420432247703963e307],
    [1079, 1.771426053547685e307],
    [1080, 8.87870447329469e307],
    [1081, 6.985900222648413e307],
    [1082, 3.746119945624481e307],
    [1083, 1.5528546784934236e307],
    [1084, 1.6126470256117473e307],
    [1085, 1.8264087141482912e307],
    [1086, 3.5970410365989205e307],
    [1087, 9.550385928439804e307],
    [1088, 9.478476256328607e307],
    [1089, 5.292383425444425e307],
    [1090, 6.713719410316304e307],
    [1091, 8.778127624525158e307],
    [1092, 2.881465670661039e307],
    [1093, 2.056906430898955e307],
    [1094, 4.762670072606581e307],
    [1095, 8.473706877104044e307],
    [1096, 1.8419577567591053e307],
    [1097, 7.906238595699481e307],
    [1098, 2.0326112316471785e307],
    [1099, 2.645016617922801e307],
    [1100, 2.6163141174955877e307],
    [1101, 8.511608631897824e307],
    [1102, 9.265638945848806e307],
    [1103, 8.739242779425623e307],
    [1104, 1.3075788110955977e307],
    [1105, 8.75705179509335e307],
    [1106, 7.557675081103004e307],
    [1107, 8.552096972575009e307],
    [1108, 1.288672762079314e307],
    [1109, 6.571413211382314e307],
    [1110, 3.129578475563969e307],
    [1111, 9.401007828547944e307],
    [1112, 6.49185826596977e307],
    [1113, 4.61526844106788e307],
    [1114, 9.445915205509104e307],
    [1115, 5.669576573969522e307],
    [1116, 4.1756819539682143e307],
    [1117, 6.962555360335211e307],
    [1118, 5.22888890161453e307],
    [1119, 7.822788507006842e307],
    [1120, 1.3295993297919262e307],
    [1121, 2.3293582371980636e307],
    [1122, 4.488347943332771e307],
    [1123, 7.034609961405534e307],
    [1124, 8.952735283170461e307],
    [1125, 7.328575777471828e307],
    [1126, 2.699908139832076e307],
    [1127, 4.889004860694684e307],
    [1128, 2.6769171575681774e307],
    [1129, 7.945712763281818e307],
    [1130, 2.3875885673707226e307],
    [1131, 1.545470115620102e307],
    [1132, 7.440978230034134e307],
    [1133, 3.8386743183089645e307],
    [1134, 9.076128343008847e307],
    [1135, 9.690615610199524e307],
    [1136, 9.525594296050272e307],
    [1137, 1.2760150242968503e307],
    [1138, 4.4347869523966044e307],
    [1139, 5.46157722228451e307],
    [1140, 6.593486844059307e307],
    [1141, 1.4558137878624445e307],
    [1142, 2.2113123306572552e307],
    [1143, 7.810485163820699e307],
    [1144, 8.537195671946146e307],
    [1145, 1.4892030886150392e307],
    [1146, 1.4622703527875262e307],
    [1147, 2.0653421152705857e307],
    [1148, 9.78495972542486e307],
    [1149, 5.059696071492518e307],
    [1150, 9.487706194044748e307],
    [1151, 1.8708939495807245e307],
    [1152, 1.3508827580954707e307],
    [1153, 7.739856779941692e307],
    [1154, 1.0885185401028452e307],
    [1155, 4.33719400672842e307],
    [1156, 5.129718170707409e307],
    [1157, 8.645605239289864e307],
    [1158, 7.888261120036518e307],
    [1159, 7.467898525707844e307],
    [1160, 3.9055609270843874e307],
    [1161, 3.098904088481467e307],
    [1162, 7.750886922673183e307],
    [1163, 5.780062562742004e307],
    [1164, 5.739447453122981e307],
    [1165, 5.85877617396989e307],
    [1166, 6.140714315189968e307],
    [1167, 9.1711058245776e307],
    [1168, 1.3092022807685053e307],
    [1169, 6.593826465479326e307],
    [1170, 4.2317799901754637e307],
    [1171, 3.6872111669739704e307],
    [1172, 1.0151444022601318e307],
    [1173, 3.280456560920057e307],
    [1174, 6.881693177150375e307],
    [1175, 2.4271229579568006e307],
    [1176, 6.007490428928923e307],
    [1177, 8.970309844327507e307],
    [1178, 9.382648979779894e307],
    [1179, 3.669052560187434e307],
    [1180, 1.6662141965680732e307],
    [1181, 7.271492670360016e307],
    [1182, 7.312950110776139e307],
    [1183, 2.7466127020999614e307],
    [1184, 9.114092478911702e307],
    [1185, 9.21840254000418e307],
    [1186, 1.9791965347884604e307],
    [1187, 7.590736843847149e307],
    [1188, 1.4766325576359902e307],
    [1189, 1.312467225998812e307],
    [1190, 9.777832181134e307],
    [1191, 3.056563324762491e307],
    [1192, 5.274665301786187e307],
    [1193, 2.957554785338095e307],
    [1194, 9.315459194589867e307],
    [1195, 2.6569652374387427e307],
    [1196, 6.714100517603412e307],
    [1197, 6.474107208864106e307],
    [1198, 4.91594604146923e307],
    [1199, 3.8542130378394533e307],
    [1200, 6.219906955857082e307],
    [1201, 1.4290986469177532e307],
    [1202, 8.302023716668003e307],
    [1203, 5.711729481020221e307],
    [1204, 1.3111192314005257e307],
    [1205, 1.9404295761493695e307],
    [1206, 2.1375310259232285e307],
    [1207, 7.270268542879063e307],
    [1208, 9.343880349228121e307],
    [1209, 4.3190587164929927e307],
    [1210, 9.03077982951743e307],
    [1211, 6.012435294423029e307],
    [1212, 4.510431117298553e307],
    [1213, 2.843532337136652e307],
    [1214, 5.079071605808671e307],
    [1215, 9.596803776408165e307],
    [1216, 3.085789223836978e307],
    [1217, 1.4327265682099734e307],
    [1218, 2.014378185875938e307],
    [1219, 7.756769445276956e307],
    [1220, 4.947522667225263e307],
    [1221, 9.974363208510512e307],
    [1222, 4.516566290276646e307],
    [1223, 5.483613606915864e307],
    [1224, 1.9144185074605413e307],
    [1225, 1.8540911185275044e307],
    [1226, 3.7939639280163826e307],
    [1227, 5.345093713872742e307],
    [1228, 2.9459374994828437e307],
    [1229, 8.468837638926567e307],
    [1230, 8.573274775500499e307],
    [1231, 3.418095515954693e307],
    [1232, 6.78358369662015e307],
    [1233, 2.1098657211638755e307],
    [1234, 8.756879260152529e307],
    [1235, 8.05524512224205e307],
    [1236, 9.25113126646114e307],
    [1237, 7.645096207966221e307],
    [1238, 9.114544447500637e307],
    [1239, 1.860126551507516e307],
    [1240, 5.242895707700842e307],
    [1241, 7.393334154028323e307],
    [1242, 7.973928836781553e307],
    [1243, 6.546064761471e307],
    [1244, 8.743607579021968e307],
    [1245, 5.943440625502637e307],
    [1246, 8.880073317967919e307],
    [1247, 3.306737340500402e307],
    [1248, 7.551696003033895e307],
    [1249, 9.70047494040293e307],
    [1250, 4.2284028884903624e307],
    [1251, 4.720616401908166e307],
    [1252, 3.205575584936726e307],
    [1253, 4.591756291964458e307],
    [1254, 8.285820393195329e307],
    [1255, 8.050477547766278e307],
    [1256, 4.1534165363471087e307],
    [1257, 9.9107262620818e307],
    [1258, 7.856103740039237e307],
    [1259, 7.792136047286864e307],
    [1260, 8.71465478964434e307],
    [1261, 2.6551595489247724e307],
    [1262, 3.5035218510774313e307],
    [1263, 2.9662498428462035e307],
    [1264, 5.832062849024887e307],
    [1265, 2.197154649652658e307],
    [1266, 4.754804069216616e307],
    [1267, 6.044764760024305e307],
    [1268, 9.264334245743794e307],
    [1269, 5.502524119942286e307],
    [1270, 5.099504016125241e307],
    [1271, 1.7099305012997225e307],
    [1272, 2.7324016930253523e307],
    [1273, 5.319258514994197e307],
    [1274, 9.636061205301685e307],
    [1275, 4.0348128508373815e307],
    [1276, 3.6054442850971204e307],
    [1277, 5.830698958335896e307],
    [1278, 6.682520601156735e307],
    [1279, 5.321268827761382e307],
    [1280, 1.1732041771741283e307],
    [1281, 7.306410655127388e307],
    [1282, 3.0579961695815606e307],
    [1283, 4.3961912532452807e307],
    [1284, 4.60082171436114e307],
    [1285, 9.837086161376118e307],
    [1286, 2.6951477094163257e307],
    [1287, 2.996325725297345e307],
    [1288, 4.081490082407636e307],
    [1289, 4.379538780464286e307],
    [1290, 4.788890850773008e307],
    [1291, 8.368099075625668e307],
    [1292, 3.0869276093481646e307],
    [1293, 5.455137980634196e307],
    [1294, 7.916556587390102e307],
    [1295, 5.370398180026027e307],
    [1296, 5.38022434871704e307],
    [1297, 8.480979771345142e307],
    [1298, 3.8562234553066555e307],
    [1299, 4.600100298227948e307],
    [1300, 3.1262912019367826e307],
    [1301, 7.720547153651778e307],
    [1302, 2.095604447432981e307],
    [1303, 7.727815980400192e307],
    [1304, 6.266222410167729e307],
    [1305, 3.846521127781467e307],
    [1306, 5.456742796489791e307],
    [1307, 8.819606199246365e307],
    [1308, 1.7644183854305597e307],
    [1309, 9.920283208871606e307],
    [1310, 9.115885024882391e307],
    [1311, 2.0297966268886774e307],
    [1312, 7.50067476354507e307],
    [1313, 9.664643157958467e307],
    [1314, 7.282820372130672e307],
    [1315, 1.4175658497212432e307],
    [1316, 8.134347954712429e307],
    [1317, 6.742397208785912e307],
    [1318, 9.990181766036273e307],
    [1319, 5.776756280120209e307],
    [1320, 2.8305900450601993e307],
    [1321, 1.7998594803709007e307],
    [1322, 9.204399347712576e307],
    [1323, 5.132719196541037e307],
    [1324, 2.9295721034808386e307],
    [1325, 1.3495617964013675e307],
    [1326, 9.908680513926924e307],
    [1327, 3.1326653531210034e307],
    [1328, 2.418387846622901e307],
    [1329, 8.460820949928752e307],
    [1330, 3.892049823674282e307],
    [1331, 1.7097765722619202e307],
    [1332, 5.580257368797037e307],
    [1333, 8.213044049598601e307],
    [1334, 9.08184841154575e307],
    [1335, 1.8331650130715585e307],
    [1336, 5.802514800626426e307],
    [1337, 7.385382293216806e307],
    [1338, 2.1304670248249335e307],
    [1339, 3.36018819104874e307],
    [1340, 7.3844558855787e307],
    [1341, 6.01954114985537e307],
    [1342, 9.321348017169033e307],
    [1343, 7.056042141486143e307],
    [1344, 8.727576077964451e307],
    [1345, 9.287473442640416e307],
    [1346, 4.0769871124042903e307],
    [1347, 5.146369580622658e307],
    [1348, 7.900381681657534e307],
    [1349, 8.401258763624842e307],
    [1350, 7.154411508755049e307],
    [1351, 4.3186938611690274e307],
    [1352, 2.4070218680818483e307],
    [1353, 6.636379651718043e307],
    [1354, 7.709143862455583e307],
    [1355, 7.667214423289568e307],
    [1356, 9.514673137038598e307],
    [1357, 2.1234249664247913e307],
    [1358, 9.606946711898098e307],
    [1359, 3.609123320275823e307],
    [1360, 6.862338613489006e307],
    [1361, 2.299348478496432e307],
    [1362, 5.552427361452851e307],
    [1363, 6.637715192472248e307],
    [1364, 7.990672972483443e307],
    [1365, 4.806850984134632e307],
    [1366, 1.1180627782201141e307],
    [1367, 1.4695369149119197e307],
    [1368, 7.226688794137656e307],
    [1369, 3.258159690196737e307],
    [1370, 3.6781246889214003e307],
    [1371, 4.183271081051272e307],
    [1372, 8.680871516977231e307],
    [1373, 6.367115255507316e307],
    [1374, 7.279901733467875e307],
    [1375, 8.212022810521234e307],
    [1376, 7.308497215707881e307],
    [1377, 7.83721413008958e307],
    [1378, 4.907957811557713e307],
    [1379, 4.0071224705584096e307],
    [1380, 5.038498749478016e307],
    [1381, 5.206817411238602e307],
    [1382, 4.456115647606812e307],
    [1383, 2.2071161007734248e307],
    [1384, 2.0807805275860009e307],
    [1385, 2.1508560867191062e307],
    [1386, 7.577242639977079e307],
    [1387, 8.719603388076364e307],
    [1388, 3.2880536644006165e307],
    [1389, 1.7328793263486525e307],
    [1390, 9.235014013389618e307],
    [1391, 4.886987191817904e307],
    [1392, 6.271012195395203e307],
    [1393, 1.8014113443402174e307],
    [1394, 5.69743882604202e307],
    [1395, 9.59209044234012e307],
    [1396, 6.545808655169816e307],
    [1397, 5.922324318378423e307],
    [1398, 4.570895437322247e307],
    [1399, 6.125067071174163e307],
    [1400, 2.9145728431606356e307],
    [1401, 3.033955002879436e307],
    [1402, 3.990534479543476e307],
    [1403, 8.797487293701863e307],
    [1404, 2.256067731048457e307],
    [1405, 1.5865107824874825e307],
    [1406, 2.1133614094795608e307],
    [1407, 8.018526693623745e307],
    [1408, 5.902401409281098e307],
    [1409, 2.5016337999681616e307],
    [1410, 3.3678414579795203e307],
    [1411, 8.989003800799015e307],
    [1412, 7.100644325716915e307],
    [1413, 3.1219301264178707e307],
    [1414, 7.771282679129566e307],
    [1415, 6.103431746469104e307],
    [1416, 3.4194860981107733e307],
    [1417, 5.681013939352637e307],
    [1418, 4.732485092478079e307],
    [1419, 4.1521290624291843e307],
    [1420, 9.74712502957187e307],
    [1421, 9.087316409766206e307],
    [1422, 2.558527468445403e307],
    [1423, 1.8246163195263589e307],
    [1424, 4.625761579011031e307],
    [1425, 5.42539169278527e307],
    [1426, 4.0528103181983035e307],
    [1427, 3.288406217148684e307],
    [1428, 5.270682692024097e307],
    [1429, 2.252542974498728e307],
    [1430, 7.184529892693391e307],
    [1431, 9.75375314819604e307],
    [1432, 1.1185100397038653e307],
    [1433, 1.2853990736964293e307],
    [1434, 1.0791756266614079e307],
    [1435, 6.228284897946611e307],
    [1436, 4.4676280477324415e307],
    [1437, 3.953645938812811e307],
    [1438, 6.610068549813605e307],
    [1439, 9.233341360680163e307],
    [1440, 7.784784646564534e307]
]);
try {
    (() => {
        if (!/moomoo.io/.test(window.location.href) || window.top !== window.self) return;
        "https:" !== location.protocol && location.replace(`https:${location.href.substring(location.protocol.length)}`), window.cpmstarAPI = (() => {});
        const r = ["https://cookie-cdn.cookiepro.com/scripttemplates/6.17.0/otBannerSdk.js", "https://a.pub.network/moomoo-io/pubfig.min.js", "https://server.cpmstar.com/cached/zonefiles/392_50844_gameapi.js", "https://cookie-cdn.cookiepro.com/scripttemplates/6.17.0/otTCF.js", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js", "https://a.pub.network/moomoo-io", "https://server.cpmstar.com/cached/zonefiles/392_50844_gameapi.js", "https://www.google-analytics.com/analytics.js"];
        new MutationObserver((t, n) => {
            t.forEach(t => t.addedNodes.forEach(t => e(this, void 0, void 0, function*() {
                "SCRIPT" === t.tagName && "string" == typeof t.src && "" !== t.src && " " !== t.src && r.some(e => t.src.includes(e)) && t.remove()
            })))
        }).observe(document, {
            childList: !0,
            subtree: !0
        }), (() => {
            "use strict";
            const e = {
                isOpen: !1,
                orientation: void 0
            },
                  t = (e, t) => {
                      window.dispatchEvent(new CustomEvent("devtoolschange", {
                          detail: {
                              isOpen: e,
                              orientation: t
                          }
                      }))
                  },
                  r = ({
                      emitEvents: r = !0
                  } = {}) => {
                      const n = window.outerWidth - window.innerWidth > 160,
                            i = window.outerHeight - window.innerHeight > 160,
                            o = n ? "vertical" : "horizontal";
                      i && n || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || n || i) ? (e.isOpen && r && t(!1, void 0), e.isOpen = !1, e.orientation = void 0) : (e.isOpen && e.orientation === o || !r || t(!0, o), e.isOpen = !0, e.orientation = o)
                  };
            r({
                emitEvents: !1
            }), setInterval(r, 50), window.devtools = e
        })(), window.onbeforeunload = (() => {}), window.addEventListener("devtoolschange", e => {
            window.onbeforeunload = (() => {})
        }), document.head = document.head || document.getElementsByTagName("head")[0];
        const n = setInterval(() => {
            if (!document.head) return;
            if (!document.head.childNodes[17] || "image/png" !== document.head.childNodes[17].type) return;
            clearInterval(n), document.head.childNodes[17].remove();
            const e = document.createElement("link");
            e.id = "dynamic-favicon", e.rel = "shortcut icon", e.href = "data:image/png;base64,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", document.head.appendChild(e)
        }, 0),
              i = {},
              o = Image,
              a = ["src", "onload", "isLoaded", "width", "height"];
        let s;
        CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function(...e) {
            return "__x" !== e[0].constructor.name ? this._drawImage(...e) : e[0].src.includes("undefined") ? void 0 : this._drawImage(e[0].__image, ...e.slice(1))
        }, window.Image = class __x {
            constructor(...e) {
                const t = new o(...e);
                this.__image = t, a.forEach(e => Object.defineProperty(this, e, {
                    get: () => t[e],
                    set(r) {
                        if ("src" === e)
                            if (r.includes("img")) {
                                const n = i["/img" + r.split("img")[1]];
                                t[e] = void 0 === n ? r : n
                            } else t[e] = r;
                        else t[e] = r
                    }
                }))
            }
        }, Function.prototype._call = Function.prototype.call, Function.prototype.call = function() {
            if (arguments[1] && 21 == arguments[1].i && arguments[3] && arguments[3].toString && arguments[3].toString().match(/^\s*function n\(i\)/)) {
                const e = arguments[3];
                arguments[3] = function(t) {
                    const r = e(t);
                    return 42 === t ? r.generateElement = function(e) {
                        var t = document.createElement(e.tag || "div");

                        function n(r, n) {
                            e[r] && (t[n] = e[r])
                        }
                        for (var o in n("text", "textContent"), n("html", "innerHTML"), n("class", "className"), e) {
                            switch (o) {
                                case "tag":
                                case "text":
                                case "html":
                                case "class":
                                case "style":
                                case "hookTouch":
                                case "parent":
                                case "children":
                                    continue
                            }
                            t[o] = "src" === o ? void 0 === i["/img" + e[o].split("img")[1]] ? e[o] : i["/img" + e[o].split("img")[1]] : e[o]
                        }
                        if (t.onclick && (t.onclick = r.checkTrusted(t.onclick)), t.onmouseover && (t.onmouseover = r.checkTrusted(t.onmouseover)), t.onmouseout && (t.onmouseout = r.checkTrusted(t.onmouseout)), e.style && (t.style.cssText = e.style), e.hookTouch && r.hookTouchEvents(t), e.parent && e.parent.appendChild(t), e.children)
                            for (var a = 0; a < e.children.length; a++) t.appendChild(e.children[a]);
                        return t
                    } : 19 === t ? (r.maxPlayers = 50, r.clientSendRate = 99999999999) : 42 === t ? r.checkTrusted = (e => e) : 45 === t && (console.log()), r
                }, this.call = this._call
            }
            return this._call(...arguments)
        }, window.addEventListener("keydown", ({
            key: e
        }) => s = e), window.addEventListener("keyup", ({
            key: e
        }) => s = e),
            function(e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
            else if ("function" == typeof define && define.amd) define([], e);
            else {
                ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).msgpack = e()
            }
        }(function() {
            return function e(t, r, n) {
                function i(a, s) {
                    if (!r[a]) {
                        if (!t[a]) {
                            var l = "function" == typeof require && require;
                            if (!s && l) return l(a, !0);
                            if (o) return o(a, !0);
                            var c = new Error("Cannot find module '" + a + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var f = r[a] = {
                            exports: {}
                        };
                        t[a][0].call(f.exports, function(e) {
                            var r = t[a][1][e];
                            return i(r || e)
                        }, f, f.exports, e, t, r, n)
                    }
                    return r[a].exports
                }
                for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
                return i
            }({
                1: [function(e, t, r) {
                    r.encode = e("./encode").encode, r.decode = e("./decode").decode, r.Encoder = e("./encoder").Encoder, r.Decoder = e("./decoder").Decoder, r.createCodec = e("./ext").createCodec, r.codec = e("./codec").codec
                }, {
                    "./codec": 10,
                    "./decode": 12,
                    "./decoder": 13,
                    "./encode": 15,
                    "./encoder": 16,
                    "./ext": 20
                }],
                2: [function(e, t, r) {
                    (function(e) {
                        function r(e) {
                            return e && e.isBuffer && e
                        }
                        t.exports = r(void 0 !== e && e) || r(this.Buffer) || r("undefined" != typeof window && window.Buffer) || this.Buffer
                    }).call(this, e("buffer").Buffer)
                }, {
                    buffer: 29
                }],
                3: [function(e, t, r) {
                    r.copy = function(e, t, r, n) {
                        var i;
                        r || (r = 0), n || 0 === n || (n = this.length), t || (t = 0);
                        var o = n - r;
                        if (e === this && r < t && t < n)
                            for (i = o - 1; i >= 0; i--) e[i + t] = this[i + r];
                        else
                            for (i = 0; i < o; i++) e[i + t] = this[i + r];
                        return o
                    }, r.toString = function(e, t, r) {
                        var n = this,
                            i = 0 | t;
                        r || (r = n.length);
                        for (var o = "", a = 0; i < r;)(a = n[i++]) < 128 ? o += String.fromCharCode(a) : (192 == (224 & a) ? a = (31 & a) << 6 | 63 & n[i++] : 224 == (240 & a) ? a = (15 & a) << 12 | (63 & n[i++]) << 6 | 63 & n[i++] : 240 == (248 & a) && (a = (7 & a) << 18 | (63 & n[i++]) << 12 | (63 & n[i++]) << 6 | 63 & n[i++]), a >= 65536 ? (a -= 65536, o += String.fromCharCode(55296 + (a >>> 10), 56320 + (1023 & a))) : o += String.fromCharCode(a));
                        return o
                    }, r.write = function(e, t) {
                        for (var r = this, n = t || (t |= 0), i = e.length, o = 0, a = 0; a < i;)(o = e.charCodeAt(a++)) < 128 ? r[n++] = o : o < 2048 ? (r[n++] = 192 | o >>> 6, r[n++] = 128 | 63 & o) : o < 55296 || o > 57343 ? (r[n++] = 224 | o >>> 12, r[n++] = 128 | o >>> 6 & 63, r[n++] = 128 | 63 & o) : (o = 65536 + (o - 55296 << 10 | e.charCodeAt(a++) - 56320), r[n++] = 240 | o >>> 18, r[n++] = 128 | o >>> 12 & 63, r[n++] = 128 | o >>> 6 & 63, r[n++] = 128 | 63 & o);
                        return n - t
                    }
                }, {}],
                4: [function(e, t, r) {
                    function n(e) {
                        return new Array(e)
                    }
                    var i = e("./bufferish");
                    (r = t.exports = n(0)).alloc = n, r.concat = i.concat, r.from = function(e) {
                        if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
                        else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
                        else {
                            if ("string" == typeof e) return i.from.call(r, e);
                            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
                        }
                        return Array.prototype.slice.call(e)
                    }
                }, {
                    "./bufferish": 8
                }],
                5: [function(e, t, r) {
                    function n(e) {
                        return new o(e)
                    }
                    var i = e("./bufferish"),
                        o = i.global;
                    (r = t.exports = i.hasBuffer ? n(0) : []).alloc = i.hasBuffer && o.alloc || n, r.concat = i.concat, r.from = function(e) {
                        if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
                        else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
                        else {
                            if ("string" == typeof e) return i.from.call(r, e);
                            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
                        }
                        return o.from && 1 !== o.from.length ? o.from(e) : new o(e)
                    }
                }, {
                    "./bufferish": 8
                }],
                6: [function(e, t, r) {
                    function n(e, t, r, n) {
                        var s = a.isBuffer(this),
                            l = a.isBuffer(e);
                        if (s && l) return this.copy(e, t, r, n);
                        if (c || s || l || !a.isView(this) || !a.isView(e)) return o.copy.call(this, e, t, r, n);
                        var f = r || null != n ? i.call(this, r, n) : this;
                        return e.set(f, t), f.length
                    }

                    function i(e, t) {
                        var r = this.slice || !c && this.subarray;
                        if (r) return r.call(this, e, t);
                        var i = a.alloc.call(this, t - e);
                        return n.call(this, i, 0, e, t), i
                    }
                    var o = e("./buffer-lite");
                    r.copy = n, r.slice = i, r.toString = function(e, t, r) {
                        return (!l && a.isBuffer(this) ? this.toString : o.toString).apply(this, arguments)
                    }, r.write = function(e) {
                        return function() {
                            return (this[e] || o[e]).apply(this, arguments)
                        }
                    }("write");
                    var a = e("./bufferish"),
                        s = a.global,
                        l = a.hasBuffer && "TYPED_ARRAY_SUPPORT" in s,
                        c = l && !s.TYPED_ARRAY_SUPPORT
                    }, {
                        "./buffer-lite": 3,
                        "./bufferish": 8
                    }],
                7: [function(e, t, r) {
                    function n(e) {
                        return new Uint8Array(e)
                    }
                    var i = e("./bufferish");
                    (r = t.exports = i.hasArrayBuffer ? n(0) : []).alloc = n, r.concat = i.concat, r.from = function(e) {
                        if (i.isView(e)) {
                            var t = e.byteOffset,
                                n = e.byteLength;
                            (e = e.buffer).byteLength !== n && (e.slice ? e = e.slice(t, t + n) : (e = new Uint8Array(e)).byteLength !== n && (e = Array.prototype.slice.call(e, t, t + n)))
                        } else {
                            if ("string" == typeof e) return i.from.call(r, e);
                            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
                        }
                        return new Uint8Array(e)
                    }
                }, {
                    "./bufferish": 8
                }],
                8: [function(e, t, r) {
                    function n(e) {
                        return i(this).alloc(e)
                    }

                    function i(e) {
                        return u(e) ? p : d(e) ? g : f(e) ? h : l ? p : c ? g : h
                    }

                    function o() {
                        return !1
                    }

                    function a(e, t) {
                        return e = "[object " + e + "]",
                            function(r) {
                            return null != r && {}.toString.call(t ? r[t] : r) === e
                        }
                    }
                    var s = r.global = e("./buffer-global"),
                        l = r.hasBuffer = s && !!s.isBuffer,
                        c = r.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
                        f = r.isArray = e("isarray");
                    r.isArrayBuffer = c ? function(e) {
                        return e instanceof ArrayBuffer || w(e)
                    } : o;
                    var u = r.isBuffer = l ? s.isBuffer : o,
                        d = r.isView = c ? ArrayBuffer.isView || a("ArrayBuffer", "buffer") : o;
                    r.alloc = n, r.concat = function(e, t) {
                        t || (t = 0, Array.prototype.forEach.call(e, function(e) {
                            t += e.length
                        }));
                        var i = this !== r && this || e[0],
                            o = n.call(i, t),
                            a = 0;
                        return Array.prototype.forEach.call(e, function(e) {
                            a += m.copy.call(e, o, a)
                        }), o
                    }, r.from = function(e) {
                        return "string" == typeof e ? function(e) {
                            var t = 3 * e.length,
                                r = n.call(this, t),
                                i = m.write.call(r, e);
                            return t !== i && (r = m.slice.call(r, 0, i)), r
                        }.call(this, e) : i(this).from(e)
                    };
                    var h = r.Array = e("./bufferish-array"),
                        p = r.Buffer = e("./bufferish-buffer"),
                        g = r.Uint8Array = e("./bufferish-uint8array"),
                        m = r.prototype = e("./bufferish-proto"),
                        w = a("ArrayBuffer")
                    }, {
                        "./buffer-global": 2,
                        "./bufferish-array": 4,
                        "./bufferish-buffer": 5,
                        "./bufferish-proto": 6,
                        "./bufferish-uint8array": 7,
                        isarray: 34
                    }],
                9: [function(e, t, r) {
                    function n(e) {
                        return this instanceof n ? (this.options = e, void this.init()) : new n(e)
                    }

                    function i(e, t) {
                        return e && t ? function() {
                            return e.apply(this, arguments), t.apply(this, arguments)
                        } : e || t
                    }

                    function o(e) {
                        return new n(e)
                    }
                    var a = e("isarray");
                    r.createCodec = o, r.install = function(e) {
                        for (var t in e) n.prototype[t] = i(n.prototype[t], e[t])
                    }, r.filter = function(e) {
                        return a(e) ? function(e) {
                            function t(e, t) {
                                return t(e)
                            }
                            return e = e.slice(),
                                function(r) {
                                return e.reduce(t, r)
                            }
                        }(e) : e
                    };
                    var s = e("./bufferish");
                    n.prototype.init = function() {
                        var e = this.options;
                        return e && e.uint8array && (this.bufferish = s.Uint8Array), this
                    }, r.preset = o({
                        preset: !0
                    })
                }, {
                    "./bufferish": 8,
                    isarray: 34
                }],
                10: [function(e, t, r) {
                    e("./read-core"), e("./write-core"), r.codec = {
                        preset: e("./codec-base").preset
                    }
                }, {
                    "./codec-base": 9,
                    "./read-core": 22,
                    "./write-core": 25
                }],
                11: [function(e, t, r) {
                    function n(e) {
                        if (!(this instanceof n)) return new n(e);
                        if (e && (this.options = e, e.codec)) {
                            var t = this.codec = e.codec;
                            t.bufferish && (this.bufferish = t.bufferish)
                        }
                    }
                    r.DecodeBuffer = n;
                    var i = e("./read-core").preset;
                    e("./flex-buffer").FlexDecoder.mixin(n.prototype), n.prototype.codec = i, n.prototype.fetch = function() {
                        return this.codec.decode(this)
                    }
                }, {
                    "./flex-buffer": 21,
                    "./read-core": 22
                }],
                12: [function(e, t, r) {
                    r.decode = function(e, t) {
                        var r = new n(t);
                        return r.write(e), r.read()
                    };
                    var n = e("./decode-buffer").DecodeBuffer
                    }, {
                        "./decode-buffer": 11
                    }],
                13: [function(e, t, r) {
                    function n(e) {
                        return this instanceof n ? void o.call(this, e) : new n(e)
                    }
                    r.Decoder = n;
                    var i = e("event-lite"),
                        o = e("./decode-buffer").DecodeBuffer;
                    n.prototype = new o, i.mixin(n.prototype), n.prototype.decode = function(e) {
                        arguments.length && this.write(e), this.flush()
                    }, n.prototype.push = function(e) {
                        this.emit("data", e)
                    }, n.prototype.end = function(e) {
                        this.decode(e), this.emit("end")
                    }
                }, {
                    "./decode-buffer": 11,
                    "event-lite": 31
                }],
                14: [function(e, t, r) {
                    function n(e) {
                        if (!(this instanceof n)) return new n(e);
                        if (e && (this.options = e, e.codec)) {
                            var t = this.codec = e.codec;
                            t.bufferish && (this.bufferish = t.bufferish)
                        }
                    }
                    r.EncodeBuffer = n;
                    var i = e("./write-core").preset;
                    e("./flex-buffer").FlexEncoder.mixin(n.prototype), n.prototype.codec = i, n.prototype.write = function(e) {
                        this.codec.encode(this, e)
                    }
                }, {
                    "./flex-buffer": 21,
                    "./write-core": 25
                }],
                15: [function(e, t, r) {
                    r.encode = function(e, t) {
                        var r = new n(t);
                        return r.write(e), r.read()
                    };
                    var n = e("./encode-buffer").EncodeBuffer
                    }, {
                        "./encode-buffer": 14
                    }],
                16: [function(e, t, r) {
                    function n(e) {
                        return this instanceof n ? void o.call(this, e) : new n(e)
                    }
                    r.Encoder = n;
                    var i = e("event-lite"),
                        o = e("./encode-buffer").EncodeBuffer;
                    n.prototype = new o, i.mixin(n.prototype), n.prototype.encode = function(e) {
                        this.write(e), this.emit("data", this.read())
                    }, n.prototype.end = function(e) {
                        arguments.length && this.encode(e), this.flush(), this.emit("end")
                    }
                }, {
                    "./encode-buffer": 14,
                    "event-lite": 31
                }],
                17: [function(e, t, r) {
                    r.ExtBuffer = function e(t, r) {
                        return this instanceof e ? (this.buffer = n.from(t), void(this.type = r)) : new e(t, r)
                    };
                    var n = e("./bufferish")
                    }, {
                        "./bufferish": 8
                    }],
                18: [function(e, t, r) {
                    function n(t) {
                        return s || (s = e("./encode").encode), s(t)
                    }

                    function i(e) {
                        return e.valueOf()
                    }

                    function o(e) {
                        (e = RegExp.prototype.toString.call(e).split("/")).shift();
                        var t = [e.pop()];
                        return t.unshift(e.join("/")), t
                    }

                    function a(e) {
                        var t = {};
                        for (var r in u) t[r] = e[r];
                        return t
                    }
                    r.setExtPackers = function(e) {
                        e.addExtPacker(14, Error, [a, n]), e.addExtPacker(1, EvalError, [a, n]), e.addExtPacker(2, RangeError, [a, n]), e.addExtPacker(3, ReferenceError, [a, n]), e.addExtPacker(4, SyntaxError, [a, n]), e.addExtPacker(5, TypeError, [a, n]), e.addExtPacker(6, URIError, [a, n]), e.addExtPacker(10, RegExp, [o, n]), e.addExtPacker(11, Boolean, [i, n]), e.addExtPacker(12, String, [i, n]), e.addExtPacker(13, Date, [Number, n]), e.addExtPacker(15, Number, [i, n]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, f), e.addExtPacker(18, Uint8Array, f), e.addExtPacker(19, Int16Array, f), e.addExtPacker(20, Uint16Array, f), e.addExtPacker(21, Int32Array, f), e.addExtPacker(22, Uint32Array, f), e.addExtPacker(23, Float32Array, f), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, f), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, f), e.addExtPacker(26, ArrayBuffer, f), e.addExtPacker(29, DataView, f)), l.hasBuffer && e.addExtPacker(27, c, l.from)
                    };
                    var s, l = e("./bufferish"),
                        c = l.global,
                        f = l.Uint8Array.from,
                        u = {
                            name: 1,
                            message: 1,
                            stack: 1,
                            columnNumber: 1,
                            fileName: 1,
                            lineNumber: 1
                        }
                    }, {
                        "./bufferish": 8,
                        "./encode": 15
                    }],
                19: [function(e, t, r) {
                    function n(t) {
                        return l || (l = e("./decode").decode), l(t)
                    }

                    function i(e) {
                        return RegExp.apply(null, e)
                    }

                    function o(e) {
                        return function(t) {
                            var r = new e;
                            for (var n in u) r[n] = t[n];
                            return r
                        }
                    }

                    function a(e) {
                        return function(t) {
                            return new e(t)
                        }
                    }

                    function s(e) {
                        return new Uint8Array(e).buffer
                    }
                    r.setExtUnpackers = function(e) {
                        e.addExtUnpacker(14, [n, o(Error)]), e.addExtUnpacker(1, [n, o(EvalError)]), e.addExtUnpacker(2, [n, o(RangeError)]), e.addExtUnpacker(3, [n, o(ReferenceError)]), e.addExtUnpacker(4, [n, o(SyntaxError)]), e.addExtUnpacker(5, [n, o(TypeError)]), e.addExtUnpacker(6, [n, o(URIError)]), e.addExtUnpacker(10, [n, i]), e.addExtUnpacker(11, [n, a(Boolean)]), e.addExtUnpacker(12, [n, a(String)]), e.addExtUnpacker(13, [n, a(Date)]), e.addExtUnpacker(15, [n, a(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, a(Int8Array)), e.addExtUnpacker(18, a(Uint8Array)), e.addExtUnpacker(19, [s, a(Int16Array)]), e.addExtUnpacker(20, [s, a(Uint16Array)]), e.addExtUnpacker(21, [s, a(Int32Array)]), e.addExtUnpacker(22, [s, a(Uint32Array)]), e.addExtUnpacker(23, [s, a(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [s, a(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, a(Uint8ClampedArray)), e.addExtUnpacker(26, s), e.addExtUnpacker(29, [s, a(DataView)])), c.hasBuffer && e.addExtUnpacker(27, a(f))
                    };
                    var l, c = e("./bufferish"),
                        f = c.global,
                        u = {
                            name: 1,
                            message: 1,
                            stack: 1,
                            columnNumber: 1,
                            fileName: 1,
                            lineNumber: 1
                        }
                    }, {
                        "./bufferish": 8,
                        "./decode": 12
                    }],
                20: [function(e, t, r) {
                    e("./read-core"), e("./write-core"), r.createCodec = e("./codec-base").createCodec
                }, {
                    "./codec-base": 9,
                    "./read-core": 22,
                    "./write-core": 25
                }],
                21: [function(e, t, r) {
                    function n() {
                        if (!(this instanceof n)) return new n
                    }

                    function i() {
                        if (!(this instanceof i)) return new i
                    }

                    function o() {
                        throw new Error("method not implemented: write()")
                    }

                    function a() {
                        throw new Error("method not implemented: fetch()")
                    }

                    function s() {
                        return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
                    }

                    function l(e) {
                        (this.buffers || (this.buffers = [])).push(e)
                    }

                    function c() {
                        return (this.buffers || (this.buffers = [])).shift()
                    }

                    function f(e) {
                        return function(t) {
                            for (var r in e) t[r] = e[r];
                            return t
                        }
                    }
                    r.FlexDecoder = n, r.FlexEncoder = i;
                    var u = e("./bufferish"),
                        d = 2048,
                        h = 65536,
                        p = "BUFFER_SHORTAGE";
                    n.mixin = f({
                        bufferish: u,
                        write: function(e) {
                            var t = this.offset ? u.prototype.slice.call(this.buffer, this.offset) : this.buffer;
                            this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0
                        },
                        fetch: a,
                        flush: function() {
                            for (; this.offset < this.buffer.length;) {
                                var e, t = this.offset;
                                try {
                                    e = this.fetch()
                                } catch (e) {
                                    if (e && e.message != p) throw e;
                                    this.offset = t;
                                    break
                                }
                                this.push(e)
                            }
                        },
                        push: l,
                        pull: c,
                        read: s,
                        reserve: function(e) {
                            var t = this.offset,
                                r = t + e;
                            if (r > this.buffer.length) throw new Error(p);
                            return this.offset = r, t
                        },
                        offset: 0
                    }), n.mixin(n.prototype), i.mixin = f({
                        bufferish: u,
                        write: o,
                        fetch: function() {
                            var e = this.start;
                            if (e < this.offset) {
                                var t = this.start = this.offset;
                                return u.prototype.slice.call(this.buffer, e, t)
                            }
                        },
                        flush: function() {
                            for (; this.start < this.offset;) {
                                var e = this.fetch();
                                e && this.push(e)
                            }
                        },
                        push: l,
                        pull: function() {
                            var e = this.buffers || (this.buffers = []),
                                t = e.length > 1 ? this.bufferish.concat(e) : e[0];
                            return e.length = 0, t
                        },
                        read: s,
                        reserve: function(e) {
                            var t = 0 | e;
                            if (this.buffer) {
                                var r = this.buffer.length,
                                    n = 0 | this.offset,
                                    i = n + t;
                                if (i < r) return this.offset = i, n;
                                this.flush(), e = Math.max(e, Math.min(2 * r, this.maxBufferSize))
                            }
                            return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0
                        },
                        send: function(e) {
                            var t = e.length;
                            if (t > this.minBufferSize) this.flush(), this.push(e);
                            else {
                                var r = this.reserve(t);
                                u.prototype.copy.call(e, this.buffer, r)
                            }
                        },
                        maxBufferSize: h,
                        minBufferSize: d,
                        offset: 0,
                        start: 0
                    }), i.mixin(i.prototype)
                }, {
                    "./bufferish": 8
                }],
                22: [function(e, t, r) {
                    function n() {
                        var e = this.options;
                        return this.decode = function(e) {
                            var t = s.getReadToken(e);
                            return function(e) {
                                var r = a(e),
                                    n = t[r];
                                if (!n) throw new Error("Invalid type: " + (r ? "0x" + r.toString(16) : r));
                                return n(e)
                            }
                        }(e), e && e.preset && o.setExtUnpackers(this), this
                    }
                    var i = e("./ext-buffer").ExtBuffer,
                        o = e("./ext-unpacker"),
                        a = e("./read-format").readUint8,
                        s = e("./read-token"),
                        l = e("./codec-base");
                    l.install({
                        addExtUnpacker: function(e, t) {
                            (this.extUnpackers || (this.extUnpackers = []))[e] = l.filter(t)
                        },
                        getExtUnpacker: function(e) {
                            return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
                                return new i(t, e)
                            }
                        },
                        init: n
                    }), r.preset = n.call(l.preset)
                }, {
                    "./codec-base": 9,
                    "./ext-buffer": 17,
                    "./ext-unpacker": 19,
                    "./read-format": 23,
                    "./read-token": 24
                }],
                23: [function(e, t, r) {
                    function n(e, t) {
                        var r, n = {},
                            i = new Array(t),
                            o = new Array(t),
                            a = e.codec.decode;
                        for (r = 0; r < t; r++) i[r] = a(e), o[r] = a(e);
                        for (r = 0; r < t; r++) n[i[r]] = o[r];
                        return n
                    }

                    function i(e, t) {
                        var r, n = new Map,
                            i = new Array(t),
                            o = new Array(t),
                            a = e.codec.decode;
                        for (r = 0; r < t; r++) i[r] = a(e), o[r] = a(e);
                        for (r = 0; r < t; r++) n.set(i[r], o[r]);
                        return n
                    }

                    function o(e, t) {
                        for (var r = new Array(t), n = e.codec.decode, i = 0; i < t; i++) r[i] = n(e);
                        return r
                    }

                    function a(e, t) {
                        var r = e.reserve(t),
                            n = r + t;
                        return B.toString.call(e.buffer, "utf-8", r, n)
                    }

                    function s(e, t) {
                        var r = e.reserve(t),
                            n = r + t,
                            i = B.slice.call(e.buffer, r, n);
                        return k.from(i)
                    }

                    function l(e, t) {
                        var r = e.reserve(t),
                            n = r + t,
                            i = B.slice.call(e.buffer, r, n);
                        return k.Uint8Array.from(i).buffer
                    }

                    function c(e, t) {
                        var r = e.reserve(t + 1),
                            n = e.buffer[r++],
                            i = r + t,
                            o = e.codec.getExtUnpacker(n);
                        if (!o) throw new Error("Invalid ext type: " + (n ? "0x" + n.toString(16) : n));
                        return o(B.slice.call(e.buffer, r, i))
                    }

                    function f(e) {
                        var t = e.reserve(1);
                        return e.buffer[t]
                    }

                    function u(e) {
                        var t = e.reserve(1),
                            r = e.buffer[t];
                        return 128 & r ? r - 256 : r
                    }

                    function d(e) {
                        var t = e.reserve(2),
                            r = e.buffer;
                        return r[t++] << 8 | r[t]
                    }

                    function h(e) {
                        var t = e.reserve(2),
                            r = e.buffer,
                            n = r[t++] << 8 | r[t];
                        return 32768 & n ? n - 65536 : n
                    }

                    function p(e) {
                        var t = e.reserve(4),
                            r = e.buffer;
                        return 16777216 * r[t++] + (r[t++] << 16) + (r[t++] << 8) + r[t]
                    }

                    function g(e) {
                        var t = e.reserve(4),
                            r = e.buffer;
                        return r[t++] << 24 | r[t++] << 16 | r[t++] << 8 | r[t]
                    }

                    function m(e, t) {
                        return function(r) {
                            var n = r.reserve(e);
                            return t.call(r.buffer, n, M)
                        }
                    }

                    function w(e) {
                        return new R(this, e).toNumber()
                    }

                    function y(e) {
                        return new x(this, e).toNumber()
                    }

                    function A(e) {
                        return new R(this, e)
                    }

                    function v(e) {
                        return new x(this, e)
                    }

                    function E(e) {
                        return I.read(this, e, !1, 23, 4)
                    }

                    function b(e) {
                        return I.read(this, e, !1, 52, 8)
                    }
                    var I = e("ieee754"),
                        S = e("int64-buffer"),
                        R = S.Uint64BE,
                        x = S.Int64BE;
                    r.getReadFormat = function(e) {
                        var t = k.hasArrayBuffer && e && e.binarraybuffer,
                            r = e && e.int64;
                        return {
                            map: O && e && e.usemap ? i : n,
                            array: o,
                            str: a,
                            bin: t ? l : s,
                            ext: c,
                            uint8: f,
                            uint16: d,
                            uint32: p,
                            uint64: m(8, r ? A : w),
                            int8: u,
                            int16: h,
                            int32: g,
                            int64: m(8, r ? v : y),
                            float32: m(4, E),
                            float64: m(8, b)
                        }
                    }, r.readUint8 = f;
                    var k = e("./bufferish"),
                        B = e("./bufferish-proto"),
                        O = "undefined" != typeof Map,
                        M = !0
                    }, {
                        "./bufferish": 8,
                        "./bufferish-proto": 6,
                        ieee754: 32,
                        "int64-buffer": 33
                    }],
                24: [function(e, t, r) {
                    function n(e) {
                        var t, r = new Array(256);
                        for (t = 0; t <= 127; t++) r[t] = i(t);
                        for (t = 128; t <= 143; t++) r[t] = a(t - 128, e.map);
                        for (t = 144; t <= 159; t++) r[t] = a(t - 144, e.array);
                        for (t = 160; t <= 191; t++) r[t] = a(t - 160, e.str);
                        for (r[192] = i(null), r[193] = null, r[194] = i(!1), r[195] = i(!0), r[196] = o(e.uint8, e.bin), r[197] = o(e.uint16, e.bin), r[198] = o(e.uint32, e.bin), r[199] = o(e.uint8, e.ext), r[200] = o(e.uint16, e.ext), r[201] = o(e.uint32, e.ext), r[202] = e.float32, r[203] = e.float64, r[204] = e.uint8, r[205] = e.uint16, r[206] = e.uint32, r[207] = e.uint64, r[208] = e.int8, r[209] = e.int16, r[210] = e.int32, r[211] = e.int64, r[212] = a(1, e.ext), r[213] = a(2, e.ext), r[214] = a(4, e.ext), r[215] = a(8, e.ext), r[216] = a(16, e.ext), r[217] = o(e.uint8, e.str), r[218] = o(e.uint16, e.str), r[219] = o(e.uint32, e.str), r[220] = o(e.uint16, e.array), r[221] = o(e.uint32, e.array), r[222] = o(e.uint16, e.map), r[223] = o(e.uint32, e.map), t = 224; t <= 255; t++) r[t] = i(t - 256);
                        return r
                    }

                    function i(e) {
                        return function() {
                            return e
                        }
                    }

                    function o(e, t) {
                        return function(r) {
                            var n = e(r);
                            return t(r, n)
                        }
                    }

                    function a(e, t) {
                        return function(r) {
                            return t(r, e)
                        }
                    }
                    var s = e("./read-format");
                    r.getReadToken = function(e) {
                        var t = s.getReadFormat(e);
                        return e && e.useraw ? function(e) {
                            var t, r = n(e).slice();
                            for (r[217] = r[196], r[218] = r[197], r[219] = r[198], t = 160; t <= 191; t++) r[t] = a(t - 160, e.bin);
                            return r
                        }(t) : n(t)
                    }
                }, {
                    "./read-format": 23
                }],
                25: [function(e, t, r) {
                    function n() {
                        var e = this.options;
                        return this.encode = function(e) {
                            var t = a.getWriteType(e);
                            return function(e, r) {
                                var n = t[typeof r];
                                if (!n) throw new Error('Unsupported type "' + typeof r + '": ' + r);
                                n(e, r)
                            }
                        }(e), e && e.preset && o.setExtPackers(this), this
                    }
                    var i = e("./ext-buffer").ExtBuffer,
                        o = e("./ext-packer"),
                        a = e("./write-type"),
                        s = e("./codec-base");
                    s.install({
                        addExtPacker: function(e, t, r) {
                            function n(t) {
                                return r && (t = r(t)), new i(t, e)
                            }
                            r = s.filter(r);
                            var o = t.name;
                            o && "Object" !== o ? (this.extPackers || (this.extPackers = {}))[o] = n : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, n])
                        },
                        getExtPacker: function(e) {
                            var t = this.extPackers || (this.extPackers = {}),
                                r = e.constructor,
                                n = r && r.name && t[r.name];
                            if (n) return n;
                            for (var i = this.extEncoderList || (this.extEncoderList = []), o = i.length, a = 0; a < o; a++) {
                                var s = i[a];
                                if (r === s[0]) return s[1]
                            }
                        },
                        init: n
                    }), r.preset = n.call(s.preset)
                }, {
                    "./codec-base": 9,
                    "./ext-buffer": 17,
                    "./ext-packer": 18,
                    "./write-type": 27
                }],
                26: [function(e, t, r) {
                    function n() {
                        var e = m.slice();
                        return e[196] = i(196), e[197] = o(197), e[198] = a(198), e[199] = i(199), e[200] = o(200), e[201] = a(201), e[202] = s(202, 4, v.writeFloatBE || f, !0), e[203] = s(203, 8, v.writeDoubleBE || u, !0), e[204] = i(204), e[205] = o(205), e[206] = a(206), e[207] = s(207, 8, l), e[208] = i(208), e[209] = o(209), e[210] = a(210), e[211] = s(211, 8, c), e[217] = i(217), e[218] = o(218), e[219] = a(219), e[220] = o(220), e[221] = a(221), e[222] = o(222), e[223] = a(223), e
                    }

                    function i(e) {
                        return function(t, r) {
                            var n = t.reserve(2),
                                i = t.buffer;
                            i[n++] = e, i[n] = r
                        }
                    }

                    function o(e) {
                        return function(t, r) {
                            var n = t.reserve(3),
                                i = t.buffer;
                            i[n++] = e, i[n++] = r >>> 8, i[n] = r
                        }
                    }

                    function a(e) {
                        return function(t, r) {
                            var n = t.reserve(5),
                                i = t.buffer;
                            i[n++] = e, i[n++] = r >>> 24, i[n++] = r >>> 16, i[n++] = r >>> 8, i[n] = r
                        }
                    }

                    function s(e, t, r, n) {
                        return function(i, o) {
                            var a = i.reserve(t + 1);
                            i.buffer[a++] = e, r.call(i.buffer, o, a, n)
                        }
                    }

                    function l(e, t) {
                        new p(this, t, e)
                    }

                    function c(e, t) {
                        new g(this, t, e)
                    }

                    function f(e, t) {
                        d.write(this, e, t, !1, 23, 4)
                    }

                    function u(e, t) {
                        d.write(this, e, t, !1, 52, 8)
                    }
                    var d = e("ieee754"),
                        h = e("int64-buffer"),
                        p = h.Uint64BE,
                        g = h.Int64BE,
                        m = e("./write-uint8").uint8,
                        w = e("./bufferish"),
                        y = w.global,
                        A = w.hasBuffer && "TYPED_ARRAY_SUPPORT" in y && !y.TYPED_ARRAY_SUPPORT,
                        v = w.hasBuffer && y.prototype || {};
                    r.getWriteToken = function(e) {
                        return e && e.uint8array ? function() {
                            var e = n();
                            return e[202] = s(202, 4, f), e[203] = s(203, 8, u), e
                        }() : A || w.hasBuffer && e && e.safe ? function() {
                            var e = m.slice();
                            return e[196] = s(196, 1, y.prototype.writeUInt8), e[197] = s(197, 2, y.prototype.writeUInt16BE), e[198] = s(198, 4, y.prototype.writeUInt32BE), e[199] = s(199, 1, y.prototype.writeUInt8), e[200] = s(200, 2, y.prototype.writeUInt16BE), e[201] = s(201, 4, y.prototype.writeUInt32BE), e[202] = s(202, 4, y.prototype.writeFloatBE), e[203] = s(203, 8, y.prototype.writeDoubleBE), e[204] = s(204, 1, y.prototype.writeUInt8), e[205] = s(205, 2, y.prototype.writeUInt16BE), e[206] = s(206, 4, y.prototype.writeUInt32BE), e[207] = s(207, 8, l), e[208] = s(208, 1, y.prototype.writeInt8), e[209] = s(209, 2, y.prototype.writeInt16BE), e[210] = s(210, 4, y.prototype.writeInt32BE), e[211] = s(211, 8, c), e[217] = s(217, 1, y.prototype.writeUInt8), e[218] = s(218, 2, y.prototype.writeUInt16BE), e[219] = s(219, 4, y.prototype.writeUInt32BE), e[220] = s(220, 2, y.prototype.writeUInt16BE), e[221] = s(221, 4, y.prototype.writeUInt32BE), e[222] = s(222, 2, y.prototype.writeUInt16BE), e[223] = s(223, 4, y.prototype.writeUInt32BE), e
                        }() : n()
                    }
                }, {
                    "./bufferish": 8,
                    "./write-uint8": 28,
                    ieee754: 32,
                    "int64-buffer": 33
                }],
                27: [function(e, t, r) {
                    var n = e("isarray"),
                        i = e("int64-buffer"),
                        o = i.Uint64BE,
                        a = i.Int64BE,
                        s = e("./bufferish"),
                        l = e("./bufferish-proto"),
                        c = e("./write-token"),
                        f = e("./write-uint8").uint8,
                        u = e("./ext-buffer").ExtBuffer,
                        d = "undefined" != typeof Uint8Array,
                        h = "undefined" != typeof Map,
                        p = [];
                    p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, r.getWriteType = function(e) {
                        function t(e, t) {
                            if (null === t) return r(e, t);
                            if (A(t)) return v(e, t);
                            if (n(t)) return function(e, t) {
                                var r = t.length;
                                m[r < 16 ? 144 + r : r <= 65535 ? 220 : 221](e, r);
                                for (var n = e.codec.encode, i = 0; i < r; i++) n(e, t[i])
                            }(e, t);
                            if (o.isUint64BE(t)) return function(e, t) {
                                m[207](e, t.toArray())
                            }(e, t);
                            if (a.isInt64BE(t)) return function(e, t) {
                                m[211](e, t.toArray())
                            }(e, t);
                            var i = e.codec.getExtPacker(t);
                            return i && (t = i(t)), t instanceof u ? function(e, t) {
                                var r = t.buffer,
                                    n = r.length,
                                    i = p[n] || (n < 255 ? 199 : n <= 65535 ? 200 : 201);
                                m[i](e, n), f[t.type](e), e.send(r)
                            }(e, t) : void E(e, t)
                        }

                        function r(e, t) {
                            m[192](e, t)
                        }

                        function i(e, t) {
                            var r = t.length;
                            m[r < 255 ? 196 : r <= 65535 ? 197 : 198](e, r), e.send(t)
                        }

                        function g(e, t) {
                            var r = Object.keys(t),
                                n = r.length;
                            m[n < 16 ? 128 + n : n <= 65535 ? 222 : 223](e, n);
                            var i = e.codec.encode;
                            r.forEach(function(r) {
                                i(e, r), i(e, t[r])
                            })
                        }
                        var m = c.getWriteToken(e),
                            w = e && e.useraw,
                            y = d && e && e.binarraybuffer,
                            A = y ? s.isArrayBuffer : s.isBuffer,
                            v = y ? function(e, t) {
                                i(e, new Uint8Array(t))
                            } : i,
                            E = h && e && e.usemap ? function(e, t) {
                                if (!(t instanceof Map)) return g(e, t);
                                var r = t.size;
                                m[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
                                var n = e.codec.encode;
                                t.forEach(function(t, r, i) {
                                    n(e, r), n(e, t)
                                })
                            } : g;
                        return {
                            boolean: function(e, t) {
                                m[t ? 195 : 194](e, t)
                            },
                            function: r,
                            number: function(e, t) {
                                var r = 0 | t;
                                return t !== r ? void m[203](e, t) : void m[-32 <= r && r <= 127 ? 255 & r : 0 <= r ? r <= 255 ? 204 : r <= 65535 ? 205 : 206 : -128 <= r ? 208 : -32768 <= r ? 209 : 210](e, r)
                            },
                            object: w ? function(e, r) {
                                return A(r) ? function(e, t) {
                                    var r = t.length;
                                    m[r < 32 ? 160 + r : r <= 65535 ? 218 : 219](e, r), e.send(t)
                                }(e, r) : void t(e, r)
                            } : t,
                            string: function(e) {
                                return function(t, r) {
                                    var n = r.length,
                                        i = 5 + 3 * n;
                                    t.offset = t.reserve(i);
                                    var o = t.buffer,
                                        a = e(n),
                                        s = t.offset + a;
                                    n = l.write.call(o, r, s);
                                    var c = e(n);
                                    if (a !== c) {
                                        var f = s + c - a,
                                            u = s + n;
                                        l.copy.call(o, o, f, s, u)
                                    }
                                    m[1 === c ? 160 + n : c <= 3 ? 215 + c : 219](t, n), t.offset += n
                                }
                            }(w ? function(e) {
                                return e < 32 ? 1 : e <= 65535 ? 3 : 5
                            } : function(e) {
                                return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
                            }),
                            symbol: r,
                            undefined: r
                        }
                    }
                }, {
                    "./bufferish": 8,
                    "./bufferish-proto": 6,
                    "./ext-buffer": 17,
                    "./write-token": 26,
                    "./write-uint8": 28,
                    "int64-buffer": 33,
                    isarray: 34
                }],
                28: [function(e, t, r) {
                    function n(e) {
                        return function(t) {
                            var r = t.reserve(1);
                            t.buffer[r] = e
                        }
                    }
                    for (var i = r.uint8 = new Array(256), o = 0; o <= 255; o++) i[o] = n(o)
                }, {}],
                29: [function(e, t, r) {
                    (function(t) {
                        "use strict";

                        function n() {
                            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                        }

                        function i(e, t) {
                            if (n() < t) throw new RangeError("Invalid typed array length");
                            return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = o.prototype : (null === e && (e = new o(t)), e.length = t), e
                        }

                        function o(e, t, r) {
                            if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, r);
                            if ("number" == typeof e) {
                                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                                return l(this, e)
                            }
                            return a(this, e, t, r)
                        }

                        function a(e, t, r, n) {
                            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                                return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), o.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = o.prototype : e = c(e, t), e
                            }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
                                if ("string" == typeof r && "" !== r || (r = "utf8"), !o.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                                var n = 0 | u(t, r),
                                    a = (e = i(e, n)).write(t, r);
                                return a !== n && (e = e.slice(0, a)), e
                            }(e, t, r) : function(e, t) {
                                if (o.isBuffer(t)) {
                                    var r = 0 | f(t.length);
                                    return 0 === (e = i(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                                }
                                if (t) {
                                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                                        return e != e
                                    }(t.length) ? i(e, 0) : c(e, t);
                                    if ("Buffer" === t.type && W(t.data)) return c(e, t.data)
                                }
                                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                            }(e, t)
                        }

                        function s(e) {
                            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                            if (e < 0) throw new RangeError('"size" argument must not be negative')
                        }

                        function l(e, t) {
                            if (s(t), e = i(e, t < 0 ? 0 : 0 | f(t)), !o.TYPED_ARRAY_SUPPORT)
                                for (var r = 0; r < t; ++r) e[r] = 0;
                            return e
                        }

                        function c(e, t) {
                            var r = t.length < 0 ? 0 : 0 | f(t.length);
                            e = i(e, r);
                            for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                            return e
                        }

                        function f(e) {
                            if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                            return 0 | e
                        }

                        function u(e, t) {
                            if (o.isBuffer(e)) return e.length;
                            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                            "string" != typeof e && (e = "" + e);
                            var r = e.length;
                            if (0 === r) return 0;
                            for (var n = !1;;) switch (t) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return r;
                                case "utf8":
                                case "utf-8":
                                case void 0:
                                    return j(e).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * r;
                                case "hex":
                                    return r >>> 1;
                                case "base64":
                                    return T(e).length;
                                default:
                                    if (n) return j(e).length;
                                    t = ("" + t).toLowerCase(), n = !0
                            }
                        }

                        function d(e, t, r) {
                            var n = e[t];
                            e[t] = e[r], e[r] = n
                        }

                        function h(e, t, r, n, i) {
                            if (0 === e.length) return -1;
                            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                                if (i) return -1;
                                r = e.length - 1
                            } else if (r < 0) {
                                if (!i) return -1;
                                r = 0
                            }
                            if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : p(e, t, r, n, i);
                            if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : p(e, [t], r, n, i);
                            throw new TypeError("val must be string, number or Buffer")
                        }

                        function p(e, t, r, n, i) {
                            function o(e, t) {
                                return 1 === s ? e[t] : e.readUInt16BE(t * s)
                            }
                            var a, s = 1,
                                l = e.length,
                                c = t.length;
                            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                if (e.length < 2 || t.length < 2) return -1;
                                s = 2, l /= 2, c /= 2, r /= 2
                            }
                            if (i) {
                                var f = -1;
                                for (a = r; a < l; a++)
                                    if (o(e, a) === o(t, -1 === f ? 0 : a - f)) {
                                        if (-1 === f && (f = a), a - f + 1 === c) return f * s
                                    } else -1 !== f && (a -= a - f), f = -1
                            } else
                                for (r + c > l && (r = l - c), a = r; a >= 0; a--) {
                                    for (var u = !0, d = 0; d < c; d++)
                                        if (o(e, a + d) !== o(t, d)) {
                                            u = !1;
                                            break
                                        } if (u) return a
                                }
                            return -1
                        }

                        function g(e, t, r, n) {
                            r = Number(r) || 0;
                            var i = e.length - r;
                            n ? (n = Number(n)) > i && (n = i) : n = i;
                            var o = t.length;
                            if (o % 2 != 0) throw new TypeError("Invalid hex string");
                            n > o / 2 && (n = o / 2);
                            for (var a = 0; a < n; ++a) {
                                var s = parseInt(t.substr(2 * a, 2), 16);
                                if (isNaN(s)) return a;
                                e[r + a] = s
                            }
                            return a
                        }

                        function m(e, t, r, n) {
                            return K(j(t, e.length - r), e, r, n)
                        }

                        function w(e, t, r, n) {
                            return K(function(e) {
                                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                                return t
                            }(t), e, r, n)
                        }

                        function y(e, t, r, n) {
                            return w(e, t, r, n)
                        }

                        function A(e, t, r, n) {
                            return K(T(t), e, r, n)
                        }

                        function v(e, t, r, n) {
                            return K(function(e, t) {
                                for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                                return o
                            }(t, e.length - r), e, r, n)
                        }

                        function E(e, t, r) {
                            return 0 === t && r === e.length ? V.fromByteArray(e) : V.fromByteArray(e.slice(t, r))
                        }

                        function b(e, t, r) {
                            r = Math.min(e.length, r);
                            for (var n = [], i = t; i < r;) {
                                var o, a, s, l, c = e[i],
                                    f = null,
                                    u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                if (i + u <= r) switch (u) {
                                    case 1:
                                        c < 128 && (f = c);
                                        break;
                                    case 2:
                                        128 == (192 & (o = e[i + 1])) && ((l = (31 & c) << 6 | 63 & o) > 127 && (f = l));
                                        break;
                                    case 3:
                                        o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && ((l = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (f = l));
                                        break;
                                    case 4:
                                        o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && ((l = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (f = l))
                                }
                                null === f ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += u
                            }
                            return function(e) {
                                var t = e.length;
                                if (t <= F) return String.fromCharCode.apply(String, e);
                                for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += F));
                                return r
                            }(n)
                        }

                        function I(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                            return n
                        }

                        function S(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                            return n
                        }

                        function R(e, t, r) {
                            var n = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                            for (var i = "", o = t; o < r; ++o) i += P(e[o]);
                            return i
                        }

                        function x(e, t, r) {
                            for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                            return i
                        }

                        function k(e, t, r) {
                            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                        }

                        function B(e, t, r, n, i, a) {
                            if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
                            if (r + n > e.length) throw new RangeError("Index out of range")
                        }

                        function O(e, t, r, n) {
                            t < 0 && (t = 65535 + t + 1);
                            for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
                        }

                        function M(e, t, r, n) {
                            t < 0 && (t = 4294967295 + t + 1);
                            for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
                        }

                        function C(e, t, r, n, i, o) {
                            if (r + n > e.length) throw new RangeError("Index out of range");
                            if (r < 0) throw new RangeError("Index out of range")
                        }

                        function U(e, t, r, n, i) {
                            return i || C(e, 0, r, 4), L.write(e, t, r, n, 23, 4), r + 4
                        }

                        function Y(e, t, r, n, i) {
                            return i || C(e, 0, r, 8), L.write(e, t, r, n, 52, 8), r + 8
                        }

                        function P(e) {
                            return e < 16 ? "0" + e.toString(16) : e.toString(16)
                        }

                        function j(e, t) {
                            t = t || 1 / 0;
                            for (var r, n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                                    if (!i) {
                                        if (r > 56319) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (a + 1 === n) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        i = r;
                                        continue
                                    }
                                    if (r < 56320) {
                                        (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                        continue
                                    }
                                    r = 65536 + (i - 55296 << 10 | r - 56320)
                                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                                if (i = null, r < 128) {
                                    if ((t -= 1) < 0) break;
                                    o.push(r)
                                } else if (r < 2048) {
                                    if ((t -= 2) < 0) break;
                                    o.push(r >> 6 | 192, 63 & r | 128)
                                } else if (r < 65536) {
                                    if ((t -= 3) < 0) break;
                                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                } else {
                                    if (!(r < 1114112)) throw new Error("Invalid code point");
                                    if ((t -= 4) < 0) break;
                                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                }
                            }
                            return o
                        }

                        function T(e) {
                            return V.toByteArray(function(e) {
                                if ((e = function(e) {
                                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                                }(e).replace(H, "")).length < 2) return "";
                                for (; e.length % 4 != 0;) e += "=";
                                return e
                            }(e))
                        }

                        function K(e, t, r, n) {
                            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                            return i
                        }
                        var V = e("base64-js"),
                            L = e("ieee754"),
                            W = e("isarray");
                        r.Buffer = o, r.SlowBuffer = function(e) {
                            return +e != e && (e = 0), o.alloc(+e)
                        }, r.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                            try {
                                var e = new Uint8Array(1);
                                return e.__proto__ = {
                                    __proto__: Uint8Array.prototype,
                                    foo: function() {
                                        return 42
                                    }
                                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                            } catch (e) {
                                return !1
                            }
                        }(), r.kMaxLength = n(), o.poolSize = 8192, o._augment = function(e) {
                            return e.__proto__ = o.prototype, e
                        }, o.from = function(e, t, r) {
                            return a(null, e, t, r)
                        }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                            value: null,
                            configurable: !0
                        })), o.alloc = function(e, t, r) {
                            return function(e, t, r, n) {
                                return s(t), t <= 0 ? i(e, t) : void 0 !== r ? "string" == typeof n ? i(e, t).fill(r, n) : i(e, t).fill(r) : i(e, t)
                            }(null, e, t, r)
                        }, o.allocUnsafe = function(e) {
                            return l(null, e)
                        }, o.allocUnsafeSlow = function(e) {
                            return l(null, e)
                        }, o.isBuffer = function(e) {
                            return !(null == e || !e._isBuffer)
                        }, o.compare = function(e, t) {
                            if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                            if (e === t) return 0;
                            for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                                if (e[i] !== t[i]) {
                                    r = e[i], n = t[i];
                                    break
                                } return r < n ? -1 : n < r ? 1 : 0
                        }, o.isEncoding = function(e) {
                            switch (String(e).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, o.concat = function(e, t) {
                            if (!W(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                            if (0 === e.length) return o.alloc(0);
                            var r;
                            if (void 0 === t)
                                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                            var n = o.allocUnsafe(t),
                                i = 0;
                            for (r = 0; r < e.length; ++r) {
                                var a = e[r];
                                if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                                a.copy(n, i), i += a.length
                            }
                            return n
                        }, o.byteLength = u, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                            var e = this.length;
                            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                            for (var t = 0; t < e; t += 2) d(this, t, t + 1);
                            return this
                        }, o.prototype.swap32 = function() {
                            var e = this.length;
                            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                            for (var t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2);
                            return this
                        }, o.prototype.swap64 = function() {
                            var e = this.length;
                            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                            for (var t = 0; t < e; t += 8) d(this, t, t + 7), d(this, t + 1, t + 6), d(this, t + 2, t + 5), d(this, t + 3, t + 4);
                            return this
                        }, o.prototype.toString = function() {
                            var e = 0 | this.length;
                            return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : function(e, t, r) {
                                var n = !1;
                                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                                if ((r >>>= 0) <= (t >>>= 0)) return "";
                                for (e || (e = "utf8");;) switch (e) {
                                    case "hex":
                                        return R(this, t, r);
                                    case "utf8":
                                    case "utf-8":
                                        return b(this, t, r);
                                    case "ascii":
                                        return I(this, t, r);
                                    case "latin1":
                                    case "binary":
                                        return S(this, t, r);
                                    case "base64":
                                        return E(this, t, r);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return x(this, t, r);
                                    default:
                                        if (n) throw new TypeError("Unknown encoding: " + e);
                                        e = (e + "").toLowerCase(), n = !0
                                }
                            }.apply(this, arguments)
                        }, o.prototype.equals = function(e) {
                            if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                            return this === e || 0 === o.compare(this, e)
                        }, o.prototype.inspect = function() {
                            var e = "",
                                t = r.INSPECT_MAX_BYTES;
                            return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                        }, o.prototype.compare = function(e, t, r, n, i) {
                            if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                            if (n >= i && t >= r) return 0;
                            if (n >= i) return -1;
                            if (t >= r) return 1;
                            if (this === e) return 0;
                            for (var a = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), l = Math.min(a, s), c = this.slice(n, i), f = e.slice(t, r), u = 0; u < l; ++u)
                                if (c[u] !== f[u]) {
                                    a = c[u], s = f[u];
                                    break
                                } return a < s ? -1 : s < a ? 1 : 0
                        }, o.prototype.includes = function(e, t, r) {
                            return -1 !== this.indexOf(e, t, r)
                        }, o.prototype.indexOf = function(e, t, r) {
                            return h(this, e, t, r, !0)
                        }, o.prototype.lastIndexOf = function(e, t, r) {
                            return h(this, e, t, r, !1)
                        }, o.prototype.write = function(e, t, r, n) {
                            if (void 0 === t) n = "utf8", r = this.length, t = 0;
                            else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                            else {
                                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                            }
                            var i = this.length - t;
                            if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                            n || (n = "utf8");
                            for (var o = !1;;) switch (n) {
                                case "hex":
                                    return g(this, e, t, r);
                                case "utf8":
                                case "utf-8":
                                    return m(this, e, t, r);
                                case "ascii":
                                    return w(this, e, t, r);
                                case "latin1":
                                case "binary":
                                    return y(this, e, t, r);
                                case "base64":
                                    return A(this, e, t, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return v(this, e, t, r);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    n = ("" + n).toLowerCase(), o = !0
                            }
                        }, o.prototype.toJSON = function() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        };
                        var F = 4096;
                        o.prototype.slice = function(e, t) {
                            var r, n = this.length;
                            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = o.prototype;
                            else {
                                var i = t - e;
                                r = new o(i, void 0);
                                for (var a = 0; a < i; ++a) r[a] = this[a + e]
                            }
                            return r
                        }, o.prototype.readUIntLE = function(e, t, r) {
                            e |= 0, t |= 0, r || k(e, t, this.length);
                            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                            return n
                        }, o.prototype.readUIntBE = function(e, t, r) {
                            e |= 0, t |= 0, r || k(e, t, this.length);
                            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                            return n
                        }, o.prototype.readUInt8 = function(e, t) {
                            return t || k(e, 1, this.length), this[e]
                        }, o.prototype.readUInt16LE = function(e, t) {
                            return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
                        }, o.prototype.readUInt16BE = function(e, t) {
                            return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
                        }, o.prototype.readUInt32LE = function(e, t) {
                            return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                        }, o.prototype.readUInt32BE = function(e, t) {
                            return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                        }, o.prototype.readIntLE = function(e, t, r) {
                            e |= 0, t |= 0, r || k(e, t, this.length);
                            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                        }, o.prototype.readIntBE = function(e, t, r) {
                            e |= 0, t |= 0, r || k(e, t, this.length);
                            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                        }, o.prototype.readInt8 = function(e, t) {
                            return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                        }, o.prototype.readInt16LE = function(e, t) {
                            t || k(e, 2, this.length);
                            var r = this[e] | this[e + 1] << 8;
                            return 32768 & r ? 4294901760 | r : r
                        }, o.prototype.readInt16BE = function(e, t) {
                            t || k(e, 2, this.length);
                            var r = this[e + 1] | this[e] << 8;
                            return 32768 & r ? 4294901760 | r : r
                        }, o.prototype.readInt32LE = function(e, t) {
                            return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                        }, o.prototype.readInt32BE = function(e, t) {
                            return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                        }, o.prototype.readFloatLE = function(e, t) {
                            return t || k(e, 4, this.length), L.read(this, e, !0, 23, 4)
                        }, o.prototype.readFloatBE = function(e, t) {
                            return t || k(e, 4, this.length), L.read(this, e, !1, 23, 4)
                        }, o.prototype.readDoubleLE = function(e, t) {
                            return t || k(e, 8, this.length), L.read(this, e, !0, 52, 8)
                        }, o.prototype.readDoubleBE = function(e, t) {
                            return t || k(e, 8, this.length), L.read(this, e, !1, 52, 8)
                        }, o.prototype.writeUIntLE = function(e, t, r, n) {
                            (e = +e, t |= 0, r |= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                            var i = 1,
                                o = 0;
                            for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                            return t + r
                        }, o.prototype.writeUIntBE = function(e, t, r, n) {
                            (e = +e, t |= 0, r |= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                            var i = r - 1,
                                o = 1;
                            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                            return t + r
                        }, o.prototype.writeUInt8 = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                        }, o.prototype.writeUInt16LE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                        }, o.prototype.writeUInt16BE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                        }, o.prototype.writeUInt32LE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4
                        }, o.prototype.writeUInt32BE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
                        }, o.prototype.writeIntLE = function(e, t, r, n) {
                            if (e = +e, t |= 0, !n) {
                                var i = Math.pow(2, 8 * r - 1);
                                B(this, e, t, r, i - 1, -i)
                            }
                            var o = 0,
                                a = 1,
                                s = 0;
                            for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                            return t + r
                        }, o.prototype.writeIntBE = function(e, t, r, n) {
                            if (e = +e, t |= 0, !n) {
                                var i = Math.pow(2, 8 * r - 1);
                                B(this, e, t, r, i - 1, -i)
                            }
                            var o = r - 1,
                                a = 1,
                                s = 0;
                            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                            return t + r
                        }, o.prototype.writeInt8 = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                        }, o.prototype.writeInt16LE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                        }, o.prototype.writeInt16BE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                        }, o.prototype.writeInt32LE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4
                        }, o.prototype.writeInt32BE = function(e, t, r) {
                            return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
                        }, o.prototype.writeFloatLE = function(e, t, r) {
                            return U(this, e, t, !0, r)
                        }, o.prototype.writeFloatBE = function(e, t, r) {
                            return U(this, e, t, !1, r)
                        }, o.prototype.writeDoubleLE = function(e, t, r) {
                            return Y(this, e, t, !0, r)
                        }, o.prototype.writeDoubleBE = function(e, t, r) {
                            return Y(this, e, t, !1, r)
                        }, o.prototype.copy = function(e, t, r, n) {
                            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                            if (0 === e.length || 0 === this.length) return 0;
                            if (t < 0) throw new RangeError("targetStart out of bounds");
                            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                            if (n < 0) throw new RangeError("sourceEnd out of bounds");
                            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                            var i, a = n - r;
                            if (this === e && r < t && t < n)
                                for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
                            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                                for (i = 0; i < a; ++i) e[i + t] = this[i + r];
                            else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
                            return a
                        }, o.prototype.fill = function(e, t, r, n) {
                            if ("string" == typeof e) {
                                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                                    var i = e.charCodeAt(0);
                                    i < 256 && (e = i)
                                }
                                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                                if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                            } else "number" == typeof e && (e &= 255);
                            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                            if (r <= t) return this;
                            var a;
                            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                                for (a = t; a < r; ++a) this[a] = e;
                            else {
                                var s = o.isBuffer(e) ? e : j(new o(e, n).toString()),
                                    l = s.length;
                                for (a = 0; a < r - t; ++a) this[a + t] = s[a % l]
                            }
                            return this
                        };
                        var H = /[^+\/0-9A-Za-z-_]/g
                        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    "base64-js": 30,
                    ieee754: 32,
                    isarray: 34
                }],
                30: [function(e, t, r) {
                    "use strict";

                    function n(e) {
                        var t = e.length;
                        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
                    }

                    function i(e) {
                        return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
                    }

                    function o(e, t, r) {
                        for (var n, o = [], a = t; a < r; a += 3) n = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(i(n));
                        return o.join("")
                    }
                    r.byteLength = function(e) {
                        return 3 * e.length / 4 - n(e)
                    }, r.toByteArray = function(e) {
                        var t, r, i, o, a, c, f = e.length;
                        a = n(e), c = new l(3 * f / 4 - a), i = a > 0 ? f - 4 : f;
                        var u = 0;
                        for (t = 0, r = 0; t < i; t += 4, r += 3) o = s[e.charCodeAt(t)] << 18 | s[e.charCodeAt(t + 1)] << 12 | s[e.charCodeAt(t + 2)] << 6 | s[e.charCodeAt(t + 3)], c[u++] = o >> 16 & 255, c[u++] = o >> 8 & 255, c[u++] = 255 & o;
                        return 2 === a ? (o = s[e.charCodeAt(t)] << 2 | s[e.charCodeAt(t + 1)] >> 4, c[u++] = 255 & o) : 1 === a && (o = s[e.charCodeAt(t)] << 10 | s[e.charCodeAt(t + 1)] << 4 | s[e.charCodeAt(t + 2)] >> 2, c[u++] = o >> 8 & 255, c[u++] = 255 & o), c
                    }, r.fromByteArray = function(e) {
                        for (var t, r = e.length, n = r % 3, i = "", s = [], l = 16383, c = 0, f = r - n; c < f; c += l) s.push(o(e, c, c + l > f ? f : c + l));
                        return 1 === n ? (t = e[r - 1], i += a[t >> 2], i += a[t << 4 & 63], i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i += a[t >> 10], i += a[t >> 4 & 63], i += a[t << 2 & 63], i += "="), s.push(i), s.join("")
                    };
                    for (var a = [], s = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, u = c.length; f < u; ++f) a[f] = c[f], s[c.charCodeAt(f)] = f;
                    s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
                }, {}],
                31: [function(e, t, r) {
                    ! function(e) {
                        function r(e) {
                            for (var t in a) e[t] = a[t];
                            return e
                        }

                        function n(e, t) {
                            var r, a = this;
                            if (arguments.length) {
                                if (t) {
                                    if (r = i(a, e, !0)) {
                                        if (!(r = r.filter(function(e) {
                                            return e !== t && e.originalListener !== t
                                        })).length) return n.call(a, e);
                                        a[o][e] = r
                                    }
                                } else if ((r = a[o]) && (delete r[e], !Object.keys(r).length)) return n.call(a)
                            } else delete a[o];
                            return a
                        }

                        function i(e, t, r) {
                            if (!r || e[o]) {
                                var n = e[o] || (e[o] = {});
                                return n[t] || (n[t] = [])
                            }
                        }
                        void 0 !== t && (t.exports = e);
                        var o = "listeners",
                            a = {
                                on: function(e, t) {
                                    return i(this, e).push(t), this
                                },
                                once: function(e, t) {
                                    function r() {
                                        n.call(o, e, r), t.apply(this, arguments)
                                    }
                                    var o = this;
                                    return r.originalListener = t, i(o, e).push(r), o
                                },
                                off: n,
                                emit: function(e, t) {
                                    var r = this,
                                        n = i(r, e, !0);
                                    if (!n) return !1;
                                    var o = arguments.length;
                                    if (1 === o) n.forEach(function(e) {
                                        e.call(r)
                                    });
                                    else if (2 === o) n.forEach(function(e) {
                                        e.call(r, t)
                                    });
                                    else {
                                        var a = Array.prototype.slice.call(arguments, 1);
                                        n.forEach(function(e) {
                                            e.apply(r, a)
                                        })
                                    }
                                    return !!n.length
                                }
                            };
                        r(e.prototype), e.mixin = r
                    }(function e() {
                        if (!(this instanceof e)) return new e
                    })
                }, {}],
                32: [function(e, t, r) {
                    r.read = function(e, t, r, n, i) {
                        var o, a, s = 8 * i - n - 1,
                            l = (1 << s) - 1,
                            c = l >> 1,
                            f = -7,
                            u = r ? i - 1 : 0,
                            d = r ? -1 : 1,
                            h = e[t + u];
                        for (u += d, o = h & (1 << -f) - 1, h >>= -f, f += s; f > 0; o = 256 * o + e[t + u], u += d, f -= 8);
                        for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + u], u += d, f -= 8);
                        if (0 === o) o = 1 - c;
                        else {
                            if (o === l) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                            a += Math.pow(2, n), o -= c
                        }
                        return (h ? -1 : 1) * a * Math.pow(2, o - n)
                    }, r.write = function(e, t, r, n, i, o) {
                        var a, s, l, c = 8 * o - i - 1,
                            f = (1 << c) - 1,
                            u = f >> 1,
                            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            h = n ? 0 : o - 1,
                            p = n ? 1 : -1,
                            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + u >= 1 ? d / l : d * Math.pow(2, 1 - u)) * l >= 2 && (a++, l /= 2), a + u >= f ? (s = 0, a = f) : a + u >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + h] = 255 & s, h += p, s /= 256, i -= 8);
                        for (a = a << i | s, c += i; c > 0; e[r + h] = 255 & a, h += p, a /= 256, c -= 8);
                        e[r + h - p] |= 128 * g
                    }
                }, {}],
                33: [function(e, t, r) {
                    (function(e) {
                        ! function(t) {
                            function r(e, r, A) {
                                function b(e, t, r, n) {
                                    return this instanceof b ? function(e, t, r, n, i) {
                                        if (m && w && (t instanceof w && (t = new m(t)), n instanceof w && (n = new m(n))), !(t || r || n || h)) return void(e.buffer = l(y, 0));
                                        if (!a(t, r)) {
                                            var o = h || Array;
                                            i = r, n = t, r = 0, t = new o(8)
                                        }
                                        e.buffer = t, e.offset = r |= 0, p !== typeof n && ("string" == typeof n ? function(e, t, r, n) {
                                            var i = 0,
                                                o = r.length,
                                                a = 0,
                                                s = 0;
                                            "-" === r[0] && i++;
                                            for (var l = i; i < o;) {
                                                var c = parseInt(r[i++], n);
                                                if (!(c >= 0)) break;
                                                s = s * n + c, a = a * n + Math.floor(s / v), s %= v
                                            }
                                            l && (a = ~a, s ? s = v - s : a++), S(e, t + x, a), S(e, t + k, s)
                                        }(t, r, n, i || 10) : a(n, i) ? s(t, r, n, i) : "number" == typeof i ? (S(t, r + x, n), S(t, r + k, i)) : n > 0 ? U(t, r, n) : n < 0 ? Y(t, r, n) : s(t, r, y, 0))
                                    }(this, e, t, r, n) : new b(e, t, r, n)
                                }

                                function I() {
                                    var e = this.buffer,
                                        t = this.offset,
                                        r = R(e, t + x),
                                        n = R(e, t + k);
                                    return A || (r |= 0), r ? r * v + n : n
                                }

                                function S(e, t, r) {
                                    e[t + C] = 255 & r, r >>= 8, e[t + M] = 255 & r, r >>= 8, e[t + O] = 255 & r, r >>= 8, e[t + B] = 255 & r
                                }

                                function R(e, t) {
                                    return e[t + B] * E + (e[t + O] << 16) + (e[t + M] << 8) + e[t + C]
                                }
                                var x = r ? 0 : 4,
                                    k = r ? 4 : 0,
                                    B = r ? 0 : 3,
                                    O = r ? 1 : 2,
                                    M = r ? 2 : 1,
                                    C = r ? 3 : 0,
                                    U = r ? c : u,
                                    Y = r ? f : d,
                                    P = b.prototype,
                                    j = "is" + e,
                                    T = "_" + j;
                                return P.buffer = void 0, P.offset = 0, P[T] = !0, P.toNumber = I, P.toString = function(e) {
                                    var t = this.buffer,
                                        r = this.offset,
                                        n = R(t, r + x),
                                        i = R(t, r + k),
                                        o = "",
                                        a = !A && 2147483648 & n;
                                    for (a && (n = ~n, i = v - i), e = e || 10;;) {
                                        var s = n % e * v + i;
                                        if (n = Math.floor(n / e), i = Math.floor(s / e), o = (s % e).toString(e) + o, !n && !i) break
                                    }
                                    return a && (o = "-" + o), o
                                }, P.toJSON = I, P.toArray = n, g && (P.toBuffer = i), m && (P.toArrayBuffer = o), b[j] = function(e) {
                                    return !(!e || !e[T])
                                }, t[e] = b, b
                            }

                            function n(e) {
                                var t = this.buffer,
                                    r = this.offset;
                                return h = null, !1 !== e && 0 === r && 8 === t.length && A(t) ? t : l(t, r)
                            }

                            function i(t) {
                                var r = this.buffer,
                                    n = this.offset;
                                if (h = g, !1 !== t && 0 === n && 8 === r.length && e.isBuffer(r)) return r;
                                var i = new g(8);
                                return s(i, 0, r, n), i
                            }

                            function o(e) {
                                var t = this.buffer,
                                    r = this.offset,
                                    n = t.buffer;
                                if (h = m, !1 !== e && 0 === r && n instanceof w && 8 === n.byteLength) return n;
                                var i = new m(8);
                                return s(i, 0, t, r), i.buffer
                            }

                            function a(e, t) {
                                var r = e && e.length;
                                return t |= 0, r && t + 8 <= r && "string" != typeof e[t]
                            }

                            function s(e, t, r, n) {
                                t |= 0, n |= 0;
                                for (var i = 0; i < 8; i++) e[t++] = 255 & r[n++]
                            }

                            function l(e, t) {
                                return Array.prototype.slice.call(e, t, t + 8)
                            }

                            function c(e, t, r) {
                                for (var n = t + 8; n > t;) e[--n] = 255 & r, r /= 256
                            }

                            function f(e, t, r) {
                                var n = t + 8;
                                for (r++; n > t;) e[--n] = 255 & -r ^ 255, r /= 256
                            }

                            function u(e, t, r) {
                                for (var n = t + 8; t < n;) e[t++] = 255 & r, r /= 256
                            }

                            function d(e, t, r) {
                                var n = t + 8;
                                for (r++; t < n;) e[t++] = 255 & -r ^ 255, r /= 256
                            }
                            var h, p = "undefined",
                                g = p !== typeof e && e,
                                m = p !== typeof Uint8Array && Uint8Array,
                                w = p !== typeof ArrayBuffer && ArrayBuffer,
                                y = [0, 0, 0, 0, 0, 0, 0, 0],
                                A = Array.isArray || function(e) {
                                    return !!e && "[object Array]" == Object.prototype.toString.call(e)
                                },
                                v = 4294967296,
                                E = 16777216;
                            r("Uint64BE", !0, !0), r("Int64BE", !0, !1), r("Uint64LE", !1, !0), r("Int64LE", !1, !1)
                        }("object" == typeof r && "string" != typeof r.nodeName ? r : this || {})
                    }).call(this, e("buffer").Buffer)
                }, {
                    buffer: 29
                }],
                34: [function(e, t, r) {
                    var n = {}.toString;
                    t.exports = Array.isArray || function(e) {
                        return "[object Array]" == n.call(e)
                    }
                }, {}]
            }, {}, [1])(1)
        }),
            function(e) {
            "use strict";

            function t() {}

            function r(e, t) {
                for (var r = e.length; r--;)
                    if (e[r].listener === t) return r;
                return -1
            }

            function n(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            var i = t.prototype,
                o = e.EventEmitter;
            i.getListeners = function(e) {
                var t, r, n = this._getEvents();
                if (e instanceof RegExp)
                    for (r in t = {}, n) n.hasOwnProperty(r) && e.test(r) && (t[r] = n[r]);
                else t = n[e] || (n[e] = []);
                return t
            }, i.flattenListeners = function(e) {
                var t, r = [];
                for (t = 0; t < e.length; t += 1) r.push(e[t].listener);
                return r
            }, i.getListenersAsObject = function(e) {
                var t, r = this.getListeners(e);
                return r instanceof Array && ((t = {})[e] = r), t || r
            }, i.addListener = function(e, t) {
                if (! function e(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
                }(t)) throw new TypeError("listener must be a function");
                var n, i = this.getListenersAsObject(e),
                    o = "object" == typeof t;
                for (n in i) i.hasOwnProperty(n) && -1 === r(i[n], t) && i[n].push(o ? t : {
                    listener: t,
                    once: !1
                });
                return this
            }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
                return this.getListeners(e), this
            }, i.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this
            }, i.removeListener = function(e, t) {
                var n, i, o = this.getListenersAsObject(e);
                for (i in o) o.hasOwnProperty(i) && -1 !== (n = r(o[i], t)) && o[i].splice(n, 1);
                return this
            }, i.off = n("removeListener"), i.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }, i.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }, i.manipulateListeners = function(e, t, r) {
                var n, i, o = e ? this.removeListener : this.addListener,
                    a = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (n = r.length; n--;) o.call(this, t, r[n]);
                else
                    for (n in t) t.hasOwnProperty(n) && (i = t[n]) && ("function" == typeof i ? o.call(this, n, i) : a.call(this, n, i));
                return this
            }, i.removeEvent = function(e) {
                var t, r = typeof e,
                    n = this._getEvents();
                if ("string" === r) delete n[e];
                else if (e instanceof RegExp)
                    for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
                else delete this._events;
                return this
            }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
                var r, n, i, o, a = this.getListenersAsObject(e);
                for (o in a)
                    if (a.hasOwnProperty(o))
                        for (r = a[o].slice(0), i = 0; i < r.length; i++) !0 === (n = r[i]).once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
                return this
            }, i.trigger = n("emitEvent"), i.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, i.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this
            }, i._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, i._getEvents = function() {
                return this._events || (this._events = {})
            }, t.noConflict = function() {
                return e.EventEmitter = o, t
            }, "function" == typeof define && define.amd ? define(function() {
                return t
            }) : "object" == typeof module && module.exports ? module.exports = t : e.EventEmitter = t
        }("undefined" != typeof window ? window : this || {});
        const l = window.EventEmitter,
              c = window.msgpack;
        delete window.EventEmitter, delete window.msgpack, window.msgpack = c;
        const f = c;
        let u = () => {};
        (e => window.requestAnimationFrame = ((...t) => {
            e((...e) => {
                const r = t[0](...e);
                return u(), r
            })
        }))(requestAnimationFrame);
        class d extends l {
            constructor(e) {
                super();
                const t = [{
                    id: 0,
                    type: 0,
                    name: "tool hammer",
                    desc: "tool for gathering all resources",
                    src: "hammer_1",
                    length: 140,
                    width: 140,
                    xOff: -3,
                    yOff: 18,
                    dmg: 25,
                    range: 65,
                    gather: 1,
                    speed: 300
                }, {
                    id: 1,
                    type: 0,
                    age: 2,
                    name: "hand axe",
                    desc: "gathers resources at a higher rate",
                    src: "axe_1",
                    length: 140,
                    width: 140,
                    xOff: 3,
                    yOff: 24,
                    dmg: 30,
                    spdMult: 1,
                    range: 70,
                    gather: 2,
                    speed: 400
                }, {
                    id: 2,
                    type: 0,
                    age: 8,
                    pre: 1,
                    name: "great axe",
                    desc: "deal more damage and gather more resources",
                    src: "great_axe_1",
                    length: 140,
                    width: 140,
                    xOff: -8,
                    yOff: 25,
                    dmg: 35,
                    spdMult: 1,
                    range: 75,
                    gather: 4,
                    speed: 400
                }, {
                    id: 3,
                    type: 0,
                    age: 2,
                    name: "short sword",
                    desc: "increased attack power but slower move speed",
                    src: "sword_1",
                    iPad: 1.3,
                    length: 130,
                    width: 210,
                    xOff: -8,
                    yOff: 46,
                    dmg: 35,
                    spdMult: .85,
                    range: 110,
                    gather: 1,
                    speed: 300
                }, {
                    id: 4,
                    type: 0,
                    age: 8,
                    pre: 3,
                    name: "katana",
                    desc: "greater range and damage",
                    src: "samurai_1",
                    iPad: 1.3,
                    length: 130,
                    width: 210,
                    xOff: -8,
                    yOff: 59,
                    dmg: 40,
                    spdMult: .8,
                    range: 118,
                    gather: 1,
                    speed: 300
                }, {
                    id: 5,
                    type: 0,
                    age: 2,
                    name: "polearm",
                    desc: "long range melee weapon",
                    src: "spear_1",
                    iPad: 1.3,
                    length: 130,
                    width: 210,
                    xOff: -8,
                    yOff: 53,
                    dmg: 45,
                    knock: .2,
                    spdMult: .82,
                    range: 142,
                    gather: 1,
                    speed: 700
                }, {
                    id: 6,
                    type: 0,
                    age: 2,
                    name: "bat",
                    desc: "fast long range melee weapon",
                    src: "bat_1",
                    iPad: 1.3,
                    length: 110,
                    width: 180,
                    xOff: -8,
                    yOff: 53,
                    dmg: 20,
                    knock: .7,
                    range: 110,
                    gather: 1,
                    speed: 300
                }, {
                    id: 7,
                    type: 0,
                    age: 2,
                    name: "daggers",
                    desc: "really fast short range weapon",
                    src: "dagger_1",
                    iPad: .8,
                    length: 110,
                    width: 110,
                    xOff: 18,
                    yOff: 0,
                    dmg: 20,
                    knock: .1,
                    range: 65,
                    gather: 1,
                    hitSlow: .1,
                    spdMult: 1.13,
                    speed: 100
                }, {
                    id: 8,
                    type: 0,
                    age: 2,
                    name: "stick",
                    desc: "great for gathering but very weak",
                    src: "stick_1",
                    length: 140,
                    width: 140,
                    xOff: 3,
                    yOff: 24,
                    dmg: 1,
                    spdMult: 1,
                    range: 70,
                    gather: 7,
                    speed: 400
                }, {
                    id: 9,
                    type: 1,
                    age: 6,
                    name: "hunting bow",
                    desc: "bow used for ranged combat and hunting",
                    src: "bow_1",
                    req: ["wood", 4],
                    length: 120,
                    width: 120,
                    xOff: -6,
                    yOff: 0,
                    projectile: 0,
                    spdMult: .75,
                    speed: 600
                }, {
                    id: 10,
                    type: 1,
                    age: 6,
                    name: "great hammer",
                    desc: "hammer used for destroying structures",
                    src: "great_hammer_1",
                    length: 140,
                    width: 140,
                    xOff: -9,
                    yOff: 25,
                    dmg: 10,
                    spdMult: .88,
                    range: 75,
                    sDmg: 7.5,
                    gather: 1,
                    speed: 400
                }, {
                    id: 11,
                    type: 1,
                    age: 6,
                    name: "wooden shield",
                    desc: "blocks projectiles and reduces melee damage",
                    src: "shield_1",
                    length: 120,
                    width: 120,
                    shield: .2,
                    xOff: 6,
                    yOff: 0,
                    spdMult: .7
                }, {
                    id: 12,
                    type: 1,
                    age: 8,
                    pre: 9,
                    name: "crossbow",
                    desc: "deals more damage and has greater range",
                    src: "crossbow_1",
                    req: ["wood", 5],
                    aboveHand: !0,
                    armS: .75,
                    length: 120,
                    width: 120,
                    xOff: -4,
                    yOff: 0,
                    projectile: 2,
                    spdMult: .7,
                    speed: 700
                }, {
                    id: 13,
                    type: 1,
                    age: 9,
                    pre: 12,
                    name: "repeater crossbow",
                    desc: "high firerate crossbow with reduced damage",
                    src: "crossbow_2",
                    req: ["wood", 10],
                    aboveHand: !0,
                    armS: .75,
                    length: 120,
                    width: 120,
                    xOff: -4,
                    yOff: 0,
                    projectile: 3,
                    spdMult: .7,
                    speed: 230
                }, {
                    id: 14,
                    type: 1,
                    age: 6,
                    name: "mc grabby",
                    desc: "steals resources from enemies",
                    src: "grab_1",
                    length: 130,
                    width: 210,
                    xOff: -8,
                    yOff: 53,
                    dmg: 0,
                    steal: 250,
                    knock: .2,
                    spdMult: 1.05,
                    range: 125,
                    gather: 0,
                    speed: 700
                }, {
                    id: 15,
                    type: 1,
                    age: 9,
                    pre: 12,
                    name: "musket",
                    desc: "slow firerate but high damage and range",
                    src: "musket_1",
                    req: ["stone", 10],
                    aboveHand: !0,
                    rec: .35,
                    armS: .6,
                    hndS: .3,
                    hndD: 1.6,
                    length: 205,
                    width: 205,
                    xOff: 25,
                    yOff: 0,
                    projectile: 5,
                    hideProjectile: !0,
                    spdMult: .6,
                    speed: 1500
                }],
                      r = {},
                      n = new Map;
                let i = [],
                    o = [],
                    a = null,
                    s = [],
                    l = [];
                this.reloads = new Map, this.cd = 0, this.turrets = new Map, this.socket = e, this.socket.addEventListener("message", ({
                    data: e
                }) => {
                    const [c, u] = f.decode(new Uint8Array(e));
                    switch (c) {
                        case "1":
                            r.id = u[0];
                            break;
                        case "2":
                            n.set(u[0][1], u[0]), this.turrets.set(u[0][1], 0), this.reloads.set(u[0][1], [0, 0]);
                            break;
                        case "33": {
                            const e = 1e3 / 9;
                            if (o = i, i = [], !u[0]) return;
                            for (let e = 0; e < u[0].length / 13; e++) i.push(u[0].slice(13 * e, 13 * e + 13));
                            const n = i.find(e => e[0] === r.id);
                            n && (r.data = n), this.cd = Math.max(this.cd - e, 0);
                            const c = new Set(i.map(e => e[0]));
                            i.forEach((r, n) => {
                                var i, a;
                                const s = o[n],
                                      l = this.reloads.get(r[0]);
                                if (Number.isNaN(Number(r[5]))) return;
                                const c = t[r[5]].type;
                                s && !Number.isNaN(Number(s[5])) && (null !== (i = t[s[5]].age) && void 0 !== i ? i : 1) > (null !== (a = t[r[5]].age) && void 0 !== a ? a : 1) && t[s[5]].type === c && (l[c] = 0), 0 !== l[c] && (l[c] = Math.max(l[c] - e, 0), 0 === l[c] && this.emit(r[0], t[r[5]]))
                            });
                            for (const [t, r] of this.reloads.entries()) c.has(t) || this.reloads.set(t, r.map(t => Math.max(t - e, 0)));
                            for (const [t, r] of this.turrets.entries()) this.turrets.set(t, Math.max(r - e, 0));
                            l.forEach(e => {
                                this.emit("attack", e);
                                const r = this.reloads.get(e[0]),
                                      n = i.find(t => t[0] === e[0]);
                                void 0 !== r && void 0 !== n && (r[t[e[2]].type] = t[e[2]].speed * (20 === Number(n[9]) ? .78 : 1))
                            }), s.forEach(e => {
                                if (1 === e[5] && Math.hypot(r.data[1] - e[0], r.data[2] - e[1]) < 5) return void(this.cd = 2500);
                                if (1 === e[5]) {
                                    const t = i.filter(t => Math.hypot(t[1] - e[0], t[2] - e[1]) < 5)[0];
                                    return void(void 0 !== t && (this.emit("turret", t), this.turrets.set(t[0], 2500)))
                                }
                                const n = i.filter(r => !Number.isNaN(Number(r[5])) && void 0 !== t[r[5]].projectile && t[r[5]].projectile === e[5] && r[3] === e[2] && Math.hypot(r[1] + 70 * Math.cos(r[3]) - e[0], r[2] + 70 * Math.sin(r[3]) - e[1]) < 5)[0];
                                if (void 0 !== n) {
                                    this.emit("attack", [n[0], 0, n[5]]);
                                    const e = this.reloads.get(n[0]);
                                    void 0 !== e && (e[1] = t[n[5]].speed * (20 === Number(n[9]) ? .78 : 1))
                                }
                            }), s = [], l = [], this.emit("update"), a = Date.now();
                            break
                        }
                        case "7":
                            l.push(u);
                            break;
                        case "13":
                            n.delete(u[0]), this.reloads.delete(u[0]), this.turrets.delete(u[0]);
                            break;
                        case "18":
                            s.push(u)
                    }
                })
            }
        }
        console._log = console.log, window.addEventListener("DOMContentLoaded", () => window.onbeforeunload = (() => {})), document.title = "x";
        let h = !1;
        const p = [{
            id: 0,
            name: "food",
            layer: 0
        }, {
            id: 1,
            name: "walls",
            place: !0,
            limit: 30,
            layer: 0
        }, {
            id: 2,
            name: "spikes",
            place: !0,
            limit: 15,
            layer: 0
        }, {
            id: 3,
            name: "mill",
            place: !0,
            limit: 7,
            layer: 1
        }, {
            id: 4,
            name: "mine",
            place: !0,
            limit: 1,
            layer: 0
        }, {
            id: 5,
            name: "trap",
            place: !0,
            limit: 6,
            layer: -1
        }, {
            id: 6,
            name: "booster",
            place: !0,
            limit: 12,
            layer: -1
        }, {
            id: 7,
            name: "turret",
            place: !0,
            limit: 2,
            layer: 1
        }, {
            id: 8,
            name: "watchtower",
            place: !0,
            limit: 12,
            layer: 1
        }, {
            id: 9,
            name: "buff",
            place: !0,
            limit: 4,
            layer: -1
        }, {
            id: 10,
            name: "spawn",
            place: !0,
            limit: 1,
            layer: -1
        }, {
            id: 11,
            name: "sapling",
            place: !0,
            limit: 2,
            layer: 0
        }, {
            id: 12,
            name: "blocker",
            place: !0,
            limit: 3,
            layer: -1
        }, {
            id: 13,
            name: "teleporter",
            place: !0,
            limit: 2,
            layer: -1
        }],
              g = [{
                  group: p[0],
                  name: "apple",
                  desc: "restores 20 health when consumed",
                  req: ["food", 10],
                  scale: 22,
                  holdOffset: 15
              }, {
                  age: 3,
                  group: p[0],
                  name: "cookie",
                  desc: "restores 40 health when consumed",
                  req: ["food", 15],
                  scale: 27,
                  holdOffset: 15
              }, {
                  age: 7,
                  group: p[0],
                  name: "cheese",
                  desc: "restores 30 health and another 50 over 5 seconds",
                  req: ["food", 25],
                  scale: 27,
                  holdOffset: 15
              }, {
                  group: p[1],
                  name: "wood wall",
                  desc: "provides protection for your village",
                  req: ["wood", 10],
                  projDmg: !0,
                  health: 380,
                  scale: 50,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 3,
                  group: p[1],
                  name: "stone wall",
                  desc: "provides improved protection for your village",
                  req: ["stone", 25],
                  health: 900,
                  scale: 50,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  pre: 1,
                  group: p[1],
                  name: "castle wall",
                  desc: "provides powerful protection for your village",
                  req: ["stone", 35],
                  health: 1500,
                  scale: 52,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  group: p[2],
                  name: "spikes",
                  desc: "damages enemies when they touch them",
                  req: ["wood", 20, "stone", 5],
                  health: 400,
                  dmg: 20,
                  scale: 49,
                  spritePadding: -23,
                  holdOffset: 8,
                  placeOffset: -5
              }, {
                  age: 5,
                  group: p[2],
                  name: "greater spikes",
                  desc: "damages enemies when they touch them",
                  req: ["wood", 30, "stone", 10],
                  health: 500,
                  dmg: 35,
                  scale: 52,
                  spritePadding: -23,
                  holdOffset: 8,
                  placeOffset: -5
              }, {
                  age: 9,
                  pre: 1,
                  group: p[2],
                  name: "poison spikes",
                  desc: "poisons enemies when they touch them",
                  req: ["wood", 35, "stone", 15],
                  health: 600,
                  dmg: 30,
                  pDmg: 5,
                  scale: 52,
                  spritePadding: -23,
                  holdOffset: 8,
                  placeOffset: -5
              }, {
                  age: 9,
                  pre: 2,
                  group: p[2],
                  name: "spinning spikes",
                  desc: "damages enemies when they touch them",
                  req: ["wood", 30, "stone", 20],
                  health: 500,
                  dmg: 45,
                  turnSpeed: .003,
                  scale: 52,
                  spritePadding: -23,
                  holdOffset: 8,
                  placeOffset: -5
              }, {
                  group: p[3],
                  name: "windmill",
                  desc: "generates gold over time",
                  req: ["wood", 50, "stone", 10],
                  health: 400,
                  pps: 1,
                  turnSpeed: .0016,
                  spritePadding: 25,
                  iconLineMult: 12,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: 5
              }, {
                  age: 5,
                  pre: 1,
                  group: p[3],
                  name: "faster windmill",
                  desc: "generates more gold over time",
                  req: ["wood", 60, "stone", 20],
                  health: 500,
                  pps: 1.5,
                  turnSpeed: .0025,
                  spritePadding: 25,
                  iconLineMult: 12,
                  scale: 47,
                  holdOffset: 20,
                  placeOffset: 5
              }, {
                  age: 8,
                  pre: 1,
                  group: p[3],
                  name: "power mill",
                  desc: "generates more gold over time",
                  req: ["wood", 100, "stone", 50],
                  health: 800,
                  pps: 2,
                  turnSpeed: .005,
                  spritePadding: 25,
                  iconLineMult: 12,
                  scale: 47,
                  holdOffset: 20,
                  placeOffset: 5
              }, {
                  age: 5,
                  group: p[4],
                  type: 2,
                  name: "mine",
                  desc: "allows you to mine stone",
                  req: ["wood", 20, "stone", 100],
                  iconLineMult: 12,
                  scale: 65,
                  holdOffset: 20,
                  placeOffset: 0
              }, {
                  age: 5,
                  group: p[11],
                  type: 0,
                  name: "sapling",
                  desc: "allows you to farm wood",
                  req: ["wood", 150],
                  iconLineMult: 12,
                  colDiv: .5,
                  scale: 110,
                  holdOffset: 50,
                  placeOffset: -15
              }, {
                  age: 4,
                  group: p[5],
                  name: "pit trap",
                  desc: "pit that traps enemies if they walk over it",
                  req: ["wood", 30, "stone", 30],
                  trap: !0,
                  ignoreCollision: !0,
                  hideFromEnemy: !0,
                  health: 500,
                  colDiv: .2,
                  scale: 50,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 4,
                  group: p[6],
                  name: "boost pad",
                  desc: "provides boost when stepped on",
                  req: ["stone", 20, "wood", 5],
                  ignoreCollision: !0,
                  boostSpeed: 1.5,
                  health: 150,
                  colDiv: .7,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  group: p[7],
                  doUpdate: !0,
                  name: "turret",
                  desc: "defensive structure that shoots at enemies",
                  req: ["wood", 200, "stone", 150],
                  health: 800,
                  projectile: 1,
                  shootRange: 700,
                  shootRate: 2200,
                  scale: 43,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  group: p[8],
                  name: "platform",
                  desc: "platform to shoot over walls and cross over water",
                  req: ["wood", 20],
                  ignoreCollision: !0,
                  zIndex: 1,
                  health: 300,
                  scale: 43,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  group: p[9],
                  name: "healing pad",
                  desc: "standing on it will slowly heal you",
                  req: ["wood", 30, "food", 10],
                  ignoreCollision: !0,
                  healCol: 15,
                  health: 400,
                  colDiv: .7,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 9,
                  group: p[10],
                  name: "spawn pad",
                  desc: "you will spawn here when you die but it will dissapear",
                  req: ["wood", 100, "stone", 100],
                  health: 400,
                  ignoreCollision: !0,
                  spawnPoint: !0,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  group: p[12],
                  name: "blocker",
                  desc: "blocks building in radius",
                  req: ["wood", 30, "stone", 25],
                  ignoreCollision: !0,
                  blocker: 300,
                  health: 400,
                  colDiv: .7,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: -5
              }, {
                  age: 7,
                  group: p[13],
                  name: "teleporter",
                  desc: "teleports you to a random point on the map",
                  req: ["wood", 60, "stone", 60],
                  ignoreCollision: !0,
                  teleport: !0,
                  health: 200,
                  colDiv: .7,
                  scale: 45,
                  holdOffset: 20,
                  placeOffset: -5
              }],
              m = [{
                  id: 0,
                  src: "cow_1",
                  killScore: 150,
                  health: 500,
                  weightM: .8,
                  speed: 95e-5,
                  turnSpeed: .001,
                  scale: 72,
                  drop: ["food", 50]
              }, {
                  id: 1,
                  src: "pig_1",
                  killScore: 200,
                  health: 800,
                  weightM: .6,
                  speed: 85e-5,
                  turnSpeed: .001,
                  scale: 72,
                  drop: ["food", 80]
              }, {
                  id: 2,
                  name: "Bull",
                  src: "bull_2",
                  hostile: !0,
                  dmg: 20,
                  killScore: 1e3,
                  health: 1800,
                  weightM: .5,
                  speed: 94e-5,
                  turnSpeed: 74e-5,
                  scale: 78,
                  viewRange: 800,
                  chargePlayer: !0,
                  drop: ["food", 100]
              }, {
                  id: 3,
                  name: "Bully",
                  src: "bull_1",
                  hostile: !0,
                  dmg: 20,
                  killScore: 2e3,
                  health: 2800,
                  weightM: .45,
                  speed: .001,
                  turnSpeed: 8e-4,
                  scale: 90,
                  viewRange: 900,
                  chargePlayer: !0,
                  drop: ["food", 400]
              }, {
                  id: 4,
                  name: "Wolf",
                  src: "wolf_1",
                  hostile: !0,
                  dmg: 8,
                  killScore: 500,
                  health: 300,
                  weightM: .45,
                  speed: .001,
                  turnSpeed: .002,
                  scale: 84,
                  viewRange: 800,
                  chargePlayer: !0,
                  drop: ["food", 200]
              }, {
                  id: 5,
                  name: "Quack",
                  src: "chicken_1",
                  dmg: 8,
                  killScore: 2e3,
                  noTrap: !0,
                  health: 300,
                  weightM: .2,
                  speed: .0018,
                  turnSpeed: .006,
                  scale: 70,
                  drop: ["food", 100]
              }, {
                  id: 6,
                  name: "MOOSTAFA",
                  nameScale: 50,
                  src: "enemy",
                  hostile: !0,
                  dontRun: !0,
                  fixedSpawn: !0,
                  spawnDelay: 6e4,
                  noTrap: !0,
                  colDmg: 100,
                  dmg: 40,
                  killScore: 8e3,
                  health: 18e3,
                  weightM: .4,
                  speed: 7e-4,
                  turnSpeed: .01,
                  scale: 80,
                  spriteMlt: 1.8,
                  leapForce: .9,
                  viewRange: 1e3,
                  hitRange: 210,
                  hitDelay: 1e3,
                  chargePlayer: !0,
                  drop: ["food", 100]
              }, {
                  id: 7,
                  name: "Treasure",
                  hostile: !0,
                  nameScale: 35,
                  src: "crate_1",
                  fixedSpawn: !0,
                  spawnDelay: 12e4,
                  colDmg: 200,
                  killScore: 5e3,
                  health: 2e4,
                  weightM: .1,
                  speed: 0,
                  turnSpeed: 0,
                  scale: 70,
                  spriteMlt: 1
              }, {
                  id: 8,
                  name: "MOOFIE",
                  src: "wolf_2",
                  hostile: !0,
                  fixedSpawn: !0,
                  dontRun: !0,
                  hitScare: 4,
                  spawnDelay: 3e4,
                  noTrap: !0,
                  nameScale: 35,
                  dmg: 10,
                  colDmg: 100,
                  killScore: 3e3,
                  health: 7e3,
                  weightM: .45,
                  speed: .0015,
                  turnSpeed: .002,
                  scale: 90,
                  viewRange: 800,
                  chargePlayer: !0,
                  drop: ["food", 1e3]
              }],
              w = Object.freeze([{
                  id: 0,
                  type: 0,
                  name: "tool hammer",
                  desc: "tool for gathering all resources",
                  src: "hammer_1",
                  length: 140,
                  width: 140,
                  xOff: -3,
                  yOff: 18,
                  dmg: 25,
                  range: 65,
                  gather: 1,
                  speed: 300
              }, {
                  id: 1,
                  type: 0,
                  age: 2,
                  name: "hand axe",
                  desc: "gathers resources at a higher rate",
                  src: "axe_1",
                  length: 140,
                  width: 140,
                  xOff: 3,
                  yOff: 24,
                  dmg: 30,
                  spdMult: 1,
                  range: 70,
                  gather: 2,
                  speed: 400
              }, {
                  id: 2,
                  type: 0,
                  age: 8,
                  pre: 1,
                  name: "great axe",
                  desc: "deal more damage and gather more resources",
                  src: "great_axe_1",
                  length: 140,
                  width: 140,
                  xOff: -8,
                  yOff: 25,
                  dmg: 35,
                  spdMult: 1,
                  range: 75,
                  gather: 4,
                  speed: 400
              }, {
                  id: 3,
                  type: 0,
                  age: 2,
                  name: "short sword",
                  desc: "increased attack power but slower move speed",
                  src: "sword_1",
                  iPad: 1.3,
                  length: 130,
                  width: 210,
                  xOff: -8,
                  yOff: 46,
                  dmg: 35,
                  spdMult: .85,
                  range: 110,
                  gather: 1,
                  speed: 300
              }, {
                  id: 4,
                  type: 0,
                  age: 8,
                  pre: 3,
                  name: "katana",
                  desc: "greater range and damage",
                  src: "samurai_1",
                  iPad: 1.3,
                  length: 130,
                  width: 210,
                  xOff: -8,
                  yOff: 59,
                  dmg: 40,
                  spdMult: .8,
                  range: 118,
                  gather: 1,
                  speed: 300
              }, {
                  id: 5,
                  type: 0,
                  age: 2,
                  name: "polearm",
                  desc: "long range melee weapon",
                  src: "spear_1",
                  iPad: 1.3,
                  length: 130,
                  width: 210,
                  xOff: -8,
                  yOff: 53,
                  dmg: 45,
                  knock: .2,
                  spdMult: .82,
                  range: 142,
                  gather: 1,
                  speed: 700
              }, {
                  id: 6,
                  type: 0,
                  age: 2,
                  name: "bat",
                  desc: "fast long range melee weapon",
                  src: "bat_1",
                  iPad: 1.3,
                  length: 110,
                  width: 180,
                  xOff: -8,
                  yOff: 53,
                  dmg: 20,
                  knock: .7,
                  range: 110,
                  gather: 1,
                  speed: 300
              }, {
                  id: 7,
                  type: 0,
                  age: 2,
                  name: "daggers",
                  desc: "really fast short range weapon",
                  src: "dagger_1",
                  iPad: .8,
                  length: 110,
                  width: 110,
                  xOff: 18,
                  yOff: 0,
                  dmg: 20,
                  knock: .1,
                  range: 65,
                  gather: 1,
                  hitSlow: .1,
                  spdMult: 1.13,
                  speed: 100
              }, {
                  id: 8,
                  type: 0,
                  age: 2,
                  name: "stick",
                  desc: "great for gathering but very weak",
                  src: "stick_1",
                  length: 140,
                  width: 140,
                  xOff: 3,
                  yOff: 24,
                  dmg: 1,
                  spdMult: 1,
                  range: 70,
                  gather: 7,
                  speed: 400
              }, {
                  id: 9,
                  type: 1,
                  age: 6,
                  name: "hunting bow",
                  desc: "bow used for ranged combat and hunting",
                  src: "bow_1",
                  req: ["wood", 4],
                  length: 120,
                  width: 120,
                  xOff: -6,
                  yOff: 0,
                  projectile: 0,
                  spdMult: .75,
                  speed: 600
              }, {
                  id: 10,
                  type: 1,
                  age: 6,
                  name: "great hammer",
                  desc: "hammer used for destroying structures",
                  src: "great_hammer_1",
                  length: 140,
                  width: 140,
                  xOff: -9,
                  yOff: 25,
                  dmg: 10,
                  spdMult: .88,
                  range: 75,
                  sDmg: 7.5,
                  gather: 1,
                  speed: 400
              }, {
                  id: 11,
                  type: 1,
                  age: 6,
                  name: "wooden shield",
                  desc: "blocks projectiles and reduces melee damage",
                  src: "shield_1",
                  length: 120,
                  width: 120,
                  shield: .2,
                  xOff: 6,
                  yOff: 0,
                  spdMult: .7
              }, {
                  id: 12,
                  type: 1,
                  age: 8,
                  pre: 9,
                  name: "crossbow",
                  desc: "deals more damage and has greater range",
                  src: "crossbow_1",
                  req: ["wood", 5],
                  aboveHand: !0,
                  armS: .75,
                  length: 120,
                  width: 120,
                  xOff: -4,
                  yOff: 0,
                  projectile: 2,
                  spdMult: .7,
                  speed: 700
              }, {
                  id: 13,
                  type: 1,
                  age: 9,
                  pre: 12,
                  name: "repeater crossbow",
                  desc: "high firerate crossbow with reduced damage",
                  src: "crossbow_2",
                  req: ["wood", 10],
                  aboveHand: !0,
                  armS: .75,
                  length: 120,
                  width: 120,
                  xOff: -4,
                  yOff: 0,
                  projectile: 3,
                  spdMult: .7,
                  speed: 230
              }, {
                  id: 14,
                  type: 1,
                  age: 6,
                  name: "mc grabby",
                  desc: "steals resources from enemies",
                  src: "grab_1",
                  length: 130,
                  width: 210,
                  xOff: -8,
                  yOff: 53,
                  dmg: 0,
                  steal: 250,
                  knock: .2,
                  spdMult: 1.05,
                  range: 125,
                  gather: 0,
                  speed: 700
              }, {
                  id: 15,
                  type: 1,
                  age: 9,
                  pre: 12,
                  name: "musket",
                  desc: "slow firerate but high damage and range",
                  src: "musket_1",
                  req: ["stone", 10],
                  aboveHand: !0,
                  rec: .35,
                  armS: .6,
                  hndS: .3,
                  hndD: 1.6,
                  length: 205,
                  width: 205,
                  xOff: 25,
                  yOff: 0,
                  projectile: 5,
                  hideProjectile: !0,
                  spdMult: .6,
                  speed: 1500
              }]),
              y = Object.freeze([{
                  indx: 0,
                  layer: 0,
                  src: "arrow_1",
                  dmg: 25,
                  speed: 1.6,
                  scale: 103,
                  range: 1e3
              }, {
                  indx: 1,
                  layer: 1,
                  dmg: 25,
                  scale: 20
              }, {
                  indx: 0,
                  layer: 0,
                  src: "arrow_1",
                  dmg: 35,
                  speed: 2.5,
                  scale: 103,
                  range: 1200
              }, {
                  indx: 0,
                  layer: 0,
                  src: "arrow_1",
                  dmg: 30,
                  speed: 2,
                  scale: 103,
                  range: 1200
              }, {
                  indx: 1,
                  layer: 1,
                  dmg: 16,
                  scale: 20
              }, {
                  indx: 0,
                  layer: 0,
                  src: "bullet_1",
                  dmg: 50,
                  speed: 3.6,
                  scale: 160,
                  range: 1400
              }]),
              A = [{
                  id: 45,
                  name: "Shame!",
                  dontSell: !0,
                  price: 0,
                  scale: 120,
                  desc: "hacks are for losers"
              }, {
                  id: 51,
                  name: "Moo Cap",
                  price: 0,
                  scale: 120,
                  desc: "coolest mooer around"
              }, {
                  id: 50,
                  name: "Apple Cap",
                  price: 0,
                  scale: 120,
                  desc: "apple farms remembers"
              }, {
                  id: 28,
                  name: "Moo Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 29,
                  name: "Pig Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 30,
                  name: "Fluff Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 36,
                  name: "Pandou Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 37,
                  name: "Bear Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 38,
                  name: "Monkey Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 44,
                  name: "Polar Head",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 35,
                  name: "Fez Hat",
                  price: 0,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 42,
                  name: "Enigma Hat",
                  price: 0,
                  scale: 120,
                  desc: "join the enigma army"
              }, {
                  id: 43,
                  name: "Blitz Hat",
                  price: 0,
                  scale: 120,
                  desc: "hey everybody i'm blitz"
              }, {
                  id: 49,
                  name: "Bob XIII Hat",
                  price: 0,
                  scale: 120,
                  desc: "like and subscribe"
              }, {
                  id: 57,
                  name: "Pumpkin",
                  price: 50,
                  scale: 120,
                  desc: "Spooooky"
              }, {
                  id: 8,
                  name: "Bummle Hat",
                  price: 100,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 2,
                  name: "Straw Hat",
                  price: 500,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 15,
                  name: "Winter Cap",
                  price: 600,
                  scale: 120,
                  desc: "allows you to move at normal speed in snow",
                  coldM: 1
              }, {
                  id: 5,
                  name: "Cowboy Hat",
                  price: 1e3,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 4,
                  name: "Ranger Hat",
                  price: 2e3,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 18,
                  name: "Explorer Hat",
                  price: 2e3,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 31,
                  name: "Flipper Hat",
                  price: 2500,
                  scale: 120,
                  desc: "have more control while in water",
                  watrImm: !0
              }, {
                  id: 1,
                  name: "Marksman Cap",
                  price: 3e3,
                  scale: 120,
                  desc: "increases arrow speed and range",
                  aMlt: 1.3
              }, {
                  id: 10,
                  name: "Bush Gear",
                  price: 3e3,
                  scale: 160,
                  desc: "allows you to disguise yourself as a bush"
              }, {
                  id: 48,
                  name: "Halo",
                  price: 3e3,
                  scale: 120,
                  desc: "no effect"
              }, {
                  id: 6,
                  name: "Soldier Helmet",
                  price: 4e3,
                  scale: 120,
                  desc: "reduces damage taken but slows movement",
                  spdMult: .94,
                  dmgMult: .75
              }, {
                  id: 23,
                  name: "Anti Venom Gear",
                  price: 4e3,
                  scale: 120,
                  desc: "makes you immune to poison",
                  poisonRes: 1
              }, {
                  id: 13,
                  name: "Medic Gear",
                  price: 5e3,
                  scale: 110,
                  desc: "slowly regenerates health over time",
                  healthRegen: 3
              }, {
                  id: 9,
                  name: "Miners Helmet",
                  price: 5e3,
                  scale: 120,
                  desc: "earn 1 extra gold per resource",
                  extraGold: 1
              }, {
                  id: 32,
                  name: "Musketeer Hat",
                  price: 5e3,
                  scale: 120,
                  desc: "reduces cost of projectiles",
                  projCost: .5
              }, {
                  id: 7,
                  name: "Bull Helmet",
                  price: 6e3,
                  scale: 120,
                  desc: "increases damage done but drains health",
                  healthRegen: -5,
                  dmgMultO: 1.5,
                  spdMult: .96
              }, {
                  id: 22,
                  name: "Emp Helmet",
                  price: 6e3,
                  scale: 120,
                  desc: "turrets won't attack but you move slower",
                  antiTurret: 1,
                  spdMult: .7
              }, {
                  id: 12,
                  name: "Booster Hat",
                  price: 6e3,
                  scale: 120,
                  desc: "increases your movement speed",
                  spdMult: 1.16
              }, {
                  id: 26,
                  name: "Barbarian Armor",
                  price: 8e3,
                  scale: 120,
                  desc: "knocks back enemies that attack you",
                  dmgK: .6
              }, {
                  id: 21,
                  name: "Plague Mask",
                  price: 1e4,
                  scale: 120,
                  desc: "melee attacks deal poison damage",
                  poisonDmg: 5,
                  poisonTime: 6
              }, {
                  id: 46,
                  name: "Bull Mask",
                  price: 1e4,
                  scale: 120,
                  desc: "bulls won't target you unless you attack them",
                  bullRepel: 1
              }, {
                  id: 14,
                  name: "Windmill Hat",
                  topSprite: !0,
                  price: 1e4,
                  scale: 120,
                  desc: "generates points while worn",
                  pps: 1.5
              }, {
                  id: 11,
                  name: "Spike Gear",
                  topSprite: !0,
                  price: 1e4,
                  scale: 120,
                  desc: "deal damage to players that damage you",
                  dmg: .45
              }, {
                  id: 53,
                  name: "Turret Gear",
                  topSprite: !0,
                  price: 1e4,
                  scale: 120,
                  desc: "you become a walking turret",
                  turret: {
                      proj: 1,
                      range: 700,
                      rate: 2500
                  },
                  spdMult: .7
              }, {
                  id: 20,
                  name: "Samurai Armor",
                  price: 12e3,
                  scale: 120,
                  desc: "increased attack speed and fire rate",
                  atkSpd: .78
              }, {
                  id: 58,
                  name: "Dark Knight",
                  price: 12e3,
                  scale: 120,
                  desc: "restores health when you deal damage",
                  healD: .4
              }, {
                  id: 27,
                  name: "Scavenger Gear",
                  price: 15e3,
                  scale: 120,
                  desc: "earn double points for each kill",
                  kScrM: 2
              }, {
                  id: 40,
                  name: "Tank Gear",
                  price: 15e3,
                  scale: 120,
                  desc: "increased damage to buildings but slower movement",
                  spdMult: .3,
                  bDmg: 3.3
              }, {
                  id: 52,
                  name: "Thief Gear",
                  price: 15e3,
                  scale: 120,
                  desc: "steal half of a players gold when you kill them",
                  goldSteal: .5
              }, {
                  id: 55,
                  name: "Bloodthirster",
                  price: 2e4,
                  scale: 120,
                  desc: "Restore Health when dealing damage. And increased damage",
                  healD: .25,
                  dmgMultO: 1.2
              }, {
                  id: 56,
                  name: "Assassin Gear",
                  price: 2e4,
                  scale: 120,
                  desc: "Go invisible when not moving. Can't eat. Increased speed",
                  noEat: !0,
                  spdMult: 1.1,
                  invisTimer: 1e3
              }],
              v = [{
                  id: 12,
                  name: "Snowball",
                  price: 1e3,
                  scale: 105,
                  xOff: 18,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 9,
                  name: "Tree Cape",
                  price: 1e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 10,
                  name: "Stone Cape",
                  price: 1e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 3,
                  name: "Cookie Cape",
                  price: 1500,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 8,
                  name: "Cow Cape",
                  price: 2e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 11,
                  name: "Monkey Tail",
                  price: 2e3,
                  scale: 97,
                  xOff: 25,
                  desc: "Super speed but reduced damage",
                  spdMult: 1.35,
                  dmgMultO: .2,
                  a: !0
              }, {
                  id: 17,
                  name: "Apple Basket",
                  price: 3e3,
                  scale: 80,
                  xOff: 12,
                  desc: "slowly regenerates health over time",
                  healthRegen: 1,
                  a: !0
              }, {
                  id: 6,
                  name: "Winter Cape",
                  price: 3e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 4,
                  name: "Skull Cape",
                  price: 4e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 5,
                  name: "Dash Cape",
                  price: 5e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 2,
                  name: "Dragon Cape",
                  price: 6e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 1,
                  name: "Super Cape",
                  price: 8e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 7,
                  name: "Troll Cape",
                  price: 8e3,
                  scale: 90,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 14,
                  name: "Thorns",
                  price: 1e4,
                  scale: 115,
                  xOff: 20,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 15,
                  name: "Blockades",
                  price: 1e4,
                  scale: 95,
                  xOff: 15,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 20,
                  name: "Devils Tail",
                  price: 1e4,
                  scale: 95,
                  xOff: 20,
                  desc: "no effect",
                  a: !0
              }, {
                  id: 16,
                  name: "Sawblade",
                  price: 12e3,
                  scale: 90,
                  spin: !0,
                  xOff: 0,
                  desc: "deal damage to players that damage you",
                  dmg: .15,
                  a: !0
              }, {
                  id: 13,
                  name: "Angel Wings",
                  price: 15e3,
                  scale: 138,
                  xOff: 22,
                  desc: "slowly regenerates health over time",
                  healthRegen: 3,
                  a: !0
              }, {
                  id: 19,
                  name: "Shadow Wings",
                  price: 15e3,
                  scale: 138,
                  xOff: 22,
                  desc: "increased movement speed",
                  spdMult: 1.1,
                  a: !0
              }, {
                  id: 18,
                  name: "Blood Wings",
                  price: 2e4,
                  scale: 178,
                  xOff: 26,
                  desc: "restores health when you deal damage",
                  healD: .2,
                  a: !0
              }, {
                  id: 21,
                  name: "Corrupt X Wings",
                  price: 2e4,
                  scale: 178,
                  xOff: 26,
                  desc: "deal damage to players that damage you",
                  dmg: .25,
                  a: !0
              }],
              E = [{
                  id: 0,
                  src: "",
                  xp: 0,
                  val: 1
              }, {
                  id: 1,
                  src: "_g",
                  xp: 3e3,
                  val: 1.1
              }, {
                  id: 2,
                  src: "_d",
                  xp: 4e3,
                  val: 1.18
              }, {
                  id: 3,
                  src: "_r",
                  poison: !0,
                  xp: 5e3,
                  val: 1.18
              }];
        window._cx = null, window._cy = null;
        window.WebSocket = class extends WebSocket {
            constructor(...r) {
                super(...r), null === localStorage.getItem("deft") && localStorage.setItem("deft", btoa(JSON.stringify({
                    AUTO_BUY: 1,
                    NIGHT_MODE: 0,
                    AUTO_UPGRADE: !1,
                    AUTO_BREAK: 1,
                    SILENT: !1,
                    UTIL_ON: !1,
                    SPIN_ON: 0,
                    HEAL_ON: 1,
                    LOOP_ON: !1,
                    MULTI_ON: 0,
                    INVIS_ITEM: 1,
                    INVIS_PROJECTILE: 1,
                    ASSASSIN: !1
                })));
                const n = JSON.parse(atob(localStorage.getItem("deft")));
                let i = null,
                    o = /sandbox.moomoo.io/.test(window.location.href),
                    a = null,
                    l = [null, null],
                    f = [null, null],
                    p = n.INVIS_PROJECTILE,
                    b = n.AUTO_BREAK,
                    I = n.AUTO_UPGRADE,
                    S = 0,
                    R = n.AUTO_BUY,
                    x = 0;
                const k = () => "chatbox" === document.activeElement.id.toLowerCase() || "allianceinput" === document.activeElement.id.toLowerCase(),
                      B = (e, r = t.size) => {
                          var n;
                          return e = (e % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI), e = Math.round(e / (2 * Math.PI / r)), null !== (n = t.get(e)) && void 0 !== n ? n : null
                      };
                let O = null;
                document.querySelector("#woodDisplay"), document.querySelector("#stoneDisplay"), document.querySelector("#foodDisplay"), document.querySelector("#scoreDisplay"), document.querySelector("#killCounter");
                let M = n.INVIS_ITEM;
                window.C_DIST = 75, window.DIST = 225;
                let C = o ? [v.find(e => "Monkey Tail" === e.name), A.find(e => "Winter Cap" === e.name), A.find(e => "Flipper Hat" === e.name), A.find(e => "Bull Helmet" === e.name), A.find(e => "Soldier Helmet" === e.name), A.find(e => "Booster Hat" === e.name), A.find(e => "Tank Gear" === e.name), A.find(e => "Emp Helmet" === e.name), A.find(e => "Turret Gear" === e.name), A.find(e => "Spike Gear" === e.name), A.find(e => "Barbarian Armor" === e.name), A.find(e => "Samurai Armor" === e.name), v.find(e => "Blood Wings" === e.name), v.find(e => "Corrupt X Wings" === e.name), A.find(e => "Marksman Cap" === e.name), A.find(e => "Bloodthirster" === e.name), A.find(e => "Assassin Gear" === e.name)] : [v.find(e => "Monkey Tail" === e.name), A.find(e => "Winter Cap" === e.name), A.find(e => "Bull Helmet" === e.name), A.find(e => "Flipper Hat" === e.name), A.find(e => "Tank Gear" === e.name), A.find(e => "Booster Hat" === e.name), A.find(e => "Soldier Helmet" === e.name), A.find(e => "Turret Gear" === e.name), A.find(e => "Spike Gear" === e.name), A.find(e => "Barbarian Armor" === e.name), A.find(e => "Emp Helmet" === e.name), A.find(e => "Samurai Armor" === e.name), A.find(e => "Marksman Cap" === e.name), v.find(e => "Blood Wings" === e.name), v.find(e => "Corrupt X Wings" === e.name), A.find(e => "Assassin Gear" === e.name), A.find(e => "Bloodthirster" === e.name)],
                    U = null,
                    Y = null,
                    P = [],
                    j = () => {},
                    T = [],
                    K = !1,
                    V = n.SILENT;
                const L = new Map;
                let W = [],
                    F = {},
                    H = new Set,
                    Q = null,
                    q = null,
                    X = 0,
                    z = null,
                    N = [0],
                    D = [0, 3, 6, 10],
                    J = null,
                    G = 100,
                    Z = !1,
                    _ = !1,
                    $ = !1,
                    ee = !1,
                    te = !1,
                    re = !1,
                    ne = [],
                    ie = n.ASSASSIN;
                const oe = new d(this),
                      ae = {
                          DAGGER_SPIKE_TRAP: [7, 20, 31, 27, 10, 38, 28, 25],
                          DAGGER_SPIKE_BOOST: [7, 20, 32, 27, 10, 38, 28, 25],
                          POLEARM_INSTA_TRAP: [5, 20, 31, 23, 10, 38, 28, 13],
                          POLEARM_INSTA_BOOST: [5, 20, 32, 23, 10, 38, 28, 13],
                          KATANA_INSTA_TRAP: [7, 20, 31, 23, 10, 38, 4, 15],
                          KATANA_INSTA_BOOST: [7, 20, 32, 23, 10, 38, 4, 15],
                          KATANA_SPIKE_TRAP: [7, 20, 31, 27, 10, 38, 4, 25],
                          KATANA_SPIKE_BOOST: [7, 20, 32, 27, 10, 38, 4, 25]
                      };
                let se, le, ce, fe, ue = o ? ae.DAGGER_SPIKE_BOOST : ae.KATANA_INSTA_TRAP,
                    de = ue,
                    he = n.HEAL_ON,
                    pe = n.LOOP_ON,
                    ge = [51, 50, 28, 29, 30, 36, 37, 38, 44, 35, 42, 43, 49],
                    me = [],
                    we = null,
                    ye = n.SPIN_ON,
                    Ae = n.MULTI_ON,
                    ve = 0,
                    Ee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    be = {
                        wood: null,
                        stone: null,
                        food: null,
                        gold: null
                    },
                    Ie = Object.assign({}, be),
                    Se = O,
                    Re = new Map;
                null === localStorage.getItem("cpst") && localStorage.setItem("cpst", 1);
                let xe = Number(localStorage.getItem("cpst"));
                const ke = document.getElementById("gameCanvas"),
                      Be = ke.getContext("2d");
                window.nightTarget = [24, 47, 82, .3], u = (() => {
                    x += ((S ? 1 : 0) - x) / 40;
                    const e = Be.getTransform();
                    Be.setTransform(1, 0, 0, 1, 0, 0), Be.fillStyle = `rgba(${nightTarget.map(e=>e*x).join(", ")})`, Be.fillRect(0, 0, ke.width, ke.height), Be.setTransform(e)
                });
                let Oe = 0,
                    Me = 0,
                    Ce = !1,
                    Ue = !1;
                ke.addEventListener("mousemove", ({
                    clientX: e,
                    clientY: t
                }) => {
                    se = e, le = t, Oe = Math.atan2(le - fe / 2, se - ce / 2), Me += je(Me, Oe) / 2.5
                }), window.addEventListener("resize", () => {
                    ce = ke.clientWidth, fe = ke.clientHeight
                }), ce = ke.clientWidth, fe = ke.clientHeight;
                let Ye = Math.PI / 25,
                    Pe = !1;
                const je = (e, t) => (t - e) % (2 * Math.PI) * 2 % (2 * Math.PI) - (t - e) % (2 * Math.PI),
                      Te = (e, t) => {
                          if (t) {
                              if (Re.has(e)) return;
                              Re.set(e, [...Array(xe)].map(() => setInterval(() => {
                                  te && !Pe || (qe("5", X, !0), qe("5", e, null), qe("c", 1, Me + (Math.random() > .5 ? -Ye : Ye)), qe("5", X, !0), qe("c", Pe ? 0 : null !== i ? 1 : re ? 1 : 0), null !== z && qe("5", z, null), Ge && qe("2", B(xt)), null !== De && qe("2", De))
                              }, 0)))
                          } else Me = Oe, Re.get(e) && Re.get(e).map(e => clearInterval(e)), Re.delete(e)
                      };
                let Ke = !1,
                    Ve = [];
                window.boostSpike = ()=>{Ke = !0;setTimeout(()=>{Ke = !1;qe("33",null)},1000)};
                window.addEventListener("keydown", ({
                    which: e,
                    key: t
                }) => {
                    if (k()) return;
                    const r = D.filter(e => 13 !== e && 14 !== e);
                    "q" === t && Te(r[0], !0), "v" === t && Te(r[2], !0), "f" === t && r[4] && Te(r[4], !0), "c" === t && Te(r[3], !0), "z" === t && Te(r[1], !0), "h" === t && r[5] && Te(r[5], !0), "g" === t && r[6] && Te(r[6], !0), "." === t && r[4] && (Ke = !0)
                }), window.addEventListener("keyup", ({
                    which: e,
                    key: t
                }) => {
                    const r = D.filter(e => 13 !== e && 14 !== e);
                    "q" === t && Te(r[0], !1), "v" === t && Te(r[2], !1), "f" === t && r[4] && Te(r[4], !1), "c" === t && Te(r[3], !1), "z" === t && Te(r[1], !1), "h" === t && r[5] && Te(r[5], !1), "g" === t && r[6] && Te(r[6], !1), "." === t && (Ke = !1, !k() && (qe("33", null), Rt = null))
                }), setInterval(() => {
                    if ((null === we || Date.now() - we >= 600) && me.length > 0) {
                        const e = me.shift();
                        Le(...Array.isArray(e) ? e : [e])
                    }
                }, 100);
                const Le = (e, t = !0) => {
                    if ("string" == typeof e) {
                        if (e.startsWith(".")) {
                            const [t, ...r] = e.substring(1).split(" -");
                            switch (t) {
                                case "r":
                                    window.recalibrate = function(){[...Re.values()].map(e => e.map(e => clearInterval(e))), Re = new Map, tt && (oe.off("update", tt), tt = null), qe("33", null), Rt = null, te = !1, Pe = !1, ee = !1, K = !1, Ce = !1, Ue = !1, j(), j = (() => {}), $ = !1, re = !1, De = null, $e = !1, i = null, Pt = !1, jt = 0, Tt = null, Kt = !1, qe("c", 0), Vt = !1, V || me.push("Recalibrated.")};
                                    window.recalibrate()
                                    break;
                                case "c":
                                    "x-z3r0" === Ze && window.crs();
                                    break;
                                case "t":
                                    if ("string" != typeof r[0]) return;
                                    if (["autotriplemill", "atm", "autotriplewindmill", "tm", "am", "mill", "windmill", "triple"].includes(r[0].toLowerCase())) V || me.push(`AutoTripleMill ${kt?"disabled":"enabled"}.`), kt = !kt;
                                    if (["boost","boostspike","bs","autoboost","autoboostspike","abs"].includes(r[0].toLowerCase())) BS = !BS  && me.push(`AutoBoostSpike ${BS?"disabled":"enabled"}.`)
                                    if (["ai","auto","autoinsta","autoinstakill","autoinstantkill","aik"].includes(r[0].toLowerCase())) aI = !aI && me.push(`AutoInsta ${aI?"disabled":"enabled"}.`)
                                    else if (["autospin", "as", "autoplayerspin", "spin"].includes(r[0].toLowerCase())) V || me.push(`AutoPlayerSpin ${ye?"disabled":"enabled"}.`), ye = !ye;
                                    else if (["sm","scroll","scrollmode"].includes(r[0].toLowerCase())) sm = !sm && me.push(`Scroll Mode: ${sm?"disabled":"enabled"}.`);
                                    else if (["autoheal", "heal", "ah"].includes(r[0].toLowerCase())) V || me.push(`AutoHeal ${he?"disabled":"enabled"}.`), he = !he, Ct();
                                    else if (["hat", "hatloop", "hatlooper", "loop", "looper", "hatsloop", "hatlooper", "hl", "hats"].includes(r[0].toLowerCase())) V || me.push(`HatLoop ${pe?"disabled":"enabled"}.`), pe = !pe;
                                    else if (["mh", "multihit", "multi", "hit", "hm", "hitmulti", "360hit", "hitall"].includes(r[0].toLowerCase())) V || me.push(`MultiHit ${Ae?"disabled":"enabled"}.`), Ae = !Ae;
                                    else if (["wr","wa","weaponarc","weaponradius","wrad","w"].includes(r[0].toLowerCase())) MVH = !MVH;
                                    else if (["vzto","virus","vt","virustick","zero","zt","vzt","viruszerotick"].includes(r[0].toLowerCase())) me.push(`VirusZeroOptimisations ${voo?"disabled":"enabled"}`),voo=!voo,autoPush=!autoPush;
                                    else if (["aq","autoq","autofast","autofastheal","qholder","qh","afh","fh"].includes(r[0].toLowerCase())) autoq=parseInt(r[0].split(" ")[2]),me.push(`AutoQ Speed:${120-autoq}.`);
                                    else if (["g", "gi", "ghost", "ghoststructures", "ghoststruct", "ghoststructs", "ghoststructure", "ghostitem", "ghostitems", "gs"].includes(r[0].toLowerCase())) V || me.push(`GhostItems ${M?"disabled":"enabled"}.`), M = !M;
                                    else if (["p", "ip", "gp", "ghostprojectiles", "ghostprojectile", "ghostproj", "ghostp"].includes(r[0].toLowerCase())) V || me.push(`GhostProjectiles ${p?"disabled":"enabled"}.`), p = !p;
                                    else if (["ag"].includes(r[0].toLowerCase())) V || me.push(`AssassinGear ${ie?"disabled":"enabled"}.`), ie = !ie;
                                    else if (["ac"].includes(r[0].toLowerCase())) play()
                                    else if (["ab"].includes(r[0].toLowerCase())) V || me.push(`AutoBreak ${b?"disabled":"enabled"}.`), (b = !b) || null === i || (i = null, Pt = !1, jt = 0, Tt = null, Kt = !1, qe("c", re ? 1 : 0));
                                    else if (["au"].includes(r[0].toLowerCase())) {
                                        V || me.push(`AutoUpgrade ${I?"disabled":"enabled"}.`), I = !I;
                                        for (let e = 0; e <= It - 2; e++) qe("6", ue[e])
                                    } else if (["n"].includes(r[0].toLowerCase())) V || me.push(`NightMode ${S?"disabled":"enabled"}.`), S = !S;
                                    else if (["hb"].includes(r[0].toLowerCase()) && (V || me.push(`AutoBuy ${R?"disabled":"enabled"}.`), R = !R)) {
                                        let e = 0,
                                            t = be.gold;
                                        for (; void 0 !== C[e] && t >= C[e].price;) C[e].a ? St.buyAccessory(C[e].id) : St.buyHat(C[e].id), t -= C[e].price, e++
                                    }
                                    break;
                                case "s":
                                    if ("string" == typeof r[0] && "string" == typeof r[1] && ["as", "asp"].includes(r[0].toLowerCase()) && /[0-9]/.test(r[1]) && /[0-9]/.test(r[2]) && (window.C_DIST = r[1], window.DIST = r[2], V || me.push(`AutoSpikeRange set to ${r[1]}-${r[2]}.`)), "string" == typeof r[0] && "string" == typeof r[1] && ["cps", "clickspersecond", "click", "clicks", "clicksps", "clickps", "clicksecond", "clickssecond", "intervals"].includes(r[0].toLowerCase()) && /[0-9]/.test(r[1]) && (xe = Number(r[1]), localStorage.setItem("cpst", r[1]), V || me.push(`PlaceThreadCount set to ${xe}.`)), "string" == typeof r[0] && "string" == typeof r[1] && ["da"].includes(r[0].toLowerCase()) && /[0-9]/.test(r[1]) && (window.defaultAccessory = Number(r[1]), V || me.push(`DefaultAccessory set to ${Number(r[1])}.`)), "string" == typeof r[0] && "string" == typeof r[1] && ["dh"].includes(r[0].toLowerCase()) && /[0-9]/.test(r[1]) && (window.defaultHat = Number(r[1]), V || me.push(`DefaultHat set to ${Number(r[1])}.`)), "string" == typeof r[0] && "string" == typeof r[1] && ["p", "path", "paths", "u", "upgrades", "upgrade", "upgradepath", "levelpath", "lpath", "upath"].includes(r[0].toLowerCase()) && "string" == typeof r[1]) {
                                        const e = new Map([
                                            ["k", "katana"],
                                            ["katana", "katana"],
                                            ["kat", "katana"],
                                            ["katan", "katana"],
                                            ["kata", "katana"],
                                            ["katanas", "katana"],
                                            ["sword", "katana"],
                                            ["sword", "katana"],
                                            ["p", "polearm"],
                                            ["s", "polearm"],
                                            ["pole", "polearm"],
                                            ["arm", "polearm"],
                                            ["spear", "polearm"],
                                            ["polearm", "polearm"],
                                            ["d", "dagger"],
                                            ["dag", "dagger"],
                                            ["swords", "dagger"],
                                            ["dags", "dagger"],
                                            ["daggs", "dagger"],
                                            ["daggers", "dagger"],
                                            ["dgs", "dagger"],
                                            ["dg", "dagger"],
                                            ["dagger", "dagger"]
                                        ]),
                                              t = new Map([
                                                  ["b", "boost"],
                                                  ["bost", "boost"],
                                                  ["boostpad", "boost"],
                                                  ["pad", "boost"],
                                                  ["boost", "boost"],
                                                  ["t", "trap"],
                                                  ["tr", "trap"],
                                                  ["pittrap", "trap"],
                                                  ["pitrap", "trap"],
                                                  ["trap", "trap"]
                                              ]),
                                              n = new Map([
                                                  ["hammer", "spike"],
                                                  ["hammers", "spike"],
                                                  ["ham", "spike"],
                                                  ["spike", "spike"],
                                                  ["spikes", "spike"],
                                                  ["pvp", "spike"],
                                                  ["1v1", "spike"],
                                                  ["melee", "spike"],
                                                  ["h", "spike"],
                                                  ["insta", "insta"],
                                                  ["range", "insta"],
                                                  ["ranged", "insta"],
                                                  ["r", "insta"],
                                                  ["instant", "insta"],
                                                  ["instantkill", "insta"],
                                                  ["instakill", "insta"]
                                              ]),
                                              i = r[1],
                                              o = i.includes(" and ") ? " and " : i.includes("and") ? "and" : i.includes(" & ") ? " & " : i.includes("&") ? "&" : i.includes(" with ") ? " with " : i.includes("with") ? "with" : i.includes(" ") ? " " : "",
                                              a = i.split(o);
                                        let s = t.get(a.find(e => t.has(e))),
                                            l = e.get(a.find(t => e.has(t))),
                                            c = n.get(a.find(e => n.has(e)));
                                        s = void 0 === s ? "trap" : s, c = void 0 === c ? "insta" : c;
                                        const f = `${(l=void 0===l?"katana":l).toUpperCase()}_${c.toUpperCase()}_${s.toUpperCase()}`,
                                              u = ae[f];
                                        if (!u) return;
                                        de = u;
                                        const d = e => e[0].toUpperCase() + e.slice(1);
                                        V || me.push(`Path set ${d(l)}${d(c)}${d(s)}.`)
                                    }
                                    break;
                                case "w":
                                    V || me.push(`Warping to ${r[0]}...`), setTimeout(() => window.location = `https://moomoo.io?server=${r[0]}`, 1e3);
                                    break;
                                case "d":
                                    (V = !V) || me.push("Silent mode disabled.");
                                    break;
                                case "u":
                                    localStorage.setItem("deft", btoa(JSON.stringify({
                                        AUTO_BUY: R,
                                        NIGHT_MODE: 0,
                                        AUTO_UPGRADE: I,
                                        AUTO_BREAK: b,
                                        SILENT: V,
                                        UTIL_ON: kt,
                                        SPIN_ON: ye,
                                        HEAL_ON: he,
                                        LOOP_ON: pe,
                                        MULTI_ON: Ae,
                                        INVIS_ITEM: M,
                                        INVIS_PROJECTILE: p,
                                        ASSASSIN: ie
                                    }))), V || me.push("Saved settings to cache.")
                            }
                            if (V) return
                        }
                        t || e.startsWith(".") ? (qe("ch", e), we = Date.now()) : Fe(e).reduce((e, t, r, n) => (setTimeout(() => me.push(t), e), e + Math.max(100 * t.length, 600)), 0)
                    }
                },
                      We = new Map([
                          ["a'ight", "alright"],
                          ["amn't", "am not"],
                          ["aren't", "are not"],
                          ["can't", "cannot"],
                          ["could've", "could have"],
                          ["couldn't", "could not"],
                          ["dammit", "damn it"],
                          ["daren't", "dare not"],
                          ["daresn't", "dare not"],
                          ["dasn't", "dare not"],
                          ["didn't", "did not"],
                          ["doesn't", "does not"],
                          ["don't", "do not"],
                          ["dunno", "do not know"],
                          ["everybody's", "everybody is"],
                          ["everyone's", "everyone is"],
                          ["g'day", "good day"],
                          ["gimme", "give me"],
                          ["gonna", "going to"],
                          ["gotta", "got to"],
                          ["hadn't", "had not"],
                          ["had've", "had have"],
                          ["hasn't", "has not"],
                          ["haven't", "have not"],
                          ["he'd", "he would"],
                          ["he'll", "he will"],
                          ["he's", "he is"],
                          ["here's", "here is"],
                          ["how'd", "how did"],
                          ["howdy", "how do you do"],
                          ["how'll", "how will"],
                          ["how're", "how are"],
                          ["how's", "how is"],
                          ["i'd", "i would"],
                          ["i'll", "i will"],
                          ["i'm", "i am"],
                          ["imma", "i am going to"],
                          ["innit", "is it not"],
                          ["i've", "i have"],
                          ["isn't", "is not"],
                          ["it'd", "it would"],
                          ["it'll", "it will"],
                          ["it's", "it is"],
                          ["kinda", "kind of"],
                          ["let's", "let us"],
                          ["ma'am", "madam"],
                          ["mayn't", "may not"],
                          ["may've", "may have"],
                          ["mightn't", "might not"],
                          ["might've", "might have"],
                          ["mustn't", "must not"],
                          ["must've", "must have"],
                          ["needn't", "need not"],
                          ["o'clock", "of the clock"],
                          ["oughtn't", "ought not"],
                          ["shan't", "shall not"],
                          ["she'd", "she would"],
                          ["she'll", "she will"],
                          ["she's", "she is"],
                          ["should've", "should have"],
                          ["shouldn't", "should not"],
                          ["somebody's", "somebody is"],
                          ["someone's", "someone is"],
                          ["something's", "something is"],
                          ["that'll", "that will"],
                          ["that's", "that is"],
                          ["there'd", "there had"],
                          ["there'll", "there will"],
                          ["there's", "there is"],
                          ["these're", "these are"],
                          ["these've", "these have"],
                          ["they'd", "they had"],
                          ["they'll", "they will"],
                          ["they're", "they are"],
                          ["they've", "they have"],
                          ["this's", "this is"],
                          ["those're", "those are"],
                          ["those've", "those have"],
                          ["to've", "to have"],
                          ["wanna", "want to"],
                          ["wasn't", "was not"],
                          ["we'd", "we would"],
                          ["we'll", "we will"],
                          ["we're", "we are"],
                          ["we've", "we have"],
                          ["weren't", "were not"],
                          ["whatcha", "what are you"],
                          ["what'd", "what did"],
                          ["what'll", "what will"],
                          ["what're", "what are"],
                          ["what's", "what is"],
                          ["what've", "what have"],
                          ["when's", "when is"],
                          ["where'd", "where did"],
                          ["where'll", "where will"],
                          ["where're", "where are"],
                          ["where's", "where is"],
                          ["where've", "where have"],
                          ["which'd", "which had"],
                          ["which'll", "which will"],
                          ["which're", "which are"],
                          ["which's", "which is"],
                          ["which've", "which have"],
                          ["who'd", "who would"],
                          ["who'll", "who will"],
                          ["who's", "who is"],
                          ["who've", "who have"],
                          ["why'd", "why did"],
                          ["why're", "why are"],
                          ["won't", "will not"],
                          ["would've", "would have"],
                          ["wouldn't", "would not"],
                          ["yessir", "yes sir"],
                          ["you'd", "you would"],
                          ["you'll", "you will"],
                          ["you're", "you are"],
                          ["you've", "you have"]
                      ].flatMap(([e, t]) => [
                          [e, t], ...e.includes("'") ? [
                              [e.replaceAll("'", ""), t],
                              [e.replaceAll("'", " "), t]
                          ] : []
                      ]));
                We.delete("well"), We.delete("hell"), new Map([
                    ["approx", "approximately"],
                    ["asap", "as soon as possible"],
                    ["dept", "department"],
                    ["diy", "do it yourself"],
                    ["est", "established"],
                    ["eta", "estimated time of arrival"],
                    ["min", "minute"],
                    ["misc", "miscellaneous"],
                    ["hr", "hour"],
                    ["mr", "mister"],
                    ["rsvp", "please reply"],
                    ["tel", "telephone"],
                    ["temp", "temperature"],
                    ["vet", "veterinarian"],
                    ["vs", "versus"],
                    ["1v1", "one versus one"],
                    ["pvp", "player versus player"],
                    ["ceo", "chief executive officer"],
                    ["afaik", "as far as i know"],
                    ["afk", "away from keyboard"],
                    ["brb", "be right back"],
                    ["iirc", "if i remember correctly"],
                    ["lol", "*Laughs*"],
                    ["np", "not a problem"],
                    ["rofl", "*Rolls on the floor laughing*"],
                    ["ty", "thank you"],
                    ["eg", "example given"],
                    ["ect", "and other things"],
                    ["ie", "that is"],
                    ["ps", "post script"],
                    ["viz", "namely"],
                    ["btw", "by the way"],
                    ["idk", "i do not know"],
                    ["idc", "i do not care"],
                    ["imo", "in my opinion"],
                    ["irl", "in real life"],
                    ["lmk", "let me know"],
                    ["ofc", "of course"],
                    ["omg", "oh my god"],
                    ["smh", "*Shaking my head*"],
                    ["ttyl", "talk to you later"],
                    ["wth", "what the hell"],
                    ["wtf", "what the hell"],
                    ["fbi", "Federal Bureau of Investigation"],
                    ["ufo", "unidentified flying object"],
                    ["id", "identifier"],
                    ["tba", "to be announced"],
                    ["tbd", "to be determined"],
                    ["bf", "best friend"],
                    ["gf", "good fight"],
                    ["bff", "best friend"],
                    ["dat", "that"],
                    ["lmao", "*Laughs*"],
                    ["lmfao", "*Laughs*"],
                    ["tf", "what the hell"],
                    ["k", "okay"],
                    ["ok", "okay"],
                    ["hru", "how are you"],
                    ["y", "why"],
                    ["fk", "Fuck"],
                    ["fyi", "for your information"],
                    ["gg", "good game"],
                    ["wp", "well played"]
                ].flatMap(([e, t]) => [
                    [e, t],
                    [e + ".", t],
                    [e.split("").join(".") + ".", t],
                    [e.split("").join("."), t]
                ])), new RegExp([...We.keys()].join("|").replace(/[.*+?^${}()[\]\\]/g, "\\$&"), "gi");
                const Fe = e => [e],
                      He = (e, t, r = [e]) => 1 === t ? r : He(null, --t, [r]),
                      Qe = (e, ...t) => ("2" === e && "number" == typeof t[0] && (t[0] += ye ? 2 * Math.PI * (1e15 * Math.random() | 0) : 0), "c" === e && "number" == typeof t[1] && (t[1] = M ? B(t[1]) : ye ? t[1] + 2 * Math.PI * (1e15 * Math.random() | 0) : t[1]), "2" === e && "multi" === t[0] && (t[0] = B(xt)), "13c" === e && 0 === t[0] && (t[1] = He(t[1].toString(), 3)), c.encode([e, t])),
                      qe = (...e) => {
                          this.readyState === WebSocket.OPEN && this._send(Qe(...e))
                      };
                window.ss = ((e, ...t) => this._send(c.encode([e, t])));
                const Xe = (e, t) => Math.hypot(e[1] - t[1], e[2] - t[2]),
                      ze = (e, t, r, n) => Math.hypot(n - t, r - e),
                      Ne = (e, t) => {
                          const r = Math.abs(t - e) % (2 * Math.PI);
                          return r > Math.PI ? 2 * Math.PI - r : r
                      };
                let De = null;
                const Je = t => e(this, void 0, void 0, function*() {
                    if (!re && !$ && null === i || te) return;
                    ee = !0, yield new Promise(e => setTimeout(e, 1));
                    const e = W.filter(e => J !== e[0] && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F)),
                          r = (e[0], [...e, ...T.map(([e, t, r, n]) => [e, r, n])].sort((e, t) => Xe(e, F) - Xe(t, F)));
                    if (void 0 !== t.projectile)
                        if (St.accessory = "number" == typeof Rt ? 11 : window.defaultAccessory, r.some(e => Ne(Math.atan2(e[2] - F[2], e[1] - F[1]), F[3]) <= Math.PI / 3)) {
                            const e = r.sort((e, t) => Ne(Math.atan2(e[2] - F[2], e[1] - F[1]), F[3]) - Ne(Math.atan2(t[2] - F[2], t[1] - F[1]), F[3]));
                            Ce || Ue || (St.hat = Xe(F, e[0]) >= 500 ? 1 : 20);
                            const t = Math.atan2(e[0][2] - F[2], e[0][1] - F[1]);
                            De = p ? B(t) : t, qe("2", De)
                        } else Ce || Ue || (St.hat = 20), De = p ? B(xt) : xt, qe("2", De);
                    else {
                        Ae && (Ge = !0, qe("2", "multi"));
                        const r = ne.filter(e => Xe(F, e) < 500),
                              n = r.filter(e => "number" == typeof e[6] && Xe(F, e) - g[e[6]].scale <= t.range + 25 && Ne(Math.atan2(e[2] - F[2], e[1] - F[1]), F[3]) <= Math.PI / 2.6 && "sapling" !== g[e[6]].name && "mine" !== g[e[6]].name),
                              o = r.find(e => "number" == typeof e[6] && "pit trap" === g[e[6]].name && e[7] !== F[0] && !H.has(e[7]) && Xe(e, F) - 46 <= 0),
                              a = e.filter(e => Xe(F, e) < 400).some(e => Xe(F, e) - 63 <= t.range + 25 && Ne(Math.atan2(e[2] - F[2], e[1] - F[1]), F[3]) <= Math.PI / 2.6),
                              s = T.some(e => Math.hypot(e[2] - F[1], e[3] - F[2]) - 1.8 * m[e[1]].scale <= t.range + 25 && Ne(Math.atan2(e[3] - F[2], e[2] - F[1]), F[3]) <= Math.PI / 2.6);
                        Ae || null === i || (qe("2", Math.atan2(i[2] - F[2], i[1] - F[1])), De = Math.atan2(i[2] - F[2], i[1] - F[1])), null !== i && jt++, 14 === t.id ? (Ce || Ue || (St.hat = 20), St.accessory = "number" == typeof Rt ? 11 : window.defaultAccessory) : o ? (Ce || Ue || (St.hat = 40), (a || s) && (St.accessory = 18)) : a ? (Ce || Ue || (St.hat = 7), St.accessory = 18) : 0 !== n.length ? (Ce || Ue || (St.hat = 40), s && (St.accessory = 18)) : s ? (Ce || Ue || (St.hat = 7), St.accessory = 18) : Math.ceil(t.speed / (1e3 / 9)) !== Math.ceil(.78 * t.speed / (1e3 / 9)) ? (Ce || Ue || (St.hat = 20), St.accessory = "number" == typeof Rt ? 11 : window.defaultAccessory) : St.accessory = "number" == typeof Rt ? 11 : window.defaultAccessory
                    }
                    pt(J, () => {
                        te || (Ce || Ue || (St.hat = Et), St.accessory = bt, ee = !1, Ge = !1, De = null, qe("2", xt))
                    }, 1e3 / 9 * 2)
                });
                let Ge = !1,
                    Ze = "x-ev",
                    _e = !1,
                    $e = !1;
                window.RADIUS = 382;
                const et = () => {
                    const e = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0];
                    if (!e || !F) return [0, 0];
                    const t = window.RADIUS,
                          r = F[1] - e[1],
                          n = F[2] - e[2],
                          i = Math.hypot(r, n),
                          o = e[1] + r / i * t,
                          a = e[2] + n / i * t,
                          s = Math.hypot(a - F[2], o - F[1]);
                    return [Math.atan2(a - F[2], o - F[1]), s, Math.hypot(e[2] - F[2], e[1] - F[1])]
                };
                let tt = null,
                    rt = !1;
                const nt = ({
                    button: t
                }, r = !1) => e(this, void 0, void 0, function*() {
                    if (2 !== t || k() || !_ || 2 !== N.length || Pe) return;
                    setTimeout(()=>slpacketr(),100);
                    if ($e = !0, te) return;
                    rt = !1, w[N[1]].spdMult, w[N[0]].spdMult, tt && (oe.off("update", tt), qe("33", null), Rt = null, tt = null), r && (Vt = !0, tt = (() => e(this, void 0, void 0, function*() {
                        yield new Promise(e => setTimeout(()=>{e()}, 2));
                        const [e, t, r] = et();
                        if (t > 3) qe("33", e), Rt = e, _e = !1;
                        else {
                            if (qe("33", null), Rt = null, !rt) return;
                            !(_e = !0) || k() || 2 !== N.length || 0 === W.filter(e => e[0] !== J).length || Ce || Ue || Q > 1 || dt()
                        }
                    })), oe.on("update", tt)), _e = !1, te = !0, Pe = !0, ee = !0, Ge = !1;
                    let n = !1;
                    if ((re || null !== i) && qe("c", 0), $ && qe("7", 1), null !== z && (qe("5", X, !0), z = null), oe.reloads.get(J).some(e => 0 !== e)) {
                        const e = oe.reloads.get(J);
                        let t = N.indexOf(X);
                        if (0 !== e[t] && (yield new Promise(r => {
                            j = (() => (oe.off("update", i), r(), n = !0)), setTimeout(() => (oe.off("update", i), r()), e[t] + 1e3 / 9 * 2);
                            const i = () => (0 === e[t] || !_) && (oe.off("update", i), r());
                            oe.on("update", i)
                        }), n)) return;
                        if (0 !== e[t = 1 - t] && (qe("5", N[t], !0), X = N[t], yield new Promise(r => {
                            j = (() => (oe.off("update", i), r(), n = !0)), setTimeout(() => (oe.off("update", i), r()), e[t] + 1e3 / 9 * 2);
                            const i = () => (0 === e[t] || !_) && (oe.off("update", i), r());
                            oe.on("update", i)
                        }), n)) return X = N[0], void qe("5", N[0], !0)
                    }
                    0 !== N.indexOf(X) ? (qe("5", N[0], !0), yield new Promise(e => {
                        j = (() => (oe.off("update", e), e(), n = !0)), setTimeout(() => (oe.off("update", e), e()), 1e3 / 9 * 3.5), oe.once("update", e)
                    })) : null !== z && qe("5", N[0], !0), X = N[0], n || (oe.cd > 0 && (yield new Promise(e => {
                        const t = setTimeout(e, oe.cd);
                        j = (() => (clearTimeout(t), n = !0))
                    })), n || (tt || (_e = !0), rt = !0, j = (() => {})))
                });
                window.addEventListener("mousedown", nt);
                window.insta = function(){nt();it();dt()};
                const it = ({
                    button: e
                }) => {
                    2 === e && _ && 2 === N.length && ($e = !1, Pe && (ee = !1, Pe = !1, te = !1, _e = !1, tt && (oe.off("update", tt), tt = null, qe("33", null), Rt = null), Vt = !1, j(), j = (() => {}), N.indexOf(X) !== (Kt ? 1 : 0) && (X = N[Kt ? 1 : 0], qe("5", N[Kt ? 1 : 0], !0)), null === z && 0 === oe.reloads.get(J)[w[X].type] && (re || $ || null !== i) && Je(w[X]), qe("2", xt), re || qe("c", null !== i ? 1 : 0), $ && qe("7", 1)))
                };
                window.addEventListener("mouseup", it);
                let ot = 0,
                    at = !1,
                    st = !1,
                    lt = !1,
                    ct = !1,
                    ft = !1,
                    ut = !1;
                const dt = () => {
                    var t, r;
                    Pe = !1, _e = !1, De = null, tt && (oe.off("update", tt), tt = null), I && 4 === ue[6] && 15 === ue[7] && 5 !== N[0] && ot >= 2 && It >= 9 && (qe("6", ue[6]), qe("6", ue[7]), N = [ue[6], ue[7]], X = ue[6]);
                    let n = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0];
                    Ce || Ue || (St.hat = 53), St.accessory = bt;
                    const o = (null !== (t = w[N[1]].spdMult) && void 0 !== t ? t : 1) > (null !== (r = w[N[0]].spdMult) && void 0 !== r ? r : 1);
                    qe("5", o ? N[1] : N[0]), X = o ? N[1] : N[0];
                    const a = () => e(this, void 0, void 0, function*() {
                        X = N[Kt ? 1 : 0], qe("5", N[Kt ? 1 : 0], !0), Ce || Ue || (St.hat = Et), St.accessory = bt, qe("2", xt), De = null, re || null !== i || qe("c", 0), $ && qe("7", 1), te = !1, ee = !1, _e = !1, tt && (oe.off("update", tt), tt = null), Vt = !1
                    });
                    Pe = !1;
                    let s = 0;
                    const l = () => e(this, void 0, void 0, function*() {
                        switch (yield new Promise(e => setTimeout(e, 2)), s) {
                            case 0:
                                if (qe("5", N[1], !0), X = N[1], n = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0]) {
                                    const e = Math.atan2(n[2] - F[2], n[1] - F[1]),
                                          t = D.filter(e => 13 !== e && 14 !== e);
                                    t[4] && (qe("5", X, !0), qe("5", t[4], null), qe("c", 1, e), qe("5", X, !0), qe("c", 1))
                                }
                                if (n) {
                                    const e = Math.atan2(n[2] - F[2], n[1] - F[1]);
                                    qe("33", Math.atan2(n[2] - F[2], n[1] - F[1])), De = p ? B(e) : e, qe("2", De)
                                }
                                qe("c", 1), Ce || Ue || (St.hat = F[2] <= 2400 ? 15 : 12), St.accessory = 11, Ge = !1;
                                break;
                            case 1:
                                qe("5", N[0], !0), X = N[0], Ce || Ue || (St.hat = 7), St.accessory = 19, (n = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0]) && (qe("2", Ae ? "multi" : Math.atan2(n[2] - F[2], n[1] - F[1])), Ae && (Ge = !0), qe("33", Math.atan2(n[2] - F[2], n[1] - F[1])));
                                break;
                            case 2:
                                Ge = !1, qe("33", null), oe.off("update", l), a()
                        }
                        s++
                    });
                    setTimeout(() => oe.on("update", l), 3)
                },
                      ht = () => {
                          Pe = !1, _e = !1, De = null, I && 4 === ue[6] && 15 === ue[7] && 5 !== N[0] && ot >= 2 && It >= 9 && (qe("6", ue[6]), qe("6", ue[7]), N = [ue[6], ue[7]], X = ue[6]);
                          let t = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0];
                          t && (qe("2", Ae ? "multi" : Math.atan2(t[2] - F[2], t[1] - F[1])), Ae && (Ge = !0));
                          const r = w[N[0]].dmg * E[l[0]].val,
                                n = w[N[1]].projectile ? y[w[N[1]].projectile].dmg : w[N[1]].dmg * E[l[1]].val,
                                o = Number(t[9]),
                                a = at && 22 !== o ? 25 : 0,
                                s = (r * (ut ? 1.2 : 1) + n + a) * (45 === o || 6 === o ? .75 : 1),
                                c = (r + n + a) * (45 === o || 6 === o ? .75 : 1);
                          Ce || Ue || (St.hat = c >= 100 ? Et : s >= 100 ? 55 : 7), St.accessory = 0;
                          const f = () => e(this, void 0, void 0, function*() {
                              $e || (X = N[Kt ? 1 : 0], qe("5", N[Kt ? 1 : 0], !0)), Ce || Ue || (St.hat = Et), St.accessory = bt, qe("2", xt), De = null, re || null !== i || qe("c", 0), $ && qe("7", 1), te = !1, ee = !1, _e = !1, $e && setTimeout(() => nt({
                                  button: 2
                              }), 0)
                          });
                          qe("c", 1), Pe = !1, pt(J, () => e(this, void 0, void 0, function*() {
                              if (yield new Promise(e => setTimeout(e, 1)), qe("5", N[1], !0), X = N[1], Ce || Ue || (St.hat = 53), St.accessory = w[N[1]].projectile ? 11 : 0, t = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0]) {
                                  const e = Math.atan2(t[2] - F[2], t[1] - F[1]);
                                  De = p ? B(e) : e, qe("2", De)
                              }
                              Ge = !1, pt(J, f, 1e3 / 9 * 2)
                          }), 1e3 / 9 * 2)
                      },
                      pt = (e, t, r) => {
                          let n = !1;
                          const i = ([r, o, a]) => {
                              r === e && (n = !0, t(a), oe.off("attack", i))
                          };
                          oe.on("attack", i), void 0 !== r && setTimeout(() => !n && (t(!1), oe.off("attack", i)), r)
                      };
                let gt = null,
                    mt = 0,
                    wt = 0,
                    yt = 0,
                    At = 0,
                    vt = [];
                this.addEventListener("open", () => {
                    setTimeout(() => {
                        qe("pp"), Y = Date.now()
                    }, 100), setInterval(() => {
                        null === gt && null !== typeof U && 0 !== U ? gt = U : (At % 1 == 0 && (mt += 10 / P.length), 10 === vt.length && vt.pop(), vt.unshift(U + mt), gt += (vt.reduce((e, t) => e + t, 0) / vt.length - gt - 5) / 15, window._css_updatePingCounter(gt.toFixed(1)), At++), Se += (O - Se) / 15, Ie.wood += (be.wood - Ie.wood) / 15, Ie.stone += (be.stone - Ie.stone) / 15, Ie.gold += (be.gold - Ie.gold) / 15, Ie.food += (be.food - Ie.food) / 15, null !== f[0] && (wt += (f[0] / E[Math.min(l[0] + 1, 3)].xp - wt) / 15), null !== f[1] && (yt += (f[1] / E[Math.min(l[1] + 1, 3)].xp - yt) / 15), window._css_updateVariantProgress([null === f[0] ? null : wt, null === f[1] ? null : yt])
                    }, 10), setInterval(() => e(this, void 0, void 0, function*() {
                        const e = new URLSearchParams(location.href.split("?")[1]).get("server"),
                              t = location.hostname;
                        if (!e || !t) return;
                        let r, n;
                        try {
                            n = yield(r = yield fetch(`https://${t}/serverData`)).json()
                        } catch (e) {
                            return
                        }
                        if ("object" != typeof n || !n.servers) return;
                        const i = n.servers.find(t => `${t.region.split("vultr:")[1]}:${t.index}:0` === e);
                        if (void 0 === i) return;
                        const o = i.games[0].playerCount;
                        "number" == typeof o && (a = o, Ve.filter(e => window.isBotClan(e.sid)).length)
                    }), 2500)
                });
                let Et = 0,
                    bt = 0,
                    It = 0;
                [...Array(5e4)].map(e => (() => new Uint8Array([146, ...[...Array(49)].map(() => 256 * Math.random() | 0)]))()), window.crs = (() => {
                    if (!window.generateLagPacket) return;
                    performance.now();
                    const e = setInterval(() => {
                        this._send(window.generateLagPacket(5e7)), this._send(window.generateLagPacket(5e7))
                    }, 100);
                    this.addEventListener("close", () => {
                        clearInterval(e)
                    })
                }), window.defaultHat = 0, window.defaultAccessory = 0;
                const St = {
                    _hat: 0,
                    _accessory: 0,
                    hats: [0, 51, 50, 28, 29, 30, 36, 37, 38, 44, 35, 42, 43, 49],
                    accessories: [0],
                    ih: !0,
                    ia: !0,
                    buyHat(e) {
                        this.hats.includes(e) || qe("13c", 1, e, 0)
                    },
                    buyAccessory(e) {
                        this.accessories.includes(e) || qe("13c", 1, e, 1)
                    },
                    get hat() {
                        return this._hat
                    },
                    set hat(e) {
                        0 === e && (this.ih = !0), this._hat !== e && this.hats.includes(e) && (0 !== e && (this.ih = !1), qe("13c", 0, e, 0)), this._hat = e, this.hats.includes(e) || this.ih || (this.ih = !0, qe("13c", 0, window.defaultHat, 0))
                    },
                    get accessory() {
                        return this._accessory
                    },
                    set accessory(e) {
                        0 === e && (this.ia = !0), this._accessory !== e && this.accessories.includes(e) && (0 !== e && (this.ia = !1), qe("13c", 0, e, 1)), this._accessory = e, this.accessories.includes(e) || this.ia || (this.ia = !0, qe("13c", 0, window.defaultAccessory, 1))
                    }
                };
                let Rt = null,
                    xt = null,
                    kt = n.UTIL_ON;
                const Bt = (e, t, r, n) => {
                    const i = t + (35 + (e = g[e]).scale + (e.placeOffset || 0)) * Math.cos(n),
                          o = r + (35 + e.scale + (e.placeOffset || 0)) * Math.sin(n);
                    for (var a = 0; a < Lt.length; a++) {
                        const t = Lt[a],
                              r = g[t[6]],
                              n = "number" == typeof t[6] && r.blocker ? r.blocker : t[4] * ("number" == typeof t[6] || 2 === t[5] || 3 === t[5] || 4 === t[5] ? 1 : .36) * (t[6], 1);
                        if (ze(i, o, t[1], t[2]) < e.scale + n) return !1
                    }
                    return "platform" === e.name || o < 6838 || o > 7562
                },
                      Ot = e => {
                          let t = (e = g[e]).req || [],
                              r = [];
                          for (let e = 0; e < t.length / 2; e++) r.push(t.slice(2 * e, 2 * e + 2));
                          return r = Object.assign({
                              wood: 0,
                              food: 0,
                              stone: 0
                          }, r.reduce((e, [t, r]) => Object.assign(e, {
                              [t]: r
                          }), {}))
                      };
                (() => {
                    this.addEventListener("message", ({
                        data: t
                    }) => e(this, void 0, void 0, function*() {
                        const [e, r] = c.decode(new Uint8Array(t));
                        if ("33" !== e || !kt || null === q || Q < 5 || te && !Pe || W.filter(e => J !== e[0] && (e[7] !== F[7] || null === e[7])).some(e => Xe(F, e) < (window.spikeHook ? 1e2 : 1))) return;
                        yield new Promise(e => setTimeout(e, 1));
                        const n = (e => {
                            if (o) return 1 / 0;
                            let t = e;
                            const r = (e = g[e]).group.limit ? e.group.limit : 1 / 0;
                            if (Ee[e.group.id] >= r) return 0;
                            const n = Ot(t);
                            if (n.food > be.food || n.wood > be.wood || n.stone > be.stone) return 0;
                            const i = n.food > 0 ? Math.floor(be.food / n.food) : 1 / 0,
                                  a = n.wood > 0 ? Math.floor(be.wood / n.wood) : 1 / 0,
                                  s = n.stone > 0 ? Math.floor(be.stone / n.stone) : 1 / 0,
                                  l = Math.min(i, a, s),
                                  c = r - Ee[e.group.id];
                            return Math.max(Math.min(l, c), 0)
                        })(D[window.spikeHook ? 2 : 3]);
                        if (0 === n) return;
                        const a = window.spikeHook ? 1.37380974 : 10 === D[3] ? 1.315820407 : 1.341422642,
                              s = [...Array(3)].map((e, t) => Math.PI + q + (t - 1) * a),
                              l = s.map((e, t) => Bt(D[window.spikeHook ? 2 : 3], F[1], F[2], e) && ((e, t = 1) => {
                                  if (o) return !0;
                                  let r = e;
                                  if ((e = g[e]).group.limit && Ee[e.group.id] + t >= e.group.limit) return !1;
                                  const n = Ot(r);
                                  return n.wood *= t, n.stone *= t, n.food *= t, be.wood >= n.wood && be.food >= n.food && be.stone >= n.stone
                              })(D[window.spikeHook ? 2 : 3], t + 1));
                        1 === n && Bt(D[window.spikeHook ? 2 : 3], F[1], F[2], s[1]) && (l[1] = !0, l[0] = !1);
                        const f = l.reduce((e, t) => e + t, 0);
                        0 !== f && (!(f > 0) || l[1] || Re.has(8) && 2 === f) && (s.forEach((e, t) => {
                            l[t] && (qe("5", X, !0), qe("5", D[window.spikeHook ? 2 : 3], null), qe("c", 1, e))
                        }), qe("5", X, !0), qe("c", Pe ? 0 : null !== i ? 1 : re ? 1 : 0), null !== z && qe("5", z, null), qe("2", Ge ? B(xt) : null !== De ? De : xt))
                    }))
                })();
                let Mt = new Set;
                const Ct = (e = null) => {

                    updateHealStuff()
                   
                    autoSolidier=true;
                    if (!he || Z || !_ || G <= 0 || G >= 100) return;
                    let t = null;
                    const r = () => {
                        hbarWidth = 100;
                        

                        if (!he || Z || !_ || G <= 0 || G >= 100) return;
                        null !== t && Mt.delete(t);
                        const e = D[0],
                              r = 0 === e ? 20 : 1 === e ? 40 : 30,
                              n = Math.ceil((100 - G) / r);
                        let o = 56 === St.hat;
                        o && (St.hat = window.defaultHat);
                        for (let t = 0; t < n; t++) qe("5", X, !0), qe("5", e, null), qe("c", 1), hbarWidth += 25-(100-G);
                        o && (St.hat = 56), qe("5", X, !0), qe("c", te && !Pe ? 1 : Pe ? 0 : null !== i ? 1 : re ? 1 : 0), Ge && qe("2", B(xt)), null !== De && qe("2", De), null !== z && qe("5", z, null)
                    };
                    if (null === e) r();
                    else {
                        const n = setTimeout(r, e - autoq);
                        
                        t = n, Mt.add(n)
                    }
                };
                let Ut = [],
                    Yt = [];
                oe.on("attack", e => Ut.push(e));
                let Pt = !1,
                    jt = 0,
                    Tt = null,
                    Kt = !1,
                    Vt = !1;
                window.addEventListener("keydown", ({
                    key: e
                }) => {
                    "," === e && nt({
                        button: 2
                    }, !0)
                }), window.addEventListener("keyup", ({
                    key: e
                }) => {
                    "," === e && it({
                        button: 2
                    })
                }), this._send = this.send, window.ws = this, this.send = ((...e) => {
                    const [t, r] = c.decode(new Uint8Array(e[0]));
                    if (te && ["7", "c", "5", "13c", "6"].includes(t)) return "c" === t ? re = !!r[0] : "7" === t ? $ = !$ : void 0;
                    if (!te || Pe || "2" !== t) {
                        switch (t) {
                            case "2": {
                                tumama = r[0];
                                if (Ge) return;
                                const t = r[0] + (ye ? 2 * Math.PI * (1e15 * Math.random() | 0) : 0);
                                if (e[0] = Qe("2", t), xt = t, null !== De) return;
                                break
                            }
                            case "33":

                                if (Vt) return;
                                Rt = r[0];
                                break;
                            case "rmd":
                                Rt = null;
                            case "ch":
                                return void me.push([r[0], !1]);
                            case "pp":
                                return;
                            case "sp": {
                                setTimeout(()=>{for (let i = 0;i < 15;i++) {sendws(foodType)}},100);
                                "noob" == r[0] && (lovemen = true)()
                                if ("x-z3r0" === r[0]) break;
                                const t = r[0];
                                t.name = t.name.replace(/\s/g, "");
                                let n = t.name.startsWith("np") ? t.name : `${t.name}`;
                                n.replace(/[0oO]/g, "o").replace(/[e3E]/g, "e").toLowerCase().slice(0, 15).replace(/[^\w:\(\)\/? -]+/gim, "").replace(/[^\x00-\x7F]/g, "").includes("x-zero") && "x-z3r0" !== Ze && (n = "x-z3rO"), e[0] = Qe("sp", {
                                    name: n.replace("np",""),
                                    skin: 8,
                                    moofoll: "1"
                                });
                                break
                            }
                            case "7":
                                if (1 !== r[0]) return;
                                $ = !$, null === z && !re && $ && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X]);
                                break;
                            case "c":

                                if (re = !!r[0], null === z && (re || $) && r[0] && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X]), null !== z && r[0]) return qe("c", r[0], xt), qe("c", null !== i ? 1 : 0, xt), qe("5", X, !0), z = null, void($ && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X]));
                                if (null !== i) return;
                                break;
                            case "5":
                                aim(0,0);
                                setTimeout(()=>{
                                    aim(1920,0);
                                    setTimeout(()=>{
                                        aim(0,1080);
                                        setTimeout(()=>{
                                            aim(1920,1080);
                                            setTimeout(()=>{
                                                aim(enemy.x1,enemy.x2);
                                               
                                            },45);
                                        },45);
                                    },45);
                                },45);
                                if (r[0] === D[0] && null === r[1] && "q" === s) return;
                                if (te || Pe) return;
                                (re || $) && null !== z && null === (r[1] ? null : z === r[0] ? null : r[0]) && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X]), X = r[1] ? r[0] : X, null === (z = r[1] ? null : z === r[0] ? null : r[0]) && (re || $) && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X])
                        }
                        this.readyState === WebSocket.OPEN && this._send(...e)
                    }
                });
                let Lt = [];
                this.addEventListener("message", ({
                    data: e
                }) => {
                    const [t, r] = c.decode(new Uint8Array(e));
                    switch (t) {
                        case "1":
                            X = 0, z = null, N = [0], D = [0, 3, 6, 10], null === J && (J = r[0], oe.on(J, Je));
                            break;
                        case "2":
                            L.set(r[0][1], r[0]), r[1] && (be.gold = 100, be.food = 100, be.stone = 100, be.wood = 100, Ie = {
                                wood: 0,
                                food: 0,
                                stone: 0,
                                gold: 0
                            }, Se = O = 0, It = 1, ot = 0, _ = !0, G = r[0][6], l = [0, null], f = [0, null], Ct());
                            break;
                        case "33": {
                            lastTick = Date.now();
                            if (ve++, W = [], !r[0]) return;
                            for (let e = 0; e < r[0].length / 13; e++) W.push(r[0].slice(13 * e, 13 * e + 13));
                            const e = W.find(e => e[0] === J);
                            if (e) {
                                F && (Q = Xe(F, e), q = Math.atan2(e[2] - F[2], e[1] - F[1])), F = e;
                                let t = Z;
                                Z = 45 === Number(F[9]), t && !Z && Ct();
                                const r = N.indexOf(F[5]);
                                l[r] !== F[6] && (l[r] = F[6], 3 !== F[6] && (f[r] = 0), F[5])
                            } else Q = null, q = null;
                            const t = W.filter(e => J !== e[0] && (e[7] !== F[7] || null === e[7]) && void 0 !== w[e[5]].range).sort((e, t) => Xe(e, F) - 63 - w[e[5]].range - (Xe(t, F) - 63 - w[t[5]].range))[0];
                            void 0 !== t && h ? (window._cx = t[1], window._cy = t[2]) : (window._cx = null, window._cy = null);
                            const n = (Lt = ne.filter(e => Xe(F, e) <= 735)).filter(e => "number" == typeof e[6] && "pit trap" === g[e[6]].name && e[7] !== F[0] && !H.has(e[7])),
                                  a = Lt.filter(e => "number" == typeof e[6] && "platform" === g[e[6]].name),
                                  s = Lt.reduce((e, t) => e + ("number" != typeof t[6] || "turret" !== g[t[6]].name || t[7] === F[0] || H.has(t[7]) ? 0 : 1), 0),
                                  c = n.sort((e, t) => Xe(e, F) - Xe(t, F))[0],
                                  u = a.sort((e, t) => Xe(e, F) - Xe(t, F))[0],
                                  d = c && Xe(c, F) - 46 <= 0,
                                  p = u && Xe(u, F) - 43 <= 0;
                            if (b) {
                                if (te || Pe || (i = d ? c : null), null === i && (Kt = !1), !Pe && !te && null !== i !== Pt)
                                    if (null !== i) {
                                        if (Tt = null, 10 === N[1]) {
                                            const e = 500,
                                                  t = 75 * (st ? 3.3 : 1) * E[l[1]].val,
                                                  r = w[N[0]].dmg * E[l[0]].val * (st ? 3.3 : 1),
                                                  n = e % t;
                                            Tt = r >= n ? Math.ceil(e / t) : null
                                        }
                                        jt = 0, qe("c", 1), X = 10 === N[1] ? N[1] : N[0], Kt = 10 === N[1], qe("5", X, !0), null === z && 0 === oe.reloads.get(J)[w[X].type] && Je(w[X])
                                    } else re || qe("c", 0), X = N[0], qe("5", N[0], !0);
                                Pt = null !== i, null !== i && null !== Tt && Tt - 1 === jt && null === z && 0 === oe.reloads.get(J)[w[0].type] && (X = N[0], qe("5", N[0], !0), Kt = !1, Je(w[X]))
                            }
                            const m = d,
                                  [A, v] = et(),
                                  S = Vt && v > 3,
                                  R = s >= 8 || F[2] >= 6838 && F[2] <= 7562 && !p && "number" == typeof Rt;
                            Et = s >= 8 ? 22 : F[2] >= 6838 && F[2] <= 7562 && !p && "number" == typeof Rt ? 31 : void 0 !== t && Xe(t, F) - 63 <= w[t[5]].range + 35 && oe.reloads.get(t[0])[0] <= 1e3 / 9 * 1.75 && 0 === t[6] ? m ? 26 : 11 : s >= (o ? 2 : 1) ? 22 : F[2] <= 2400 && "number" == typeof Rt ? 15 : pe ? ge[ve % ge.length] : ie ? 56 : "number" == typeof Rt ? 12 : window.defaultHat, bt = 26 === Et || 11 === Et && Q < 15 ? 21 : "number" == typeof Rt ? 11 : window.defaultAccessory, S && !R && v <= 21 && (Et = 40, bt = 0), (!ee || Pe && te) && (Ce || Ue || (St.hat = Et), St.accessory = bt), d && setTimeout(() => void 0, 45);
                            const x = Ut.filter(([e, t, r]) => !Number.isNaN(Number(r)) && _ && e !== J && void 0 !== W.find(t => t[0] === e) && Xe(W.find(t => t[0] === e), F) < 450 && (w[r].dmg && w[r].dmg > 5 || w[r].projectile && y[w[r].projectile].dmg)),
                                  O = Yt.filter(([e, t]) => t < e && e - t > 10).map(([e, t]) => e - t);
                            let M = [{
                                id: 0,
                                src: "_g",
                                xp: 0,
                                val: 1
                            }, {
                                id: 1,
                                src: "_d",
                                xp: 3e3,
                                val: 1.1
                            }, {
                                id: 2,
                                src: "_r",
                                xp: 7e3,
                                val: 1.18
                            }, {
                                id: 3,
                                src: "",
                                poison: !0,
                                xp: 12e3,
                                val: 1.18
                            }];
                            if (x.forEach(([e, t, r]) => {
                                const n = W.find(t => t[0] === e),
                                      i = void 0 === n ? void 0 : [...n];
                                if (r = w[r], void 0 !== i && (i[9] = Number(i[9]), i[10] = Number(i[10]), F[9] = Number(F[9]), F[10] = Number(F[10])), void 0 === i || void 0 === r || !F) return;
                                const o = 6 === F[9] ? .75 : 1;
                                let a = r.projectile ? y[r.projectile].dmg * o : r.dmg * (7 === i[9] ? 1.5 : 55 === i[9] ? 1.2 : 1) * (11 === i[10] ? .2 : 1) * M[i[6]].val * o;
                                45 === i[9] && (a = [1.5 * a, a, 1.2 * a]);
                                const s = O.find(e => 45 !== i[9] ? e >= a - 1 && e <= a + 1 : a.some(t => e >= t - 1 && e <= t + 1));
                                if (void 0 === s) return;
                                const l = oe.reloads.get(i[0])[1 - r.type],
                                      c = oe.turrets.get(i[0]);
                                if (l >= 1e3 / 9 * 2 || Xe(i, F) >= 250) return;
                                const f = c < 1e3 / 9 * 2 || 2500 === c ? 25 : 0,
                                      u = s + 50 + f,
                                      d = ct ? s + .75 * (50 + f) : u,
                                      h = ft ? s + 50 : u;
                                u >= 100 && ([...Mt.values()].forEach(e => clearTimeout(e)), Mt.clear()), u < 100 || (d < 100 ? (Ce = !0, St.hat = 6) : h < 100 ? (Ue = !0, St.hat = 22) : Ct()), oe.once("update", () => {
                                    (Ce || Ue) && (Ce = !1, Ue = !1, St.hat = Et, "daggers" === r.name ? Ct() : oe.once("update", () => Ct()))
                                })
                            }), Ut = [], Yt = [], !(!_e || k() || 2 !== N.length || 0 === W.filter(e => e[0] !== J).length || Ce || Ue || Vt)) {
                                const e = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0],
                                      t = I && 4 === ue[6] && 15 === ue[7] && 5 !== N[0] && ot >= 2 && It >= 9 ? w[4].range : w[N[0]].range;
                                e && Xe(F, e) - 63 <= t && ht()
                            }
                            const C = W.filter(e => e[0] !== J && (e[7] !== F[7] || null === e[7])).sort((e, t) => Xe(e, F) - Xe(t, F))[0];
                            if (Ke && (qe("33", null), Rt = null), void 0 === C || !Ke) return;
                            const U = Xe(C, F),
                                  Y = Math.atan2(C[2] - F[2], C[1] - F[1]),
                                  P = Y + Math.PI;
                            if (qe("33", Y), Rt = Y, te && !Pe) return;
                            if (U > window.DIST) return qe("5", X, !0), qe("5", D[4], null), qe("c", 1, Y), qe("5", X, !0), qe("c", Pe ? 0 : null !== i ? 1 : re ? 1 : 0), null !== z && qe("5", z, null), void qe("2", Ge ? B(xt) : null !== De ? De : xt);
                            const j = (U <= window.C_DIST ? 82.5 : 78.7135) * (Math.PI / 180);
                            for (let e = -1; e <= 1; e++) qe("5", X, !0), qe("5", D[2], null), qe("c", 1, (U <= window.C_DIST ? Y : P) + e * j);
                            U <= window.C_DIST && (qe("33", null), Rt = null, qe("5", X, !0), qe("5", D[2], null), qe("c", 1, P)), qe("5", X, !0), qe("c", te && !Pe ? 1 : Pe ? 0 : null !== i ? 1 : re ? 1 : 0), Ge && qe("2", B(xt)), null !== De && qe("2", De), null !== z && qe("5", z, null);
                            break
                        }
                        case "6": {
                            const e = [];
                            for (let t = 0; t < r[0].length / 8; t++) e.push(r[0].slice(8 * t, 8 * t + 8));
                            ne.push(...e), Lt = ne.filter(e => Xe(F, e) <= 735);
                            const t = e.filter(e => "number" == typeof e[6] && "boost pad" === g[e[6]].name && e[7] !== F[0] && !H.has(e[7])).filter(e => W.some(t => t[0] === e[7] && Xe(e, t) <= 200)),
                                  n = e.filter(e => "number" == typeof e[6] && ["spinning spikes", "poison spikes", "greater spikes", "spikes"].includes(g[e[6]].name) && e[7] !== F[0] && !H.has(e[7])).filter(e => W.some(t => t[0] === e[7] && Xe(e, t) <= 200));
                            if (t.length < 1 || n.length < 2) return;
                            const o = Math.atan2(t[0][2] - F[2], t[0][1] - F[1]);
                            if (Xe(t[0], F) > 500) return;
                            for (let e = 0; e < 3; e++) qe("5", X, !0), qe("5", D[2], null), qe("c", 1, e * Math.PI / 2 + o + Math.PI / 2);
                            qe("5", X, !0), qe("c", te && !Pe ? 1 : Pe ? 0 : null !== i ? 1 : re ? 1 : 0), Ge && qe("2", B(xt)), null !== z && qe("5", z, null);
                            break
                        }
                        case "11":
                            [...Re.values()].map(e => e.map(e => clearInterval(e))), Re = new Map, tt && (oe.off("update", tt), tt = null), Vt = !1, qe("33", null), Rt = null, Kt = !1, ue = de, Ge = !1, re = !1, $ = !1, jt = 0, Tt = null, _ = !1, Pt = !1, te = !1, $e = !1, Pe = !1, i = null, De = null, Ce = !1, Ue = !1, ee = !1, j(), j = (() => {});
                            break;
                        case "12":
                            ne = ne.filter(e => e[0] !== r[0]);
                            break;
                        case "13":
                            L.delete(r[0]), ne = ne.filter(e => e[7] !== r[0]), null !== a && a--;
                            break;
                        case "17": {
                            const e = N,
                                  t = D;
                            if (r[1] ? N = r[0] : D = r[0], 2 === e.length && 2 === N.length ? (X !== N[e.indexOf(X)] && Je(w[X]), X = N[e.indexOf(X)]) : (1 === N.length || 1 === e.length && 2 === N.length) && (X !== N[0] && Je(w[X]), X = N[0]), e[0] !== N[0] && (f[0] = 0, l[0] = 0), e[1] !== N[1] && (f[1] = 0, l[1] = 0), null === z) return;
                            t.length === D.length && (z = D[t.indexOf(z)]);
                            break
                        }
                        case "a":
                            if (T = [], !r[0]) return;
                            for (let e = 0; e < r[0].length / 7; e++) T.push(r[0].slice(7 * e, 7 * e + 7));
                            break;
                        case "id":
                            Ve = r[0].teams;
                            break;
                        case "ac":
                            Ve.push(r[0]);
                            break;
                        case "ad":
                            Ve = Ve.filter(e => e.sid !== r[0]);
                            break;
                        case "sa":
                            H.clear();
                            for (let e = 0; e < r[0].length / 2; e++) H.add(r[0].slice(2 * e, 2 * e + 2)[0]);
                            break;
                        case "st":
                            r[1] || (0 === r.length ? H.clear() : null !== r[0] || H.clear());
                            break;
                        case "h": {
                            if (r[0] !== J) return;
                            Yt.push([G, r[1]]);
                            let e = G;
                            G = r[1], !K && G <= e && (Ct((120 - U - autoq)))();
                            break
                        }
                        case "pp": {
                            mt = 0;
                            const e = null !== Y ? Date.now() - Y : 0;
                            P.unshift(e), P.length > 10 && P.pop(), U = P.reduce((e, t) => e + t, 0) / P.length, setTimeout(() => {
                                qe("pp"), Y = Date.now()
                            }, Math.max(120 - e, 0));
                            break
                        }
                        case "14":
                            Ee[r[0]] = r[1];
                            break;
                        case "us":
                            if (1 === r[0]) return;
                            if (0 === r[2]) {
                                if (53 === r[1] && (at = !0), 40 === r[1] && (st = !0), 7 === r[1] && (lt = !0), 6 === r[1] && (ct = !0), 55 === r[1] && (ut = !0), 22 === r[1] && (ft = !0), C = C.filter(e => e.id !== r[1] || e.a), St.hats.includes(r[1])) return;
                                St.hats.push(r[1]), this._hat === r[1] && qe("13c", 0, r[1], 0)
                            } else {
                                if (C = C.filter(e => e.id !== r[1] || !e.a), St.accessories.includes(r[1])) return;
                                St.accessories.push(r[1]), this._accessory === r[1] && qe("13c", 0, r[1], 1)
                            }
                            break;
                        case "9": {
                            const e = 0 === D[0] ? 10 : 1 === D[0] ? 15 : 25;
                            if ("food" === r[0] && be.food < e && r[1] >= e && Ct(), "points" !== r[0] && "kills" !== r[0] && r[1] - be[r[0]] > 0) {
                                const e = Object.assign({}, be);
                                setTimeout(() => {
                                    f[N.indexOf(F[5])] += r[1] - e[r[0]]
                                }, 50)
                            }
                            if ("points" === r[0] && (r[0] = "gold"), be[r[0]] = r[1], "kills" === r[0] && (O = r[1]), "gold" !== r[0] || 0 === C.length || !R) return;
                            let t = 0,
                                n = r[1];
                            for (; void 0 !== C[t] && n >= C[t].price;) C[t].a ? St.buyAccessory(C[t].id) : St.buyHat(C[t].id), n -= C[t].price, t++;
                            break
                        }
                        case "15":
                            if (3 !== r.length) return;
                            if (It = r[2], !I || 4 === ue[6] && 15 === ue[7] && 5 !== N[0] && 8 === r[2]) return;
                            qe("6", ue[r[2] - 2]);
                            break;
                        case "16":
                            ot = r[0]
                    }
                })
            }
        }, window.START_MOOMOO && window.START_MOOMOO()
    })()
} catch (e) {}









