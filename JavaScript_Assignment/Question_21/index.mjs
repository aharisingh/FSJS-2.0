import countries from "./Countries.mjs";
import webTechs from "./web_techs.mjs";

console.log(countries);
console.log(webTechs);

let id = countries.indexOf("Ethiopia");
if(id == -1){//value not present in arr
countries.push("Ethiopia");
}
else{
    console.log("ETHIOPIA");
}
console.log(countries);
//Note : To Use ES6 modules in a node.js env , rename ur file with .mjs extension .