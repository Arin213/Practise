/* Exercise 1:
   ----------
   Given a year, report if it is a 
   leap year
*/ 

// solution
const islearYear = (year) => {
    if(year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    if(year % 100 == 0 && year % 400 == 0){
        return true;
    }
    return false;


}

console.log(islearYear(2024));
console.log(islearYear(1900));
console.log(islearYear(2100));
console.log(islearYear(2025));
console.log(islearYear(2000));

/* Exercise2:
   ---------
   Write a javaScript program to compare two objects
   to determine if the first one contains the same properties
   as the second one (which may also have additional properties)
*/ 

// solution


/* Exercise 3:
   ----------
   Wrtiee a JavaScript program to convert a comma-seperated
   values (CSV) string to a 2D array. A new line indicates a new row in the array.

   Example:
   -------
   abc,def,ghi
   jkl,mno,pqr
   stu,vwx,yza
*/ 
// solution
const array2D = (csvString) => {
    return csvString.split("\n").map(arr => arr.split(","));

};

let csv =  `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(array2D(csv));

/* Exercise 4:
   ----------
   write a JavaScript program to generate a random hexadecimal color code.
*/ 
// solution

// create a helper function 
const randomNumToHexa = (num) => {
    return Math.floor(Math.random() * 16).toString(16);
}
const hexaDec = () => {
    return "#" + Array.from({length: 6}).map(randomNumToHexa).join("");
};

console.log(hexaDec());
console.log(hexaDec());
console.log(hexaDec());
console.log(hexaDec());

/* Exerise5:
   --------
   Write a JavaScript function that returns true 
   if the provided predicates functions true for all  
   elements is a collection, false otherwise.
*/ 

// solution 
// console.log([1,2,3,4,5].every(x => x > 0 ));
// console.log([1,2,3,4,5].every(x => x > 3 ));

const isPredicate = (arr, fn) => {
    for(let i = 0; i < arr.length; i++){
        if(!fn(arr[i])){ //arr[i = 0] = 1 > 0 !true = false then if block won't run and keep on going 
            return false;
        }
    }
    return true;
}

console.log(isPredicate([1,2,3,4,5], (x) => x > 0));
console.log(isPredicate([1,2,3,4,5], (x) => x > 3));