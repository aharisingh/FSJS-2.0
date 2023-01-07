//conditions
const log = console.log;
//if else
//switch case
//ternary operator /ternary conditions

//Rating mini app

//using if else condition
let rating = 10;
if(rating === 5){
   log("Excellent");
}
else if(rating === 4){
    log("Good");
}
else if(rating === 3){
    log("okay");
}
else if(rating === 2){
    log("bad");
}
else if(rating === 1){
    log("very bad");
}
else{
    log("unacceptable rating");
}

//Switch case example
// let user = 'user';
// switch(user){
//     case "Admin":
//         log("please redirect him/her to admin page");
//         break;
//     case "Mentor":
//         log("please redirect him/her to mentor page");
//         break;
//     case 'normal user':
//         log("redirect him/her to home page");
//         break;
//     default:
//         console.log("Not sure who are you");            
// }


//Ternary Operator

// let raining = false;
// raining? log("hola it's raining") : log("chill it's not raining");

// let isLoggedIn = false;
// isLoggedIn ? log("LogOut") : log("LogIn");

//Math and Date

// const now  = new Date();
// log(now.toString());
// log(now.getFullYear());
// log(now.getDate());
// log(now.getDay());//sunday  - 0 , monday - 1 and  so on
// log(now.getMonth());//jan - 0 and december - 11
// log(now.getTime());
// log(now.getHours());
// log(now.getMinutes());
// log(now.getSeconds());

//Math
const PI = Math.PI;
//log(PI);
// log(Math.round(45.31));
// log(Math.round(45.69));
// log(Math.round(45.50));
//log("****************");
// log(Math.floor(45.50));
// log(Math.ceil(45.50));
//log("****************");
// log(Math.min(45,50,350,100,400,289));
// log(Math.max(48,69,-45,-209,90,100));
//log("*****************");

// log(Math.floor(Math.random()*10));
// log(Math.pow(5.5,3));

// log(Math.log(2));
// log(Math.sin(30));


//loops(do while , while , for , for of , for in)

//do while loop(will run atleast once)
// let i  = 6;
// do{
// log(`value of i is ${i}`);
//     i++;
// }while(i <= 5);


//while loop(wil run only if condition is true)
// let j =6;
// while(j <= 5){
//     log(`value of j is ${j}`);
//     j++;
// }

//for loop
// for(let i =0;i<=5;i++){
//     log("for loop : " , i);
// }

//for of loop
// const arr = [10,20,30,40,50,60];
// for(let i of arr){
//     log(i);
// }

// const str = "Harivansh";
// for(let c of str){
//     log(c);
// }

//for in loop
const obj = {
    name : "Harivansh",
    lname : "Singh",
    email:"harivansh@gmail.com"
}
for(let key in obj){
    log(`key is ${key} and value is ${obj[key]}`);
}
