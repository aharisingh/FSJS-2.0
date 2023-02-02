const AllBtn = document.querySelectorAll(".login-btn-text");

const targetBtn = [...AllBtn][1];
targetBtn.addEventListener("mouseover",function(){
    targetBtn.style.backgroundColor = "red";
})