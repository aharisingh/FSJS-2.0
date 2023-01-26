document.addEventListener("click",func);
function func(){
    document.querySelector("#event").innerText = "Mouse Clicked";
}

document.addEventListener("dblclick",func1);

function func1(){
    document.querySelector("#event").innerText = "Mouse Clicked Twice";
}