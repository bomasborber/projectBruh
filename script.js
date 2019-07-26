var yourChoice = "";

var userHP = 100;
var userMP = 80;
var userDMG = 10;
var userSpecial = 30;

var scorecount = 0;

$("#choosechar").click(play);

function play() {

yourChoice = $("#dropdown").val();

if(yourChoice == "warrior"){//selected warrior
    userHP = 100;
    userMP = 80;
    userDMG = 10;
    userSpecial = 30;
}
if(yourChoice == "knight"){//selected knight
    userHP = 150;
    userMP = 100;
    userDMG = 5
    userSpecial = 20;
}
if(yourChoice == "berserker"){//selected berserker
    userHP = 50;
    userMP = 60;
    userDMG = 20;
    userSpecial = 50;
}
console.log("health = " + userHP);
console.log("MP = " + userMP);
console.log("damage = " + userDMG);
console.log("special dmg = " + userSpecial);
}
console.log(yourChoice);