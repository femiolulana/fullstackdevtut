let experiencePoints = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xptext");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "sword",
        power: 100
    }
];

const locations = [
    {
        name: 'town square',
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        button_functions: [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says 'store' and a path leading to a cave."
    },
    {
        name: 'store',
        buttonText: ["Buy Health", "Buy Weapon", "Go to town"],
        button_functions: [buyHealth, buyWeapon, goToTown],
        text: "You enter the store."
    },
    {
        name: 'cave',
        buttonText: ["Fight Slime", "Fight fanged beast", "Go to town square"],
        button_functions: [fightSlime, fightBeast, goToTown],
        text: "You enter the cave. You see monsters."
    }
];

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button1.onclick = location.button_functions[0];
    button2.onclick = location.button_functions[1];
    button3.onclick = location.button_functions[2];
    text.innerText = location.text;
}

// Create the functions

function goToTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log('FightDragon');
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You are broke. You don't have the money.";
    }
}

function buyWeapon() {
    if (gold >= 30) {
        if (currentWeapon < weapons.length - 1) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon;
            inventory.push(newWeapon);
            text.innerText += " In your inventory, you have: " + inventory.join(", ");
        } else {
            text.innerText = "You already have the best weapon.";
        }
    } else {
        text.innerText = "You do not have enough gold to buy a weapon.";
    }
}

function fightSlime() {
    console.log('FightSlime');
}

function fightBeast() {
    console.log('FightBeast');
}

// Update the UI with initial values
xpText.innerText = experiencePoints;
healthText.innerText = health;
goldText.innerText = gold;
