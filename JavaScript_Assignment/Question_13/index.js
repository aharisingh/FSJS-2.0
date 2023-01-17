const age = prompt("Enter your age : ");

if(age >='18'){
    console.log("You are old enough to drive.");
}
else if(age == '0'){
    console.log('You have just born chill and wait for 18 years to drive.');
}
else{
    console.log(`You need to  wait for ${18 - age} years to drive.`);
}