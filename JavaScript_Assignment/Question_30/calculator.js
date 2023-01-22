const Calculator = (n1,n2,operator) =>{
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
if(operator === "+"){
    return ((n1 + n2).toFixed(2));
}
else if(operator === "-"){
    return (Math.abs(n1 - n2).toFixed(2));
}
else if(operator  === "*"){
    return ((n1*n2).toFixed(2));
}
else if(operator === "/"){
    if(n2 === 0){
        return Infinity;
    }
    return ((n1/n2).toFixed(2));
}
else {
    return "unknown Operaror";
}
}

console.log(Calculator(13,19,"+"));
console.log(Calculator(13.23,19.42,"+"));
console.log(Calculator(17,320,"-"));
console.log(Calculator(25,20,"*"));
console.log(Calculator(25,3,"/"));
console.log(Calculator(25,0,"/"));
