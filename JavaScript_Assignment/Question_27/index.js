const isPrime = (n) =>{
    n = parseInt(n);
if(n === 0 || n === 1){
    return false;
}
if(n ===2 || n ===3){return true;}
if(n%2 === 0){return false;}//2 is the only even number
for(let i = 3;i<1 + Math.floor(Math.sqrt(n));i+=2){
    if(n%i === 0){return false;}
}
return true;
}

const printAllPrime = () =>{
    for(let i=0;i<101;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
printAllPrime();