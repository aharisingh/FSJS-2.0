const isPrime = (num) =>{
    num = parseInt(num);
    if(num < 2){
        return false;
    }
    if(num === 2 || num === 3){
        return true;
    }
    if(num%2 ===0){return false;}//2 only even prime no.
    for(let i = 3;i<1 + Math.floor(Math.sqrt(num));i +=2){
        if(num%i === 0){return false;}
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(17));

