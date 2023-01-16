const num  = 14;
const str = "14";
const arr = ["14"];

const name1  ="rohan";
const name2 = "vivek";
// == checks only the value
console.log(num == str);
console.log(num == arr);
console.log(str == arr);
console.log(name1.length == name2.length);

// === checks both value and data type
console.log(num === str);
console.log(num === arr);
console.log(str === arr);
console.log(name1 === name2);