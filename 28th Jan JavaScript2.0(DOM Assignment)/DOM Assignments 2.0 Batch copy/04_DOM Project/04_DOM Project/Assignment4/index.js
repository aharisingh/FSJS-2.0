let parentArcher =  document.querySelector(".archer");
let childDiv = parentArcher.querySelectorAll("div");
childDiv[2].innerText = "The Archer";

let parentGoblin = document.querySelector(".goblin");
let childDivGoblin =  parentGoblin.querySelectorAll("div");
childDivGoblin[2].innerText = "The Goblin";

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--barbarian").style.color = "white";


document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--archer").style.color = "white";


document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--giant").style.color = "white";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30";
document.querySelector(".clash-card__unit-stats--goblin").style.color = "white";

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff";
document.querySelector(".clash-card__unit-stats--wizard").style.color = "white";

let AllStatsDiv = document.querySelectorAll(".no-border");
for(let i=0;i<AllStatsDiv.length;i++){
    AllStatsDiv[i].style.color = "white";
}


