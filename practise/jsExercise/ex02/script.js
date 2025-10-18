/* Exercise 1:
   ----------
   Write a JavaScript program to create a new string from a given 
   string taking the first 3 characters and the last 3 characters of 
   a string and adding them together. The string length must be 3 or more, if not, the 
   ogirinal string is returned .
*/ 

const joinString = (str) => {
    if (str.length <= 2) return str;
    return str.slice(0, 3) + str.slice(-3);

}

console.log(joinString("ap"));
console.log(joinString("appssslt"));
console.log(joinString("abcdef"));

/* Exercise 2:
   ----------
   write a JavaScript program to extract the first half of a string of even length.
*/ 
// solution

const firstHalf = (str) => str.length % 2 === 0 ? 
str.slice(0, str.length /2) :str;  // "/" will give the whole number 

console.log(firstHalf("abcd"))
console.log(firstHalf("ab"))


/* Exercise 3:
   ---------
   Write a JaavaScript to concatenate two strings except theri first character.
*/ 
// solution
const concatExceptFirstChar = (str1, str2) => {
    return str1.slice(1) + str2.slice(1);
}

console.log(concatExceptFirstChar("hello", "world"));
console.log(concatExceptFirstChar("hey", "There"));

/* Exercise4:
   ---------
   Given two values, Write a JavaScipt program to find out which one is nearest to 100
*/ 

// solution:
const nearestToHundred = (a, b) => {
    // let num1 = 100 - a;
    // let num2 = 100 - b;
    // return num1 > num2 ? b:a;
    return a > b ? a:b;
}

console.log(nearestToHundred(50, 60));
console.log(nearestToHundred(40, 80));
console.log(nearestToHundred(99, 1));
console.log(nearestToHundred(49, 51));
console.log(nearestToHundred(50, 50));

/* Exercise 5:
   ----------
   Write a JavaScript program to check a given string contains 2 to 4 
   occurrences of a specified chars .
*/ 
// solution
// helper function 
/*
    takes str and char as arg and str.split will splits 
    the string into list where filter will loop throuh all splited letter list 
    and checked if the char is equal present to the list items and if it is then return the total length.
*/ 
const occurChars = (str, char) => {
    return str.split("").filter(letter => letter === char).length;
}

const containsTwotoFour = (str, char) => {
    return occurChars(str, char) >= 2 && occurChars(str, char) <= 4;

}

console.log(containsTwotoFour("ooh!", "o"));
console.log(containsTwotoFour("oh!", "o"));
console.log(containsTwotoFour("oooh!", "o"));
console.log(containsTwotoFour("ooooh!", "o"));
console.log(containsTwotoFour("oooooh!", "o"));