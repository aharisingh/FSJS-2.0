const list = `
<li>India</li>
<li>America</li>
<li>Spain</li>
<li>Portugal</li>
<li>Ireland</li>
`;
//Inserting Text inside HTML
//selecting ul from html
const ul = document.querySelector("ul");
//inserting html inside ul
ul.innerHTML = list;

//creating element on screen dynamically(HTML Tag)
//create an element
const ele = document.createElement("h1");
ele.style.color = "green";
ele.style.fontSize = "40px";
//inserting content inside newly created element
ele.textContent = "Hello India";
//append an element to body
document.querySelector("body").appendChild(ele);
//remove an element from body
document.querySelector("body").removeChild(document.querySelector("h1"));

//for loop
for(let i = 0;i<2;i++){
    let p = document.createElement("p");
    p.textContent = "Paragraph";
    p.style.fontSize = "18px";
    console.log(p);
    document.querySelector("body").appendChild(p);
}

//creating func function
function func(){
    let val = prompt("Calculate Value 50 - 30");
    if(20 === parseInt(val)){
        alert("Correct");
        // console.log(document.querySelector(".sub"));
        document.querySelector(".sub").style.color = "green";
        document.querySelector(".sub").style.backgroundColor = "white";
    }
    else{
        alert("InCorrect");
        document.querySelector(".sub").style.color = "red";
        document.querySelector(".sub").style.backgroundColor = "white";
    }
}