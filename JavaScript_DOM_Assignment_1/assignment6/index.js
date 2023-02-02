const ele = document.querySelector("._input_1f3oz_13");

//on mouse enter(hover) change the color to  red
ele.addEventListener("mouseenter",function() {
    ele.style.backgroundColor = "red";
})


//on mouse leave change the color to original color
ele.addEventListener("mouseleave",function (){
    ele.style.backgroundColor = "#eceff1";
})
