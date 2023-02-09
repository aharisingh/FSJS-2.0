let navLinks = document.querySelectorAll(".nav-link");

for(let i=0;i<navLinks.length;i++){
    navLinks[i].style.color = "#8a2be2";
}

let navDivs =  document.querySelector(".nav-center").querySelectorAll("div");

let lastDiv =  navDivs[navDivs.length - 1];

let newATag = document.createElement("a");
newATag.classList.add("btn");
newATag.innerText = "Pro Subscription";
lastDiv.appendChild(newATag);


let recipeSection =  document.querySelector(".tags-container div");
let aTag = document.createElement("a");
aTag.innerText = "Chinese (7)";
recipeSection.appendChild(aTag);



let gallery =  document.querySelector(".recipe-gallery");
let newDiv = document.createElement("div");
newDiv.classList.add("card");
newDiv.innerHTML = `
<a href="#" class="recipe-text">
<img src="./img/recipe-1.jpeg" class="recipe-img " />
<h5 class="recipe-name">Chicken Tikka</h5>
<p class="recipe-disp">Prep : 20min | Cook : 35min</p>
</a>
`;
gallery.appendChild(newDiv);
let recipeNames = 
document.querySelectorAll(".recipe-name");
for(let i=0;i<recipeNames.length;i++){
    recipeNames[i].style.color = "#6352b3";
}

let recipeDisps = document.querySelectorAll(".recipe-disp");
for(let i=0;i<recipeDisps.length;i++){
    recipeDisps[i].style.color = "#6352b3";
}