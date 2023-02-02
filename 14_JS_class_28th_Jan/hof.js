//HOF => Higher Order Function 
//Higher Order Functions are functions which accepts other function as parameter or return a function as  a value.The function passed as a parameter is called as callback .
//CALLBACK - 

// function a(){
//     console.log("Hello Harivansh");
// }

// function b(){
//     a();
// }
// b();

//Example of a callback function
// const callback = (n) =>{
// return n**2;
// };
// function cube(callback,n){
//     return callback(n) * n;
// }

// console.log(cube(callback,4));

// console.log(cube(callback , 7));

//For Each function
// const arr = ["Harivansh","Rohan","Anubhav","Harry"];
// arr.forEach(func);
// function func(value){
// console.log(value);
// }

// arr.forEach((val) =>{
//     console.log(val);
// })

//SetTimeOut Function
// setTimeout(() =>{
// console.log('Hello World');
// },2000);

// function cback(){
//     console.log("Hello Everyone");
// }
// setTimeout(cback,4000);

//SetInterval Function
// setInterval(() => {
//     console.log("Hey Hey");
// },2500);

//For Each
//map
//filter
//reduce
//find
//every
//some
//sort

const nums = [1,2,3,4,5,6,7,8,9,10,11];

//map
// const numsSquare = nums.map((n) =>{
//     return (n**2);
// })
// console.log(numsSquare);

// //filter
// const evenNums = nums.filter((n) =>{
//     return n%2 == 0;
// })
// console.log(evenNums);


//reduce
// let sum = nums.reduce((acc,curr) => acc += curr,10);
// console.log(sum);

//sort
// const names = ["Sunil" , "Sukesh","Joseph","Arun","Javeed","Marta","Jordan"];
// names.sort().reverse();
// console.log(names);

//Destructuring , Spread Operator and Rest Operator
const arr = [10,20,30,40,50];
const [a,b,c,d,e] =  arr;
console.log(a,b,c,d,e);

let [var1,var2,,,var3] = arr;
console.log(var1,var2,var3);


const arr2 = [1,2,3,4,5,6,7,8,9];
let [num1,,num2,,...rest] = arr2;
console.log(num1,num2);
console.log(rest);