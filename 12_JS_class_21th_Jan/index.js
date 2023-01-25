//DOM MANIPULATION
//console.log(window);
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.firstElementChild);
// let val = document.getElementById("par1");
// console.log(val);
// console.log(val.innerHTML);
// console.log(val.innerText);

// let val1 = document.getElementsByClassName("text");
// console.log(val1);
// // console.log(val1.innerHTML);
// // console.log(val1.innerText);

// console.log(val1[0].innerText);
// console.log(val1[1].innerHTML);
// console.log(val1[2].innerText);
// val1[0].innerHTML = "TypeScript";
// val1[1].innerHTML = "SpringBoot";
// val1[2].innerHTML = "Angular";

//by tag name
//by tag

//by query selector
let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.innerHTML);
// console.log(h1.innerText);

//selecting using class
let p  = document.querySelector(".par");
p.style.backgroundColor = "black";
p.style.color = "white";

console.log(p);


//selecting using id
let p1 = document.querySelector("#par1");
console.log(p1);

