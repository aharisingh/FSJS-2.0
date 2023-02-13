# **DOM Assignment 1**
## **Task 1**

![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

### **Project Solution**

```js
let parent = document.querySelector("header nav ul");
console.log(parent);

let allLi = parent.querySelectorAll("li");
let lastLi = allLi[allLi.length - 1];

lastLi.innerHTML = "<a href='./contact/contact.html'>Projects</a>";

let newLi =  document.createElement("li");
newLi.innerHTML = "<a href=''>Hire Me</a>";
parent.appendChild(newLi);
```
## **Task 2**

![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

### **Project Solution**

```js
let inputField =  document.querySelector(".search-field input");
inputField.placeholder = "Search My Project";
```


## **Task 3**

![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

### **Project Solution**

```js
let para = document.querySelector(".hero-left-section p");
let allSpan = para.querySelectorAll("span");
allSpan[1].innerText = "an Employee";
allSpan[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

## **Task 4**

![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

### **Project Solution**

```js
let img = document.querySelector(".hero-right-section img");
img.src = "./img1.jpg";
```

## **Task 5**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

### **Project Solution**

```js
let img = document.querySelector(".hero-right-section img");
img.src = "./img1.jpg";
```

# **DOM Assignment 2**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

### **Project Solution**

```js
No Difference 
```

## **Task 2**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

### **Project Solution**

```js
let parent =  document.querySelector(".accordian-wrapper");

let newChild =  document.createElement("div");
 newChild.classList.add("accordian");
newChild.innerHTML = `
<h3>Skills</h3>
<p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over github</p>
`;

parent.appendChild(newChild);
```

# **DOM Assignment 3**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

### **Project Solution**

```js
let enterName =  document.querySelector(".enterName");
let enterMail = document.querySelector(".enterMail");
let enterMessage = document.querySelector(".enterMessage");

let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userMessage = document.querySelector(".userMessage");
enterName.placeholder = "FSJS 2.0";
userName.placeholder = "FSJS 2.0";

enterMail.placeholder = "fsjs@ineuron.ai";
userEmail.placeholder = "fsjs@ineuron.ai";

enterMessage.placeholder = "Hello World";
userMessage.placeholder = "Hello World";
```


# **DOM Assignment 4**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

### **Project Solution**

```js
let parentArcher =  document.querySelector(".archer");
let childDiv = parentArcher.querySelectorAll("div");
childDiv[2].innerText = "The Archer";

let parentGoblin = document.querySelector(".goblin");
let childDivGoblin =  parentGoblin.querySelectorAll("div");
childDivGoblin[2].innerText = "The Goblin";

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--barbarian").style.color = "white";


document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--archer").style.color = "white";


document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--giant").style.color = "white";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30";
document.querySelector(".clash-card__unit-stats--goblin").style.color = "white";

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff";
document.querySelector(".clash-card__unit-stats--wizard").style.color = "white";

let AllStatsDiv = document.querySelectorAll(".no-border");
for(let i=0;i<AllStatsDiv.length;i++){
    AllStatsDiv[i].style.color = "white";
}
```



# **DOM Assignment 5**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

### **Project Solution**

```js
let navLinks = document.querySelectorAll(".nav-link");

for(let i=0;i<navLinks.length;i++){
    navLinks[i].style.color = "#8a2be2";
}

let navDivs =  document.querySelector(".nav-center").querySelectorAll("div");

let lastDiv =  navDivs[navDivs.length - 1];

let newATag = document.createElement("a");
newATag.classList.add("btn");
newATag.innerText = "Pro Subscription";
lastDiv.appendChild(newATag);


let recipeSection =  document.querySelector(".tags-container div");
let aTag = document.createElement("a");
aTag.innerText = "Chinese (7)";
recipeSection.appendChild(aTag);



let gallery =  document.querySelector(".recipe-gallery");
let newDiv = document.createElement("div");
newDiv.classList.add("card");
newDiv.innerHTML = `
<a href="#" class="recipe-text">
<img src="./img/recipe-1.jpeg" class="recipe-img " />
<h5 class="recipe-name">Chicken Tikka</h5>
<p class="recipe-disp">Prep : 20min | Cook : 35min</p>
</a>
`;
gallery.appendChild(newDiv);
let recipeNames = 
document.querySelectorAll(".recipe-name");
for(let i=0;i<recipeNames.length;i++){
    recipeNames[i].style.color = "#6352b3";
}

let recipeDisps = document.querySelectorAll(".recipe-disp");
for(let i=0;i<recipeDisps.length;i++){
    recipeDisps[i].style.color = "#6352b3";
}
```


# **DOM Assignment 6**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

### **Project Solution**

```js
let headerImg =  document.querySelector("header img");
headerImg.src = "./assets/ineuron-logo.png";
```

## **Task 2**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

### **Project Solution**

```js
document.querySelector(".app_price span").innerText = "$10";
```


# **DOM Assignment 7**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P7/DOM%20P7/ass7.1-after.png)

### **Project Solution**

```js
let mainLanguage =  document.querySelector(".main__languages");
let aTags =  mainLanguage.querySelectorAll("a");
console.log(aTags);
for(let i=1;i<10;i +=2){
    mainLanguage.removeChild(aTags[i]);
}

```

## **Task 2**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P7/DOM%20P7/ass7.2-after.png)

### **Project Solution**

```js
document.querySelector(".main__form-input").value = "Hello Everyone";
let val =  document.querySelector(".main__form-input").getAttribute("value");
let btn =  document.querySelector(".main__form-btn");
btn.disabled =  false;
btn.addEventListener("click",func);
function func(){
    location.reload();
}
```


# **DOM Assignment 8**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P8/DOM%20P8/ass8.1-after.png)

### **Project Solution**

```js
let sec = document.querySelector(".col-lg-4");
sec.style.border = "5px solid red";
```

## **Task 2**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P8/DOM%20P8/ass8.2-after.png)

### **Project Solution**

```js
document.body.style.backgroundImage = "url('')";
```



# **DOM Assignment 9**
## **Task 1**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P9/DOM%20P9/ass9.1-after.png)

### **Project Solution**

```js
document.querySelector("h1").style.color = "#dc143c";
```

## **Task 2**
![Output Image](./DOM%20Assignments%202.0%20Batch%20copy/DOM%20P9/DOM%20P9/ass9.2-after.png)

### **Project Solution**

```js
document.querySelector(".add-to-cart").style.backgroundColor = "#dc143c";
```