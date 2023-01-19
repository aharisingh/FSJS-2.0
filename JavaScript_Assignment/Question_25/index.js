//BMI Calculator

const BMICalculator = (weight, height) =>{
    let bmi = (weight/(height*height)).toFixed(2);
    if(bmi < 18.5){
        return `You are UnderWeight and your BMI is ${bmi}`;
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        return `You are NormalWeight and your BMI is ${bmi}`;
    }
    else if(bmi >= 25 && bmi <=29.9){
        return `You are OverWeight and your BMI is ${bmi}`;
    }
    else{
        return `You are obese and your BMI is ${bmi}`
    };
}
console.log(BMICalculator(75,1.7));
console.log(BMICalculator(85,1.98));
console.log(BMICalculator(54,1.7));
console.log(BMICalculator(54,1.99));
console.log(BMICalculator(63,1.2));