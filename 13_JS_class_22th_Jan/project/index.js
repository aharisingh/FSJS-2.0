
let btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click",changeBgc);
function changeBgc(){
    let val = "0123456789ABCDEF";
    let clr = "#";
    for(let i=0;i<6;i++){
        clr += val.charAt(Math.floor(Math.random() * 16));
    }
    console.log(clr);
document.body.style.backgroundColor = clr;
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
}