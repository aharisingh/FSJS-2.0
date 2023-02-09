//Task 1
//No Difference

//Task 2
let parent =  document.querySelector(".accordian-wrapper");

let newChild =  document.createElement("div");
 newChild.classList.add("accordian");
newChild.innerHTML = `
<h3>Skills</h3>
<p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over github</p>
`;

parent.appendChild(newChild);