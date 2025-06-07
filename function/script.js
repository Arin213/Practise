let prompt = require('prompt-sync')();

// function declaration
function sayHi() {
    console.log("hello! World");
}

sayHi(); //envoke the function or calling function

// function expression is like create new function in the middle of any expression
let call = function () {
    console.log("This is the declration of function");
};
call();

// copying into the variables 
function sayHi() {   // (1) create
    console.log("Hello");
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it) 

/*
Here’s what happens above in detail:

The Function Declaration (1) creates the function and puts it into the variable named sayHi.
Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
Now the function can be called as both sayHi() and func().
*/ 
// We could also have used a Function Expression to declare sayHi, in the first line:
let sayHi1 = function() { // (1) create
  console.log( "Hello" );
};

let func1 = sayHi1;  //(2)
// ...

// Arrow functions, the basics

/*
 Arrow function often better then expression 
 syntax:

 let func = (arg1, arg2, ... argN) => expression;

 This creates a function func that accepts teh argument arg1..argN, then evaluates the 
 expression on the right side with their use and returns its result.

here,
 */ 


/*

This is the example of function expresson:

 let func = function(arg1, arg2 ..., argN){
    return Expression;
 } ;
*/

// example of arrow function

let sum = (a, b) => a + b;

/*

This arrow functions is a shorter form of 

let sum = function(a , b){
    return a + b;
};

*/ 
console.log(sum(5, 5));

/*
 If we have only one argument, then parentheses around 
 parameters can be omitted, making than even shorter.
 for example
*/ 
let double = n => n * 5;
/*roughly, 
let double = function(n){
    return n * 5
};
*/
console.log(double(6));

/*
 If there are not arguments, parentheses are empty, but they
 must be present:
*/ 
let sayHi01 = () => console.log("Hello!");
sayHi01();

// Arrow functions can be used in the same way as functions experssion.
// for instance, to dynamically create a function:

let age = prompt("what is your age?", 18);
let welcome = (age < 18) ?
() => console.log("Hello!"):
() => console.log("Greetings!");

welcome();

// Multiline arrow functions 
/*
above arrow functions are simple, they took arguments from the 
left of =>, evaluated and returned the right-side experssion with them.

sometimes we need a more complex function, with multiple 
expression and statements. In that case, we enclose them in 
curly braces. The major difference is that curly braces require a
return within them to return a value (just like regular 
function does).
*/ 

let sum01 = (a, b) => {
    let result = a + b;
    return result; // multiline arrow functions needs return keyword
} 

console.log(sum01(5, 6));
