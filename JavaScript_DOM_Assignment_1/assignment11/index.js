//learn abt replaceChild
// replaceChild(newChild ,  oldChild)
let newLogo =  document.createElement("img");
newLogo.src = "https://cdn.logo.com/hotlink-ok/logo-social.png";
newLogo.alt = "New Logo";
newLogo.style.width = "80px"
newLogo.style.height = "80px";

//select the existing logo
let logo = document.querySelector('.icon-logo');

let parentNode = logo.parentNode;

parentNode.replaceChild(newLogo,logo);