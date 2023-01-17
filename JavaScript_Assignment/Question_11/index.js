const date  =  new Date();
// console.log(date);
const currentYear = date.getFullYear();
console.log(`Year Today is : ${currentYear}`);

const currentMonth = date.getMonth();
console.log(`Current Month is : ${currentMonth}`);//JavaScript count months from 0


console.log(`Today's date is : ${date}`);

const todaysDate = date.getDate();
console.log(`Todays's date as number is :  ${todaysDate}`);


const currentHour = date.getHours();
console.log(`Current Hour is : ${currentHour}`);

const minutes = date.getMinutes();
console.log(`Minute is : ${minutes}`);

console.log(`Seconds elapsed from 1 jan 1970 is : ${date.valueOf()}`);

