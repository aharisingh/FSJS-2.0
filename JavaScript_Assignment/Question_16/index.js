const checkSeason = (month) =>{
month = month.toLowerCase();
    if(month === "december" ||month === "january" || month === "february"){
        return "Winter";
    }
    else if(month === "march" ||month === "april" || month === "may"){
        return "Spring";
    }
    else if(month === "june" ||month === "july" || month === "august"){
        return "Summer";
    }
    else if(month === "september" ||month === "october" || month === "november"){
        return "Autumn";
    }
    else{
        return "please enter the correct month name";
    }
}
console.log(checkSeason("January"));
console.log(checkSeason("June"));
console.log(checkSeason("October"));
console.log(checkSeason("MARCH"));
console.log(checkSeason("MaY"));
console.log(checkSeason("InvalidInput"));