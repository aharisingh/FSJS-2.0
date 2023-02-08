//Revision Class
/*
NodeJS - It's a runtime to write JavaScript .
BROWSER =>  INITIALLY
NODE JS RUNTIME - Exact env for JavaScript 
 V8 -  javaScript Browser Engine (libuv c++)

 Lexical Scope
 Execution Context
 Global Scope
 Datatype - Primitive(Number,String,Boolean,Null,Undefined)-single Value and non-primitive(Array and Object)

 Everything in Javascript is an Object

 Use Strict

 Template Literal (Template String or JavaScript Interpolation)

 Operators (Logical,Arithmetic,assignment,ternary operator)

 Conditions 
 if else
 switch case
 Ternary Condition( condition ? (if true run) : (if false run) )
*/

//Array 
let names = ["a","b","c",1,3,5,"David"];
console.log(names);

let namess = new Array(
    "a","b","c",1,3,5,"David"
);
// console.log(namess);
// console.log(namess.length);

//Array Methods -  push ,pop,slice,shift,unshift,splice,fill,includes,indexOf,join,lastIndexOf,reverse,concat,sort

const str = "Hello Everyone Myself Harivansh";
//console.log(str.split(" "));

//Math 
//Date
//loops(for , while , do while , for of , for in)
//for of is for array
// for(let e of names){
//     console.log(e);
// }

/*
const obj ={
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6
};
//for in is for object
for(let p in obj){
    console.log(p + " : " + obj[p]);
}
*/

//Function 


const obj1 = {
    "one" : 1,
    getOne : () =>{
        console.log("Method inside Obj");
        console.log(obj1["one"]);
    }
}

obj1.getOne();
