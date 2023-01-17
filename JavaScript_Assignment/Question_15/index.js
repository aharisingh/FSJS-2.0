const creditGrades  = (marks) =>{
    marks = parseInt(marks);
    if (marks >=0 && marks <=49){
        return "F";
    }
    else if(marks >=50 && marks <=59){
        return "D";
    }
    else if(marks >=60 && marks <=69){
                return "C";
    }
    else if(marks >=70 && marks <= 89){
        return "B";
    }
    else if(marks >=90 && marks <=100){
        return "A";
    }
    else{
        console.log("Please enter the correct score");
    }
}
console.log(creditGrades(85));
console.log(creditGrades(51));
console.log(creditGrades(69));
console.log(creditGrades(98));
console.log(creditGrades(44));