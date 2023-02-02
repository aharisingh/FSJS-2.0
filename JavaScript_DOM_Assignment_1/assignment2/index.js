const set =  new Set();
document.querySelectorAll("span").forEach((e) => {
    if(e.innerText == "iPhone" || e.innerText == "Mac" || e.innerText == "iPad" || e.innerText == "Watch" || e.innerText == "AirPods" || e.innerText == "Music" || e.innerText == "TV"){
       set.add(e.innerText);
    }
})
let arr = [...set];
console.log(arr);

//OUTPUT :
//  ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'Music', 'TV']