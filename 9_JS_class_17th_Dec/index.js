const log = console.log;
//Array
let names  = ["Hari","Rohan","Abhinaw","Aman"];
// log(names.length);
// log(names);
// names[names.length - 1] = "Dhiraj";
// log(names);
// log(names[names.length - 1]);

// let names = new Array("Hari","Rohan","Abhinaw","Aman");
// log(names);


//push -  insert new values to array
// names.push("karim");
// log(names);
// names.pop();
// log(names);


//slice(start_id = included , end_id  = excluded)
// log(names.slice(1,4));
// log(names);

//splice(starting id, no. of elements to be removed , elements to be  added)
// let fruits = ["Apple","orange","papaya","lemon","lime"];
// fruits.splice(2,0,"Banana");
// log(fruits);
// fruits.splice(2,2,"Grapes");
// log(fruits);

//concat
// let arr1 = [1,2,3];
// let arr2 = [5,6,7,10];
// let arr3 = [11,13,15,16,20,30];
// log(arr1.concat(arr2));
// log(arr1.concat(arr2,arr3));

//fill 

// let arr4 = [11,13,15,17,19,21,23];
// arr4.fill("Harivansh",1,3);
// log(arr4);

//Include ((a,b) find out value a , starting from index b)
// let nums = [1,2,3,4,5,6,7];
// log(nums.includes(7,4));

//IndexOf(gives the first index of element else return -1)
// let nums = [1,2,3,4,5,6,7,"Harivansh","Harivansh"];
// log(nums.indexOf("Harivansh"));

//isArray()
// let nums = [1,2,3,4,5,6,7,"Harivansh","Harivansh"];
// let c = "gfhdgfhg";
// log(Array.isArray(nums));


//join
// let arr = [1,3,5,7,9,11];
// let temp =(arr.join(" ## "));
// log(typeof(temp));

//keys


//lastIndexOf(return last index of element)
// let nums = [1,2,3,4,3,56,2,3,45];
// log(nums.lastIndexOf(3));

//Map (important!!)
// let maths = [1,4,9,16,25];
// (maths.map((e) =>{
//     log(e);
// }));
// log(maths.map(Math.sqrt));

//reverse
// log(names);
// names.reverse();
// log(names);


//shift -  remove the first element
// let maths = [1,3,5,7,9,11];
// log(maths.shift());

//unshift -  add element at id  0
// maths.unshift(11);
// log(maths);

//sort
// let maths = [8,7,9,1];
// log(maths.sort());
// log(maths);


//converting to array
//  let name1 = "Harivansh Singh";
//  let arr1 = name1.split(" ");
//  log(arr1);


//for of
// let arr2 = ["Hari" , "aana", "marta","daniel","jordan"];

// for(let e of arr2){
//     log(e.toUpperCase());
// }

//Break(break the loop) and Continue(below part won't be executed)
// for(let i = 0;i<5;i++){
//     if(i == 4){break;}
//     log(i);
// }
//HomeWork
//ready array methods in javascript and write a blog on that (compulsory) .
// const arr = [null,undefined,1,2,3,"Harivansh",true,[45,50]];
// console.log(arr);

// const arr1 = ["Harivansh","Rohan","Abhinaw","Rehan"];

// const arr2 =  new Array("Harivansh","Rohan","Abhinaw","Rehan");
// console.log(arr1);
// console.log(arr2);

// let arr1 = ["Harivansh","Rohan","Abhinaw","Rehan"];
// let arr2 = arr1.slice(1,3);
// console.log(arr2);
// let arr3 = arr1.slice();
// console.log(arr3);
// console.log(arr1);
// let arr1 = ['a','b','c'];
// let arr2 = ['d','e','f','g'];
// let arr3 = ['h','i'];
// const arr4 = arr1.concat(arr2);
// console.log(arr4);
// const arr5 = arr1.concat(arr2,arr3);
// console.log(arr5);
// let arr1 = ['a','b','c','d','e'];

// //fill with 'f' from position 1 to 3
// console.log(arr1.fill('f',1,3));

// //fill with 'g' from position 2
// console.log(arr1.fill('g',2));

// //fill with 'x'
// console.log(arr1.fill('x'));

// let arr1 = ["Harivansh","Rohan","Abhinaw","Rehan"];
// console.log(arr1.includes("Harivansh"));
// console.log(arr1.includes("Abhishek"));

// const arr = ['c' ,'b' ,'a','c','a','d','b','a','c'];
// console.log(arr.indexOf('a'));
// console.log(arr.indexOf('abc'));
// console.log(arr.lastIndexOf('a'));

let arr1 = ["Harivansh","Rohan","Abhinaw","Rehan"];
arr1.map((name) =>{
    console.log(name.toLowerCase());
})
// arr1.reverse();
// console.log(arr1);
// arr1.sort();
// console.log(arr1);
// // console.log(Array.isArray(arr1));

// let str = "Harivansh Singh";
// console.log(Array.isArray(str));

// let arr2 = str.split(" ");
// console.log(arr2);