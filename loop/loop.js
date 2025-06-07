// For loop

for (let i = 1; i <= 5; i++) {
    console.log("Hello World " + i);
}

// for...in loop 
// mainly used for iterating over enumerable properties (keys) of objects
// not recommended for arrays - use for...of or forEach instead
const person = {
    name: "Arin",
    age: 30,
    gender: "Male",
    country: "Nepal"
}
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

// for of loop
// mainly used for iterating over iterable objects like arrays, strings, etc.
const fruits = ["apple\'s", "banana", "orange", "grape"]; // \' will escape the single quote
// so that it can be printed as apple's
for (let fruit of fruits) {
    console.log(fruit);
}


// forEach loop
// mainly used for iterating over arrays
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log("Number: " + number);
});

// while loop
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}
// do...while loop
let index = 1;
do {
    console.log("Index: " + index);
    index++;
}
while (index <= 5);
// nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// break and continue statements
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping number 3");
        continue; // Skip the rest of the loop when i is 3
    }
    if (i === 5) {
        console.log("Breaking at number 5");
        break; // Exit the loop when i is 5
    }
    console.log("Number: " + i);
}
// label statement
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking out of both loops at i=2, j=2");
            break outerLoop; // Break out of both loops
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
// for...of with strings
const message = "Hello";
for (let char of message) {
    console.log(char);
}


// COMPARISON OF BOOLEAN VALUES
// NOT INCLUDING ALL COMPARISON BECAUSE, HAVE LEARNT IN JAVA AND PYTHON SO ONLY ! but not
// INCLUDING ONLY ! AND !!

//  ok ! -> this will inverts the boolea value for eg:
let x = !true;
console.log(x); // false

// !! -> this will convert any value to boolean which means gives the eact boolean value 
// like if the value is false then gives flase and if true then gives true
let y = !!"Hello";
console.log(y); // true
let z = !!0; // becasue 0 is false
console.log(z); // false


// RELATION BETWEEN NULL AND UNDEFINED
// null is an assignment value, it can be assigned to a variable as a representation of no value
/*

🌱 Similarities:
Both represent "no value" or "nothing here".
Both are falsy, meaning they behave like false in boolean expressions.
Both are primitive types in JavaScript.


🌱 Differences:
Feature	                undefined	                                        null
Meaning	        A variable was declared but not assigned	A variable is intentionally set to "no value"
Set by	        JavaScript (automatically)	                You (the developer)
Type	        "undefined" (its own type)	                "object" (weird legacy bug in JS)
Example	        let a; console.log(a); //undefined	        let b = null; console.log(b); // null


*/
// undefined
let a;
console.log(a); // undefined, because it is not assigned any value

// null
let b = null;
console.log(b); // null, because it is explicitly assigned as no value
// null is an object type, while undefined is a type of its own
console.log(typeof b); // object
console.log(typeof a); // undefined


/*
Bonus: Are they equal?
null == undefined → true (loose equality, because both mean “no value”)

null === undefined → false (strict equality, because they are different types)

*/ 

// Ternary Operator
// The ternary operator is a shorthand for an if-else statement
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let num = 5;
console.log(6 > 5 ? "6 is greater than 5 " : "6 is smaller than 5 ");