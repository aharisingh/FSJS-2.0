const evenArr = [];
const oddArr  = [];
for(let i=0;i<101;i++){
    if(i%2 === 0){
        evenArr.push(i);
    }
    else{
        oddArr.push(i);
    }
}
console.log(`Even Array :${evenArr}`);

console.log(`Odd Array :${oddArr}`);