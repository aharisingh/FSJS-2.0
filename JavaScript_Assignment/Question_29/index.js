const findExtension = (file) =>{
    //split the name on basis of "."
    const arr = file.split(".");
    return arr[1];
}

console.log(findExtension("Index.js"));
console.log(findExtension("code.java"));
console.log(findExtension("graph.cpp"));
console.log(findExtension("script.mjs"));
console.log(findExtension("array.py"));