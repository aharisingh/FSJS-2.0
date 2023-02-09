//Task 1 
let parent = document.querySelector("header nav ul");
console.log(parent);

let allLi = parent.querySelectorAll("li");
let lastLi = allLi[allLi.length - 1];

lastLi.innerHTML = "<a href='./contact/contact.html'>Projects</a>";

let newLi =  document.createElement("li");
newLi.innerHTML = "<a href=''>Hire Me</a>";
parent.appendChild(newLi);

//Task 2 
let inputField =  document.querySelector(".search-field input");
inputField.placeholder = "Search My Project";

//Task 3 
let para = document.querySelector(".hero-left-section p");
let allSpan = para.querySelectorAll("span");
allSpan[1].innerText = "an Employee";
allSpan[2].innerText = "iNeuron Intelligence Pvt Ltd";

//Task 4
let img = document.querySelector(".hero-right-section img");
img.src = "./img1.jpg";

//Task 5
let btnParent = document.querySelector(".hero-right-section-btns");
let newbtn = document.createElement("button");
newbtn.innerText = "Support Me";
btnParent.appendChild(newbtn);
