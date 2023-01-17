const checkEvenOrOdd = (num) =>{
    if((num&1) !=1){
        return(`${num} is even`);
    }
        return(`${num} is odd`);
}
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(14));
console.log(checkEvenOrOdd(100));