//basic String Methods
/*
1. String.length gives the length of the string
2. String CharAt(index) returns the character at the specified index
3. String charCodeAt(index) returns the Unicode of the character at the specified index

4. Strring at(index) returns the character at the specified index
at() is a new addition to JavaScript.It allows the use of negative indexes while 
charAt() do not. now we can use myString.at(-2) instead of 
charAt(myString.length - 2) to get the second last character of the string.

5. string[index] returns the character at the specified index
if no character is found.[] returns undefined, while charAt()
returns an empty string.
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work


6. Exrtracting String Parts
There are 3 methods to extracting a part of a string:
.slice(start, end)
.substring(start, end)
.substr(start, length)

a. slice() extracts a part of a string and returns the extracted 
part in a new string.

The method takes 2 parameters: start position, and end position(end not included).

dive to examples
*/ 
// legnth
let text = "HELLO WORLD";
console.log(text.length); //12

// charAt
console.log(text.charAt(2)); //L
console.log(text.charAt(20)); // empty string
console.log(text.charAt(-2)); // empty string

// charCodeAt
console.log(text.charCodeAt(2)); //76
console.log(text.charCodeAt(20)); // NaN    
console.log(text.charCodeAt(-2)); // NaN

// at
console.log(text.at(2)); //L
console.log(text.at(20)); // undefined
console.log(text.at(-2)); //L
// at() vs charAt()
console.log(text.at(0)); //H
console.log(text.charAt(0)); //H
console.log(text.at(-1)); //D
console.log(text.charAt(-1)); // empty string
// index
console.log(text[2]); //L
console.log(text[20]); // undefined 
console.log(text[-2]); // undefined
// text[0] = "A"; // Gives no error, but does not work
// text[0] = "A"; // Gives no error, but does not work
// console.log(text); // HELLO WORLD
// Extracting String Parts
console.log(text.slice(0, 5)); //HELLO
console.log(text.slice(6)); //WORLD         
console.log(text.slice(6, 11)); //WORLD
console.log(text.slice(-5)); //WORLD            
console.log(text.slice(-5, -1)); //WORL
console.log(text.slice(0, -1)); //HELLO WORL
console.log(text.slice(0, 20)); //HELLO WORLD
console.log(text.slice(20)); // empty string
console.log(text.slice(-20)); //HELLO WORLD     
console.log(text.slice(-20, -1)); //HELLO WORL
console.log(text.slice(-20, -20)); // empty string
console.log(text.slice(-20, -21)); // empty string
console.log(text.slice(-20, -22)); // empty string
console.log(text.slice(-20, -23)); // empty string
console.log(text.slice(-20, -24)); // empty string  
console.log(text.slice(-20, -25)); // empty string
console.log(text.slice(-20, -26)); // empty string

//substring
console.log(text.substring(0, 5)); //HELLO
console.log(text.substring(6)); //WORLD
console.log(text.substring(6, 11)); //WORLD
console.log(text.substring(-5)); //HELLO WORLD

// replace
console.log(text.replace("HELLO", "HI")); //HI WORLD
console.log(text.replace("WORLD", "EVERYONE")); //HELLO EVERYONE
console.log(text.replace("WORLD", "EVERYONE")); //HELLO EVERYONE

