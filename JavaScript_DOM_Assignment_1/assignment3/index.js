const parentNav = document.querySelector(".accordion-homepage");

const newSection = document.createElement("section");
newSection.classList.add("parent");
newSection.setAttribute("data-id","9257498");
newSection.setAttribute("data-stats-idx","1,8");
newSection.setAttribute("jslog","129818; track:click,impression");



const h3 = document.createElement("h3");
const content =  `My New FAQ<svg class="up" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg><svg class="down" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>`;
h3.innerHTML = content;


//add h3 to newSection
newSection.appendChild(h3);

//add newSection to parentNav
parentNav.append(newSection);