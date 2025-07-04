// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// function unique(arr) {
//     let uniqueArr = [];
//     for(let word of arr){
//         if(!uniqueArr.includes(word)){
//             uniqueArr.push(word);
//         }
//     }
//     return uniqueArr;

// }  

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];


// console.log(unique(strings));


// USING ARROW FUNCTION WITH REDUCE() 
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

 
let uniqueWords = strings.reduce((acc, word) => {
  if (!acc.includes(word)) acc.push(word);
  return acc;
}, []);

console.log(uniqueWords); // ["Hare", "Krishna", ":-O"]

