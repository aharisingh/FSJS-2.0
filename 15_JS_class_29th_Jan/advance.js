//Rest and Spread
//try and catch
//promises


//spread and rest ...
const sumOne = (x,y) =>{
    return x + y;
}
let arr = [9,21,17,19];
//console.log(sumOne(...arr)); // spread - breaking an array


//Rest
const sum = (...vari) =>{//rest - creating an array
   // console.log(vari);
    let s = 0;
    for(const x of vari){
        s +=x;
    }
    return s;
}
//console.log(sum(1,2,3,4,5));


//Try Catch
/*
try{
//logic
console.log(hari);
}
catch(error){
//error handling message
console.log("Error is : " + error);
}
finally{//this part will always run 
    console.log("Please run it");
}
*/
//throw -  throw with try and catch, lets you control program flow and generate custom error messages.

//Types of Error in JavaScript
/*
Reference Error
Syntax Error
Type Error
*/


//Promises(Pending , fulfilled , Rejected)


//Event Loop 
/*
const user1 = () =>{
    console.log("Hello User 1");
}

const user2 = () =>{
    setTimeout(() =>{
        console.log("Inside SetTimeOut");
    },3000);
    console.log("Hello User 2");
}

const user3 = () =>{
    console.log("Hello User 3");
}

user1();
user3();
user2();
*/

//Promises in JS

const one = () =>{
    return "Login Page";
}

const two = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Credential Correct");
        },3000);
    })
}
const three = () =>{
    return "Please redirect to Home Page";
}

const call = async () =>{
    let callOne = one();
    console.log(callOne);
    let callTwo =await two();
    console.log(callTwo);
    let callThree = three();
    console.log(callThree);
}
call();
