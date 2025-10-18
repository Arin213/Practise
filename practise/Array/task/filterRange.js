// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values 
// higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

/*
    1. cerate function whether arrow or any normal declaration function 
    2. us filter method to compare the conditon and return the new value which won't change the 
    original array but return new array.
*/

function filterRange(array, a, b) {
    return array.filter(num => num >= a &&  num <= b);
}

let number = [5, 3, 8, 1];
let filteredArray = filterRange(number, 1, 4);
console.log(filteredArray);
console.log(number);

