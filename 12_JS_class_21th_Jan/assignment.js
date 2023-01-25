let body = document.querySelector("body");
window.addEventListener('click',function createCircle(e){
console.log(window);
console.log(window.screenX);
    let div = document.createElement("div");
    div.style.position = "absolute";
    // div.innerText = "Hey Everyone";
    // console.log(document.);
   div.classList.add("circle");
   console.log(e.clientX);
   div.style.left = e.clientX + "px";
   div.style.top = e.clientY + "px";
   body.appendChild(div);
   // return body;
});