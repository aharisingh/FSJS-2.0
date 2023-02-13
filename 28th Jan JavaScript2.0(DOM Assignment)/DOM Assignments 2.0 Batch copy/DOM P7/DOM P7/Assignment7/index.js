//Task 1
let mainLanguage =  document.querySelector(".main__languages");
let aTags =  mainLanguage.querySelectorAll("a");
console.log(aTags);
for(let i=1;i<10;i +=2){
    mainLanguage.removeChild(aTags[i]);
}

//Task 2
document.querySelector(".main__form-input").value = "Hello Everyone";
let val =  document.querySelector(".main__form-input").getAttribute("value");
let btn =  document.querySelector(".main__form-btn");
btn.disabled =  false;
btn.addEventListener("click",func);
function func(){
    location.reload();
}