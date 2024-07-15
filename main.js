/* Create Varaibles to be used in RPG Game */

let experiencePoints = 0
let health = 100
let gold = 50
let currentWeapon = 0
let fighting;
let monsterHealth
let inventory = ["stick"]
 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const weapons = [
    {
        name : "stick",
        power: 5
    },
    {
        name : "dagger",
        power: 30
    },
    {
        name : "claw hamer",
        power: 50
    },
    {
        name : "sword",
        power: 100
    },
];


//Monsters


const monsters = [
    {
        name : "slime",
        level : 2,
        health: 15
    },
    {
        name : "fanged beast",
        level : 8,
        health: 60
    },
    {
        name : "dragon",
        level : 20,
        health: 300
    },
]



const locations = [
    {
        name: 'town square',
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunctions: [goStore, goCave, fightDragon],
        text: ["You are in the town square. You see a sign that says 'store' and a path leading to a cave."]
    },
    {
        name: 'store',
        buttonText: ["Buy Health", "Buy Weapon", "Go to town"],
        buttonFunctions: [buyHealth, buyWeapon, goToTown],
        text: ["You enter the store."]
    },
    {
        name: 'cave',
        buttonText: ["Fight Slime", "Fight fanged beast", "Go to town square"],
        buttonFunctions: [fightSlime, fightBeast, goToTown],
        text: ["You enter the cave. You see monsters."]
    },
    {
        name: 'fight',
        buttonText: ["Attack", "Dodge", "Run"],
        buttonFunctions: [fight, dodge, goToTown],
        text: ["You enter the cave. You see monsters."]
    }


];


// intitialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button1.onclick = location.buttonFunctions[0];
    button2.onclick = location.buttonFunctions[1];
    button3.onclick = location.buttonFunctions[2];
    text.innerText = location.text[0];
}


// create the functions 

function goToTown(){
    update(locations[0] )
    }


function goStore(){
    update(locations[1])
}
function goCave(){
    update(locations[2])
}




 function buyHealth(){
    
    if (gold >= 10){
        gold -= 10
        health += 10
        goldText.innerText = gold
        healthText.innerText = health
    }else{
        text.innerText ="You broke. You dont have the money"
    }
  
 }

 function buyWeapon(){ 
    if(currentWeapon < weapons.length - 1) {
        if (gold >= 30){
            gold -=30;
            currentWeapon ++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon;
            inventory.push(newWeapon)
            text.innerText += "In your Inventory , you have: "+ inventory
        }else{
            text.innerText="You do not have enough gold to buy a weapon"
        }
    }else{
        text.innerText = "You already have the most powerful weapon"
        button2.innerText = "Sell weapon for 15 gold"
        button2.onclick = sellWeapon;
    }
        
 }

 function sellWeapon(){
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a" + currentWeapon + ". "
        text.innerText += "In your inventory you have:" + inventory;
    }else{
        text.innerText = "Dont sell your only weapon";
    }
 }

 function fightSlime(){
    fight = 0
    goFight()
 }

 function fightBeast(){
    fight = 1
    goFight()
 }
 function fightDragon(){
    fight = 2
    goFight()
}

function goFight () {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block"
    monsterNameText.innerHTML = monster[fighting].name
    monsterHealth.innerText = monsterHealth;
}

function attack () {
    text.innerText = "The " + monsters[fighting].name + "attacks."
    text.innerText += "You attack it with your " + weapons[currentWeapon].name + ".";
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;;
    healthText.innerText = monsterHealth
    if (health <= 0){
        lose();
    }
}

function dodge    () {

}