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
console.log(text.length);
