/* Exercise 1:
   -----------
   Write a JavaScript program to check two numbers and return true 
   if one of the number is 100 or if the sum of the two numbers is 1oo 

*/

// solution01

function checkNumbers(num1, num2){
    return (num1 || num2 ) === 100 ? true : (num1 + num2) === 100 ? true: false;
}

console.log(checkNumbers(30, 70 ));
console.log(checkNumbers(100, 20 ));
console.log(checkNumbers(20, 30 )); 
console.log (checkNumbers(100, 0 ));
console.log (checkNumbers(0, 100));
console.log (checkNumbers(10, 0));
console.log (checkNumbers(0, 10));
console.log (checkNumbers(20, 80));
console.log (checkNumbers(50, 50));


/* Exercise 2:
   -----------
   Write a javaScript program to get the extenstion of a filename.

*/ 

let filename = (input) => {
    return input.slice(input.lastIndexOf('.'));
}
console.log(filename('index.html'));
console.log(filename('script.js'));
console.log(filename('style.css'));
console.log(filename('image.png'));


/* Exercise 3:
   -----------
   Write a JavaScript program to replace every character in 
   a given string with the charcater following it in the 
   alphabet.

*/ 

// solution03
const replacechar = (str) =>
    /*
        First we split the string into list of charactes using split("") method

        then using map() we get each split chars into next charse 
        using this  String.fromCharCode() method converts unicode number into 
        character and charCodeAt() method returns unicode number 
        of a charcater so first we get the the unicode number and add 1 and pass 
        this unicode number to String.fromCharCode() to get the next character

        after getting the list of next chars we join the list using join("") method 
        to get the string 

    */ 
    str.split('') //split str into list 
    .map(char => String.fromCharCode(char.charCodeAt
        (0) + 1))
    .join(''); // get char code and increment by 1 and convert back to char
console.log(replacechar('hello')); //ifmmp
console.log(replacechar('world')); //xpsme
console.log(replacechar('abcd')); //xpsme


/* Exercise 4:
    -----------
    Write a JavaScript program to get the current date. 
    Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/ 

// solution04

const currentDate = (date = new Date()) => {
    let day = date.getDate(); // instead of getDay() use getDate becsue js index count from 0 not 1 
    let month = date.getMonth() + 1; //current month also same count begin from 0 so we add 1 to get (jan - dec)
    let years = date.getFullYear(); // this year

    return `${day}/${month}/${years}`;
}

console.log(currentDate()); //no args just get the default 

/* Exercise 5:
   ----------
   Write a JavaScript program to create a new String adding "New!" in front of a 
   given string if the given string with "New!" already then return the original string.
*/ 

const newString = (str) => {
    return str.includes("New!") ? str : "New! " + str;
}

console.log(newString("apple"));
console.log(newString("New! apple"));