const daysInAMonth = (month) =>{
    month =  month.toLowerCase();
    if(month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december"){
        return 31;
    }
    else if(month === "february"){
        return 28;
    }
    else if(month === "april" || month === "june" || month === "september" || month === "november"){
        return 30;
    }
    else{
        return 0;
    }
}
console.log(daysInAMonth("JAnuARy"));
console.log(daysInAMonth("ApRiL"));
console.log(daysInAMonth("JuLY"));
console.log(daysInAMonth("October"));

