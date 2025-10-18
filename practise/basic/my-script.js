console.log("This script is from  external file");

let FirstName = "John";
let surname = "Doe";
console.log(FirstName);
console.log(surname);


// re-asigning variables
let age = 11;
console.log(age + " is the initial age");

// no need to pass the let keyword again 
age = 52;
console.log(age + " after re-assigning age");

// another keyword is const which is used to declarre
// variables that are not going to be changed
const pi = 3.14;

// if we try to re-assign a const variable, it will throw an error
// pi = 10;

console.log(pi + " is the value of pi");

// we can also declare variables using var
var city = "New York";
console.log(city + " is the city");
// var is function scoped which means
// So var is like Python's scoping - 
// it ignores block boundaries (if, for, etc.) 
// but still respects function boundaries. 
// It's not automatically global unless you 
// declare it outside all functions. while let and const 
// are block scoped 

// Numbers
console.log((3+2) - 76 * (1+1));

// Exercise:
/**
 * 1. Add 2 numbers together! in your script, type in console.log(23+97).
 * Running this should log 120 to the console.
 */
let num1 = 23,
    num2 = 97;

console.log(num1 + num2)

/*
1. Do the same thing but add 6 different numbers together.
*/
let num3 = 10,
    num4 = 20,
    num5 = 30,
    num6 = 40,
    num7 = 50;
console.log(num1 + num2 + num3 + num4 + num5 + num6 + num7);

/*
Now log the value of the following experssion: (4 + 6 + 9)/ 77.
The console should log approximately 0.24675.
*/

console.log((4 + 6 + 9)/77);

/*
Let's use some variables!
1. Add this statement to the script tag: let a = 10;
2.Below it, add console.log(a). the result shoudl be 10
3. Afterwards, re-assign a with a different number value. log a again after
wards and it should show the updated value (the previous log should still show)
the old value of 10 since that was before a was re-assigned.
4. Now add to the bottom of the script let b = 7 * a.
5. log what b is. It should log the result of 7 multiplied by whatever you re-assigned
a with

*/

let a = 10;
console.log(a);
a = 20;
console.log(a);
let b = 7 * a;
console.log(b);

/*
Try this sequence:

1. Declare a const variable max with the value of 57.
2. Declare another const variable actual and assign it max - 13.
3. Declare another const variable percentage and assign it actual/max.
4. Now if you log perecentage, you should see a value in the console
like 0.7719
*/

const max = 57;
const actual = max -13;
const percentage = actual / max;

console.log(percentage);


// 
const lotsOfDecimal = 1.7665849587;
console.log(lotsOfDecimal);
// toFixed() method formats a number using fixed-point notation
// It returns a string representation of the number
// with a specified number of digits after the decimal point
// In this case, we want to format it to 2 decimal places
// so we pass 2 as an argument to the toFixed() method
// The result will be a string representation of the number
// with 2 decimal places, rounded if necessary
// For example, if the number is 1.7665849587,
// the result will be "1.77" as a string
// If the number is 1.7645849587, the result will be "1.76" as a string
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
console.log(typeof(twoDecimalPlaces));
// If we want to convert the string representation of the number
// back to a number, we can use parseInt() or parseFloat()
// parseInt() will convert the string to an integer
// parseFloat() will convert the string to a floating-point number
// In this case, we want to convert the string to a floating-point number
// so we will use parseFloat() instead of parseInt()
twoDecimalPlaces = parseInt(twoDecimalPlaces);
console.log(typeof(twoDecimalPlaces));


// use of operators especially +
console.log("1" + 2); // "12" - string concatenation cause first operand 
// is a string so the second operand is converted to a string

/*
this would be 12 cause the second operand is a string and 
this would also result the string
*/
console.log(1 + "2"); 

/*
  "21" - string concatenation cause the last operand is a string
  first 2 operands are numbers so they are added first and then again concate with the 
  string later
  */
console.log(1+1+"1");

console.log(1 + "1" + 1); // "11" - string concatenation cause the first operand is a string
console.log("1" + 1 + 1); // "111" - string concatenation cause the first operand is a string

console.log("2" -1); // 1 - string is converted to a number and then subtracted
console.log("2" * 1); // 2 - string is converted to a number and then multiplied
console.log("2" / 1); // 2 - string is converted to a number and then divided
console.log("2" + 1); // "21" - string concatenation cause the first operand is a string
console.log("2" - "1"); // 1 - both strings are converted to numbers and then subtracted
console.log("2" * "1"); // 2 - both strings are converted to numbers and then multiplied
console.log("2" / "1"); // 2 - both strings are converted to numbers and then divided
console.log("2" + "1"); // "21" - string concatenation cause both operands are strings
console.log("2" - "1" + 1); // 2 - both strings are converted to numbers and then subtracted, then added with 1
console.log("2" * "1" + 1); // 3 - both strings are converted to numbers and then multiplied, then added with 1
console.log("2" / "1" + 1); // 3 - both strings are converted to numbers and then divided, then added with 1
console.log("2" + "1" + 1); // "211" - string concatenation cause both operands are strings
console.log("2" - "1" + "1"); // "11" - both strings are converted to numbers and then subtracted, then concatenated with "1"

// Number Conversion Unary 

/*
+ operator as in unary form applied to a single values, doesn't
do anything  to numbers.But if the operand is not a number, the unary + 
converts it into a number.
console.log(+true); // 1 - true is converted to 1
console.log(+false); // 0 - false is converted to 0
console.log(+null); // 0 - null is converted to 0
console.log(+undefined); // NaN - undefined is converted to NaN
console.log(+NaN); // NaN - NaN is still NaN
console.log(+Infinity); // Infinity - Infinity is still Infinity
console.log(+(-Infinity)); // -Infinity - -Infinity is still -Infinity
console.log(+("123")); // 123 - string is converted to a number
console.log(+("123abc")); // NaN - string is not a valid number, so it is converted to NaN
console.log(+("")); // 0 - empty string is converted to 0
console.log(+(" ")); // 0 - string with only spaces is converted to 0
console.log(+("0")); // 0 - string with only 0 is converted to 0
console.log(+("1.23")); // 1.23 - string with a valid number is converted to a number
console.log(+("1.23abc")); // NaN - string is not a valid number, so it is converted to NaN
console.log(+("1.23e2")); // 123 - string with a valid number in scientific notation is converted to a number
*/

// No effect on numbers
let x = 1;
console.log(+x); // 1 - no effect on numbers

let y = -2;
console.log(+y) // -2 - no effect on numbers

// converts  non-numbers
console.log(+true); // 1 - true is converted to 1
console.log(+false); // 0 -false is converted to 0
console.log(+null); // 0 - null is converted to 0
console.log(+undefined); // NaN - undefined is converted to NaN
console.log(+NaN); // NaN - NaN is still NaN

// for string concatination or for the binary + when we add two 
// string number together it concatenates them but if we add the unary + 
// it converts the string number two  numbers and add them 

let apple = "2";
let orange = "3";
console.log("concate the string number" + apple + orange); // "23" - string concatenation
console.log("converted to number and add ", +apple + +orange); // 5 - both strings are converted to numbers and then added

// for the longer variant
console.log("the use of Number() Number(apple) + Number(orange) ",
    Number(apple) + Number(orange)
); //converts to number and add, results = 5

// chaining assignments
let a1, b1, c1;
a1 = b1 = c1 = 5; // all variables are assigned the value 5
console.log("a1, b1, c1 are all assigned the value 5", a1, b1, c1); // 5 5 5
// we can also use the comma operator to assign multiple variables in one line
let x1 = 1, y1 = 2, z1 = (x1 + y1, x1 - y1); // z1 is assigned the value of x1 - y1

// Increment and Decrement Operators
let counter = 2;
counter++; // works the same as counter = counter + 1;
console.log("counter after incrementing", counter); // 3

counter = 2; // reset counter to 2
counter--; // works the same as counter = counter - 1;
console.log("counter after decrementing", counter); // 1

/*
Increment/decrement can only be applied to variables,
Trying to use it on a value like 5++ or "hello"++ will result in an error.
*/

// prefix and postfix forms

// prefix
let a2 = 1;
let b2 = ++a2; // prefix form, a2 is incremented first, then assigned to b2
console.log("a2 after prefix increment", a2); // 2
console.log("b2 after prefix increment", b2); // 2

// postfix
let c2 = 1;
let d2 = c2++; // postfix form, c2 is assigned to d2 first, then incremented
console.log("c2 after postfix increment", c2); // 2
console.log("d2 after postfix increment", d2); // 1
// The difference is that in the prefix form, the variable is incremented first,
// while in the postfix form, the variable is incremented after its value is used in the expression.
// This means that in the prefix form, the variable's value is updated before it is used,
// while in the postfix form, the variable's value is updated after it is used.
// This can lead to different results in expressions where the incremented value is used immediately.
// In the case of decrement, the same rules apply.

// COMMA
/*
The comma operator , is one of the rarest and most unusual operators. 
Sometimes, it's usedd to write shorter code, so we need to know it in order
to understand what's going one.

The comma operator allows us to evaluate several expressions, dividing them with 
a comma , . Each of them is evaluated but only the result of the last one is returned.

For example:
*/ 
let a3 = (1 + 2, 3 + 4, 5 + 6); // evaluates all expressions but returns only the last one
console.log("a3 after comma operator", a3); // 11 - the result of the last expression is returned

/*
NOTE: Please note that the comma operator has very low precedence,
lower than = ,so parentheses are important in the example above.

without them a3 = 1 + 2, 3 + 4, 5 + 6 evaluates + first, summing the 
numbers into a3 = 3, 7, 11, then the assignment operator = assigns 
a3 = 3, and the rest is ignored. it's like (a3 = 1+2) + 3 + 4, 5 + 6 

*/ 

// Tasks
/*
The postfix and prefix forms

What are the final values of all variables a4, b4, c4 and d4 after 
the code below is executed?

*/ 
let a4 = 1, b4 = 1;
let c4 = ++a4; // output would be 2 because prefix holds new value becoz of increment 
let d4 = b4++; // output would be 1 because postfix holds the old value before increment
console.log("a4, b4, c4, d4 after prefix and postfix forms", a4, b4, c4, d4); // 2 2 2 1

/*
Assignment result

what are the values of a5 and x after the code below ?
*/ 

let a5 = 2;
let x2 = 1 + (a5 *= 2); // 5 casue first parenthesis is evaluated and added
console.log("a5 and x after assignment result", a5, x2); // 4 5


/*
Type conversoins

what are the results of these expressions?
*/ 
let a6 = "" + 1 + 0 // "10" cause first operand is string and string + any number is 
// concatenation
console.log("a6 after type conversion", a6); // "10"

let b6 = "" - 1 + 0; // -1 cause first operand is string and string - any number is
// converted to number and then subtracted
console.log("b6 after type conversion", b6); // -1

true + false; // output = 1 cause true = 1 and false = 0, so 1 + 0 = 1
console.log("true + false", true + false); // 1
let c6 = 6 / "3"; // output = 2 cause string is converted to number and then divided
console.log("c6 after type conversion", c6); // 2
let d6 = "2" * "3"; // output = 6 cause both strings are converted to numbers and then multiplied
console.log("d6 after type conversion", d6); // 6
let e6 = 4 + 5 + "px"; // output = "9px" cause first two numbers are added and then concatenated with string
console.log("e6 after type conversion", e6); // "9px"
let f6 = "$" + 4 + 5; // output = "$45" cause first operand is string and string + any number is concatenation
console.log("f6 after type conversion", f6); // "$45"
let g6 = "4" - 2; // output = 2 cause string is converted to number and then subtracted
console.log("g6 after type conversion", g6); // 2
let h6 = "4px" - 2; // output = NaN cause string is not a valid number, so it is converted to NaN
console.log("h6 after type conversion", h6); // NaN
let i = " -9  " + 5; // output = " -9 5" cause first operand is string and string + any number is concatenation         
console.log("i after type conversion", i); // " -9 5"
let j = " -9  " - 5; // output = -14 cause string is converted to number and then subtracted
console.log("j after type conversion", j); // -14
let k = null + 1; // output = 1 cause null is converted to 0 and then added
console.log("k after type conversion", k); // 1
let l = undefined + 1; // output = NaN cause undefined is converted to NaN and then added
console.log("l after type conversion", l); // NaN
let m = " \t \n" - 2; // output = -2 cause string with only spaces is converted to 0 and then subtracted
console.log("m after type conversion", m); // -2
let n = " \t \n" + 2; // output = 2 cause first operand is string and string + any number is concatenation
/*
" \t \n" + 2
// 1. String concatenation occurs
// Result: " \t \n2"
// 2. When this is displayed/output, JavaScript automatically trims the whitespace
// Final visible output: "2"
*/ 
console.log("n after type conversion", n); // " \t \n2"

// input
// let userInput1 = prompt("Enter a number or string: "); // this will show a dialog box to enter a number
// let userInput2 = prompt("Enter a number or string: ") ; // converts the input to a number
// console.log(+userInput1 + +userInput2);  // this will convert the inputs to numbers and then add them
// console.log(userInput1 + userInput2); // this will concatenate the two inputs if they are strings
// if the inputs are not valid numbers, it will return NaN
// if the inputs are valid numbers, it will return the sum of the two numbers