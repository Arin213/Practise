// characters count
// let userInput = prompt("Write your brief: ");

// let totalChar = userInput.length;
// let remainingChar = 280 - totalChar;
// // console.log("You've written " + totalChar + " characters, " + 
//     // "you have " + remainingChar + " characters left.");
// console.log(userInput.slice(0, 280));


// toUpperCase
// let firstName = "Arin";
// we can simply do firstName.toUpperCase() to convert the string to uppercase
// but without assigning it to a variable, it won't be stored
// let upperCaseName = firstName.toUpperCase();
// console.log(upperCaseName); // ARIN
// toLowerCase
// let lowerCaseName = firstName.toLowerCase();
// console.log(lowerCaseName); // arin
// toLowerCase and toUpperCase are useful for case-insensitive comparisons
// toLowerCase and toUpperCase do not change the original string
// they return a new string with the changes


function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    // 365 days in year
    // 52 weeks in year
    // 12 months in year
    let remaining_age = 90 - age;
    let remaining_days = remaining_age * 365;
    let remaining_weeks = remaining_age * 52;
    let remaining_months = remaining_age * 12;
    
    console.log(`You have ${remaining_days}, ${remaining_weeks} weeks, and ${remaining_months} months left.`);
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(56);