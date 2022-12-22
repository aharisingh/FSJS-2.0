// 7;
// 2.5;
// //Number values

// 'Harivansh';
// "Harivansh";
// String values

// true  ;
// false ;
// //boolean values

// null;
// undefined;
// //empty values

// //primitive data type (PDT)


// //Array and Object
// [5,8,"Harivansh",true]
//  0 ,1,2,3

//  {
//     fname:Harivansh,
//     lname:Singh
//  }

 //non-primitive data type => will have more than one value

 //variables => place holder for a value

//  var y = 25;//never use var
//  //always use let and const
//  let x = 25;
//  const z = "Harivansh";//constant value

//  let firstName = "Harivansh";
//  let lastName = "singh";
//  const phoneno = 8904505321;

//  console.log("My First Name is : " , firstName);
//  console.log("My Last Name is : " , lastName);
//  console.log("My Phone number is : " + phoneno);
//  console.log(phoneno, firstName , lastName);

 //Template Literal
//  console.log(`My Current name is  ${firstName} , lastName is ${lastName} phoneNo is ${phoneno}`);

 //History
 //Basic pillars of Programming language
 //Values
 //Data Types
 //Difference btw primitive and non - primitive data types
 //console.log => how to print something  on terminal
 //declaring variable
 //Template Literal

 //Operator
 

 //Assignment Operators
let x = 10;
let y = 15;

//Arithmetic Operators
// + , - , *, / (% == remainder)
//  let z = x + y;
// console.log(z);
// console.log(x + y);
// console.log(x - y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

//comparision Operator
let abc = 20;
let xyz = '20';
// console.log(abc > xyz);
// console.log(abc <= xyz);
// console.log(abc >= xyz);

// == or ===
// ==  , compares only value
// === , compares both value as well as data type
// console.log(abc == xyz);
// console.log(abc === xyz);


//Conditions
// let age = 15;
// if(age >= 18){
//     console.log("you are allowed inside the bar");
// }
// else{
//     console.log("Not Allowed");
// }
// let standard = 3;
// if(standard === 1){
// console.log("Room one");
// }
// else if(standard === 2){
// console.log("Room two");
// }
// else if(standard == 3){
// console.log("Room three");
// }
// else{
// console.log("as per your wish");
// }
const log = console.log;
//Array and Object
let name = ["Harivansh","Rohan","Rehan","Rohit","Kevin","Daniel","Sunil","Laura","Sukesh"];
// log(name);
// log(name[0]);
// log(name[1]);
// log(name[name.length - 1]);
// log(name.length);
// log(name[name.length - 9]);

let bankAccount = {
    firstName : "Harivansh",
    "lastName" : "Singh",
    phone : "8252107890",
    balance : 2500
};
log(bankAccount);
log(bankAccount.balance);
log(bankAccount.firstName);
log(bankAccount.lastName);
log(bankAccount["lastName"]);
