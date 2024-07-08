/* Create Varaibles to be used in RPG Game */

let experencePoint = 0
let health = 100
let gold = 50
let currentWeapon = 0
let fighting;
let monsterHealth
let inventory = ["stick", "dagger","sword"]

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations =[]


// intitialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){

};


// create the functions 

function goToTown(){
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goToTown;
    text.innerText = "You are in the town square. You see a sign that says \"store\""
}

function goStore(){
    button1.innerText = "Buy 10 health (10 gold)"
    button2.innerText = "Buy weapon (30 gold)"
    button3.innerText = "Go to Town Square"
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goToTown;
    text.innerText = "You entered the store"
}

function goCave(){
    console.log('Going to Cave')
}

function fightDragon(){
    console.log('FightDragon')
}


 function buyHealth(){

 }

 function buyWeapon(){
    
 }

