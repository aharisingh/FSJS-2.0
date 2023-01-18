const daysInAMonth = (month,isALeapYear) =>{
    month =  month.toLowerCase();
    if(month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december"){
        return 31;
    }
    else if(month === "february"){
       if(isALeapYear){
        return 29;
       }
       return 28;
    }
    else if(month === "april" || month === "june" || month === "september" || month === "november"){
        return 30;
    }
    else{
        return 0;
    }
}
console.log(daysInAMonth("February",true));
console.log(daysInAMonth("February",false));
console.log(daysInAMonth("October",true));
console.log(daysInAMonth("October",false));
console.log(daysInAMonth("ApRil",true));