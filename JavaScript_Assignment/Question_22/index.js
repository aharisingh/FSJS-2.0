const ages = [19,22,19,24,20,25,26,24,25,24];
ages.sort();

console.log(ages);

const minAge = ages[0];
const maxAge = ages[ages.length -1];

console.log(`MinAge : ${minAge}`);
console.log(`MaxAge : : ${maxAge}`);

let medianAge = 0;
const arrLength = ages.length;
if(arrLength%2 == 0){//even length
    medianAge = (ages[Math.floor(arrLength/2)] + ages[Math.floor(arrLength/2) -1])/2;
}
else{//odd length
    medianAge = (ages[Math.floor(arrLength/2)]);
}

console.log(`MedianAge :  ${medianAge}`);

let avgAge = 0;
for(let i=0;i<arrLength;i++){
    avgAge += ages[i];
}
avgAge = Math.round(avgAge/arrLength);

console.log(`AverageAge : ${avgAge}`);

const ageRange = maxAge -  minAge;

console.log(`Age Range :  ${ageRange}`);

let minToAverageDiff = Math.abs(minAge - avgAge);

let maxToAverageDiff = Math.abs(maxAge - avgAge);

console.log(`minToAverageDiff : ${minToAverageDiff}`);
console.log(`maxToAverageDiff : ${maxToAverageDiff}`);