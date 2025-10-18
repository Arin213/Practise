/* Exercise1:
   ---------
   Write a JavaScript Program to find the number of even digits in a an array of integers
*/ 
// solution
const evenDigits = (number) => {
   return number.filter(num => num %2 === 0).length
};

console.log(evenDigits([1,2,3,4,5,6,7,8]))
console.log(evenDigits([2,2,2,2,2,2]))
console.log(evenDigits([3,5,7,9,10,100]))


/* Exercise 2:
   ----------
   write a JavaScript program to find the number of 
   even values up to a given number
*/ 
// solution
const evenNumber = (arr) => {
   return arr.filter(num => num % 2 == 0).length;

};

const createArrayofNumbers = (num) => {
   const returnArray = [];
   for(let i = 0; i < num; i++){
      returnArray.push(i);
   }
   return returnArray;
};

console.log(evenNumber(createArrayofNumbers(6)));
console.log(evenNumber(createArrayofNumbers(9)));

/* Exercise3:
   ---------
   Write a JavaScript program to check whether a given array of integers
   is sorted in ascending order
*/ 
// solution
const isAscending = (arr) => {
   for (let i = 0; i < arr.length; i++){
      if(arr[i+1] < arr[i]) return false;
   }
   return true;

};

console.log(isAscending([1,2,3,4,6])); //true
console.log(isAscending([1,2,5,4,3,6])); //false
console.log(isAscending([1,2,3,4,6,6])); //true

/* Exercise 4:
   ----------
   Write a javaScript program to get the largest even number
   from an array of integers.
*/ 

// const Even = (number) => {
//    return number.filter(num => num % 2 == 0);
                
// };

// const largestEven = (num) => {
//   let largest = num[0];
//   for(let i = 1; i < num.length; i++){
//       if (num[i] > largest){
//          largest = num[i]; 
//       }
//   }
//   return largest;
// };

// // const largestEven = (arr) => Math.max(...arr);
// console.log(largestEven(Even([1,2,3,4,5,6,8,14,5])));

const largestEven = (arr) => {
   /*
      first filter the even number and then passed that 
      filtered even number to the Math.max(...arr) funciton
   */ 
   return Math.max(...arr.filter(num => num % 2 == 0));
};

console.log(largestEven([1,2,3,4,5,6]));
console.log(largestEven([1,2,33,4,5,6]));
console.log(largestEven([1,2,3,44,45,6]));

/* Exercise5;
   ---------
   Write a JavaScript program to replace the first digit in a string 
   (should contains at least digit) with $ character.
*/ 
// solution 
// using regex we can replace the numeric digit into $ char
const replaceDigit = (str) => {
   return str.replace(/[0-9]/g, "$"); //g = global
};

console.log(replaceDigit("8hghng"));
console.log(replaceDigit("0fsedj"));
console.log(replaceDigit("A123Abcde"));

 
