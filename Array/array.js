/*
    aRRAY METHODS:
    We already know methods that add and remove items from the begining or the end.
    1. arr.push(..itmes) - adds the items to the end.
    2. arr.pop() - extracts an item from the end.
    3. arr.shift() - etracts an item from the begining.
    4. arr.unshift(...items) -adds items to the begining

*/ 

/*
    splice:
    delete array using splice.
    array are obj and using delete:
*/ 

let arr = ["I", "go", "home"];
delete arr[1];// remove "go"
console.log(arr[1]); // undefined

//now arr = ["I",  , "home"];
console.log(arr.length); //3

/*
The element was removed, but the array still has 3 elements, we can see that 
arr.length == 3.
becoz, delete will delete obj.key removes a value by the key
and its fine for objects. but for arrays
we want the rest of the elements to shift and occupy the freed place.
We expects to have a shorter array now.
so special method should be used i.e.


arr.splice method.

The syntax:
arr.splice(start,[, deleteCount, elem1, ..., elemN])

It modifies arr starting from the index start: removes deleteCount
elements and then inserts elem1, ..., elemN at their place. Returns the 
array of removed elements.

*/ 
let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1,1); // from index 1 remove 1 element i.e "study"
console.log(arr1); // ["I", "JavaScript"]

// removing and replacing them with other elements
let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with other

arr2.splice(0,3, "Let's", "dance");
console.log(arr2); // output: ["Let's", "dance", "right", "now"]

// splice can return the removed items as well 
// remove the 2 first elements
let removed = arr2.splice(0,2); 
console.log(removed); // ouptut: ["let's", "dance"]

/*
The splice method is also able to insert the elements without any 
removeal,for that, we need to set deleteCount to 0:
*/ 
let arr3 = ["I", "study", "JavaScript"];

//from index 2
// delete 0
// then insert "complex" and "language"
arr3.splice(2,0, "complex", "language");
console.log(arr3); // ["I", "study", "complex", "language", "JavaScript"]

arr3.splice(2,1, "good", "one");
console.log(arr3); // ["I", "study", "complex", "language", "JavaScript"]


/*
Negative indexes allowed 
Here and in other array methods, negative indexex are allowed. They specify
the position from the end of the array. like here;
*/ 
let arr4 = [1,2,5];
//from index -1 (one step from the end )
//delete 0 elements
// then insert 3 and 4 
arr4.splice(-1,0,3,4);
console.log(arr4); // output: [1,2,3,4,5]


// slice
/*
    The method arr.slice is much simpleer than the similar
    looking arr.splice.
    the syntax is:
    arr.slice([start], [end])

    It returns a new array copying to it all items from index start to end 
(not including end). Both start and end can be negative, in that case position from 
array end is assured.

It's similar to a string method str.slice, but instead of substring, it makes subarrays.
for instance:
*/ 

let arr5 = ["t", "e", "s", "t"];
console.log(arr5.slice(1,3)); // output: ["e", "s"]);

// no changes in the original array
console.log(arr5); // output: ["t", "e", "s", "t
console.log(arr5.slice(-2)); // output: ["s", "t"]

/*
     We can also call it without arguments, arr.slice() creates of copy of arr.
     That's often used to obtain a copy of the array.
*/ 

// CONCATENATION
/*
    The method arr.concat creates a new array that includes values from other 
    arrays and additional items.
    The syntax is:
    arr.concat(arg1, arg2...)
    where arg1, arg2... are arrays or values to add.
*/ 

let arr6 = [1,2];

// create an array from: arr and [3,4]
console.log(arr6.concat([3,4])); // output: [1,2,3,4]

/*
    Normally, it only copies elements from arrays.Other objects, even if they look like 
    arrays, are added as a whole.
*/ 
let arr7= [1,2];

let arrayLike = {
    0: "something",
    length:1
};

console.log(arr7.concat(arrayLike)); // output: [1,2, {0:"something", length:1}]

/*
    But if an array-like obejct has a special Symbol.isConcatSpreadable property, then it's treated as an array
    by concat: its elements are added instead:
*/ 

let arr8 = [1,2];

let arrayLike2 = {
    0: "something",
    1: "else",
    length:2,
    [Symbol.isConcatSpreadable]: true // this makes it work
}

console.log(arr8.concat(arrayLike2))// output : [1,2, "something", "else"]


