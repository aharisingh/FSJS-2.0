const log = console.log;
//Completed
// Datatypes - Number , string,bolean, null and undefined
// Array and Object
// operators
// conditions
// If , If else,switch and ternary conditions
//loops -  do while , while and for loop
//Math and Date
//Array and it's Method
//for of and for in

//Todays Topic

//function and object

// function sum(a,b){//fn definition
//     console.log(a + b);
// }
// //calling the function having parameter
// sum(15,10);


//fn with return type
// function sum1(a,b){
//     return a + b;
// }
// console.log(sum1(45,35));
// console.log(sum1(36,73));

// function URL(url , domain){
//     let con = "https://";
//     let res = con + url + domain;
//     return res;
// }
// log(URL("google",".com"));
// log(URL("pes",".edu"));
// console.log(URL("abcdef",".com"));

// function sum(arr){
//     let sum  = 0;
//     for(let i of arr){
//         sum += i;
//     }
//     return sum;
// }

// let sumarr = [1,2,3,4,5,6,7,8];
// log(sum(sumarr));

// function temp(){
// let sum = 0;
//     for(let i = 0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// log(temp(25,30,34,40,45));

let arrowfn = () => {
//    let sum = 0;
//     for(let i = 0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     console.log(sum);
//     return sum;
}
//log(arrowfn(25,30,34,40,45));

//Object in js

let hari = {
    firstName : "Harivansh",
    lastName : "Singh",
    age : 23
};
// log(hari);
// log(hari.lastName);
// log(hari['lastName']);
// hari.age = 18;
// log(hari);

// for in loop
for(let obj in hari){
    log(obj);
    log(hari[obj]);
}
