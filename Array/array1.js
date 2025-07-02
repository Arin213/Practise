// Iterate: forEach
/*
The arr.forEach method allows to run a function for every elements of 
the aray.

The syntax:
    arr.forEach(function(item, index, array){
        // ... do something with an iteem
    })

For instanec, this shows each element of the array:
*/ 
// for each element call console.log
["Bilbo", "Gandalf","Nazgul"].forEach(console.log);

// And this code is more elaborate about their position in the target array:
["Bildo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);

});
// The result of the function (if it returns any ) is thrown away and ignored.

// Searching in array
/*
    Now let's cover methods that search in an array.

indexOf/lastIndexOf and Includes
    The methos arr.indexOf and arr.includes have the similar syntax and do essentially the 
    same as their string counterparts, but operate on items instead of charaters.

    .arr.indexOf(item, from) - looks for items starting from index
    from, and returns the index where it was found, otherwise -1.

    .arr.includes(item, from) - looks for item starting from index
    from, returns true if found.


usually, these methods are used with only one argument: the item to search.By default, the 
search is from the begining.

for instance:
*/ 

let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true
console.log(arr.includes(2)); // false

/*
    Please note that indexOf uses the strict equality === for comparison. so,
    if we look for false, if finds exactly false and not the zero.

    if we want to check if item exists in the array and we don't need the index, then
    arr.includes is preferred.

    The method arr.lastIndexOf is the same as indexOf, but looks 
    for from right to left.

*/ 
let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple"));// 0
console.log(fruits.lastIndexOf("Apple")); // 2

/*
    Find and findIndex/findlastIndex
    Imagine we have an array of objects. How do we find an object with a specific 
    condition? 
    here the arr.find(fn) method oomes in handy.
    the syntax is:
   
    let result = arr.find(function(item, index, array){
    })
*/ 

/*
    The includes method handles Nan correctly 
    A minor, but noteworthy feature of includes is that it correctly handles NaN,
    unlike indexOf.
*/ 

const arr01 = [NaN];
console.log(arr01.indexOf(NaN)); // -1 (should be 0 )
console.log(arr01.includes(NaN)); // true(correct)

/* 
     That's because includes was added to js much later and uses the more upto
     date comparison algorithm internally.
*/ 

/*
    find and findIndex/findLastIndex
    Iagine we have an array of objects. How do we find an object with a 
    specific condition ?
    
    The syntax is:

    let result = arr.find(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined.
    }); 

    The function is called for elemetns of the array, one after another.
    
    * item is the element
    * index is its index
    * array is the array itself.
    
    if it returns true, the search is stopped, the item is returned. if 
    nothing is found, undefined is returned.

    for example, we have an array of users, each with the fields id and name 
    let's find the one with id == 1:
*/ 
let users = [
    {id :1, name1:"John"},
    {id :2, name1: "Pete" },
    {id:3, name1: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name1); //John

/*
    In real life, arrays of object are common thing, so the find method is 
    very useful.

    Note that in the example we provide to find the function itme =>
    item.id == 1 with one argument. That's typical, other arguemnts of this 
    function are rarely used.

    The arr.findIndex method has the same syntax but returns the index where the
    element was found instead of the element itself. The value of -1 is returned if 
    nothing is found.

    The arr.findLstIndex method is like findIndex, but searches from right
    to left, similar to lastIndexOf.

    here's an example:
*/ 

let users1 = [
    {id: 1, name2 : "John"},
    {id: 2, name2 : "Pete"},
    {id: 3, name2 : "Mary"},
    {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users1.findIndex(user => user.name == "John")); // 0

// Find the index of the last John
console.log(users1.findLastIndex(user => user.name == "John")); //3


// FILTER
/*
    The find method looks for a single (first) element  that makes the 
    funciton return  true.

    if there amy be many, we can use arr.fileter(fn).
    The syntax is similar to find, but fileter returns an array of all matching 
    elements:
*/ 

// let results = arr.filter(function(item, index, array){
//     //if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found 

// });

//for instance:
let users2 = [
    {id: 1, name3: "John"},
    {id: 2, name3: "Pete"},
    {id: 3, name3: "Mary"},
   
];

// returns array of the first two users compare values
let someUsers = users2.filter(item => item.id < 3);
console.log(someUsers.legnth); // 2

/*
    TRANSFORM AN ARRAY
    Let's move on to methods that transform an array,

*/ 
// MAP
/*
    The arr.map method is one of the most useful and often used.
    It calls the function for each element of the array and returns of results.
    The syntax is:
    
    let resutl = arr.map(function(item, index, array){
        // returns the new value instead of item
    });

    For instance, here we transform each elemetn into its length:
*/ 
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7, 6

// SORT(fn)

/*
    The call to arr.sort(fn) sorts the array in place, changing its element 
    order.
    it also returns the sorted array, but the returned value is usually ignored, as 
    arr itself is modified.
    for instance:
*/ 

let arr02 = [1, 2, 15];

// the method reorders the content of arr
arr02.sort();
console.log(arr02); //1, 15, 2

/*
    noticing the strange outcome 
    the order became 1,15, 2 incorrect but why ?

    THE ITEMS ARE SORTED AS STRINGS BY DEFAULT.

    Literally, all elements are converted to strings for comparisons. For 
    strings, lexicographic ording is applied and indeed "2" > "15".

    To use our own sorting order, we need to suply a funciton as the argument of
    arr.sort().

    The function should compare two arbitray values and return:

    function compare(a,b) {
        if (a > b) return 1;  // if the first value is greater than the second
        if (a == b) return 0; // if they are equal
        if (a < b) return -1; // if the first value is less than the second
    }

    for instance:
*/ 
function compareNumeric(a, b){
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if they are equal
    if (a < b) return -1; // if the first value is less than the second

}
let arr03 = [1,2,15];
arr03.sort(compareNumeric);
console.log(arr03); // 1,2,15

/*
    Now it works as intended.
    let's step aside and think about what's happening. The arr can be an 
    array of anything, right? it may contain numbers or strings or objects or 
    whatever.We have a set of some items. to sort it, we need an ordering function
    that knows how to compare its elements. The default is a string 
    order.

    The arr.sort(fn) method implements a generic sorting algorithm. we don't
    need to care how it internally works (an optimized quicksort or timsort most 
    of the time). It will walk the array, compare its elements using the 
    provided function and reorder them, all we need is to provide the fn
    which does the cooparison. 

    By the way, if we ever want to know which elements are compared- nothing 
    prevenets us from alerting them
*/ 

[1, -2, 15, 2, 0, 8].sort(function(a,b){
    console.log(a + " <> " + b);
    return a -b;

});

/*
    The algorithm may compare an element with multiple others in the process, 
    but it tries to make as few comparisons as possible.

    A comparison function may return any number 
    Actually, a comparison function is only required to return a 
    positive number to say "greater" and negative number to say "less".

    That allows to write shorter functions:

*/

let arr04 = [1, 2, 15, 64];
// arr04.sort(function(a,b){return a - b; });
// console.log(arr04); // 1, 2, 15

//  Arrow function for the best
arr04.sort((a,b) => a - b );
console.log(arr04); // 1, 2, 15

// Use localeCompare for strings
/*
    Remember string comparison algorithm ? it compares lettersby their
    codes by default.

    For many alphabets, it's better to use atr.localeCompare method to correctly
    sort letters, such as 0.

    For example, let's sort a few countries in German:
*/ 

let countries = ["Österreich", "Andorra", "Vietnam"];

// when comparing strings better to use str.localeCompare rather than ternary operator
console.log(countries.sort((a, b) =>a > b ? 1 : -1)); // Andorra, Vietnam, Österreich

// Using localeCompare for better sorting instead of ternary operator
console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra, Österreich, Vietnam

// reverse
/*
    The method arr.reverse() reverse the order of elements in arr.
    for instance:
*/ 
let arr05 = [1, 2, 3, 4, 5];
arr05.reverse();
console.log(arr05); // 5, 4, 3, 2,


// Split and join
/*
    here's the situation from real life. we are writing a messaging app, 
    and the person enters the comma-delimited list of reccievers:
    John, Pete, Mary. But for us an array of names would be much more
    comfortable than a single. how to get it?

    the str.split(delim) method does exactly that. It splits the string into an
    array by the given delimeter delim.

    In the example below, we split by comma followed by a space:
*/ 

let names06 = 'Bilbo, Gandolf, Nazgul';
let arr06 = names06.split(", ");
// console.log(arr06); // Bilbo, Gandolf, Nazgul

for (let nam of arr06) {
    console.log(`A message to ${nam}`);
}


/*
    The split method has an optional second numeric argument, a limit on 
    the array length. if it is providedm then the extra elements are ignored. 
    In practise it is rarely used though:
*/ 

let names07 = 'Bilbo, Gandolf, Nazgul, Saruman'.split(',', 2);
console.log(names07) //Bilbo, Gondolf

// SPLIT INTO LETTERS
/*
    The call to split(s) with an empty s would split the string into an array
    of letters.

*/ 

let str = "test";
console.log(str.split('')); // t, e, s, t


/*
    The call arr.join(glue) does the reverse to split. it creates a string of 
    arr items joined by glue between them.
    for instance:
*/ 
let arr08 = ["Bilbo", "Gandolf", "Nazgul"];
let str01 = arr08.join(";"); //glue the array into a string using ;
console.log(str01) // Bilbo;Gandolf;Nazgul


// reduce/reduceRight
/*
    When we need to iterate over an array - we can use forEach, for or
    for ..of.

    When we need to iterate and return the data for each element 
    we can use map.
    The methods arr.reduce and arr.reduceRight also  belong to that breed,
    but are a little bit more intricate. They are used to calculate a single value 
    based on the array.
    The syntax is:
*/ 

// let value = arr.reduce(function(accumulator, item, index, array){
//     //... do something with item

// }, [initial]);

/*
    ARGUMENTS:
    * accumalator - is the result of the pervious function call, equals initial 
    the first time(if initial is provided).
    * item - is the current array item.
    * index - is its position
    * array - is the array.
    
    As the function is applied, the result of the previous funciton call is passed to the 
    next one as the first argument.

    so, the function is applied, the result of the previous functon call is passed to 
    the next one as the first argument.

    so, the first argument is essentially the accumulator that stores the combined
    result of all previous executions. And at the end, it becomes the result of 
    of reduce.

    sunds complicated? 
    The easiest way to graso that is by example
    here we get a sum of an array in one line:
*/ 

let arr09 = [1,2,3,4,5];
let result = arr09.reduce((sum, current) => sum + current,0);
console.log(result); //15

/*
    The function passed to reduce uses only 2 arguments, that's typically enough
    let's see the details of what's going on.

    1. On the first run, sum is the initial value (the last argument of reduce)
    equals 0, and current is the first array element, equal 1. So the function result is 1

    2.On the second run, sum = 1, we add the second array element(2) to it and return
    3.On the 3rd run, sum = 3 and we add one more element to it, and so on...


*/
//  removed initial value from reduce (no 0)
let result1 = arr09.reduce((sum, current) => sum + current);
console.log(result1); //15

/*
    The result is the same.That's because if there's no initial, then reduce
    takes the first element of the array as the initial value and starts the iteration
    from the 2nd element.

    The calculation table is the same as above, minus the first row.
    But such use require an extreme care. If the array is empty, then reduce call 
    without initial value gives an error.

    here's and example:
*/ 

// let arr11 = [];
//     // Error: Reduce of empty array with no initial value
//     // if the initial value existed, rduce would return it for the empty arr.
// arr11.reduce((sum,  current) => sum + current);


//So it's advised to always specify the initial value.

// NOTE:
//  the method arr.reduceRight does the same but goes from right to left.

// Array.isArray
/*
    Arrays do not form a seperate language type.Thhey are based on objects. 
    So, typeof does not helpt to distinguish a plain object from an array.
*/ 
 console.log(typeof {}); //object
 console.log(typeof[]); //object 

/*
    ...But arrays are used so often that there's a special method for that:
    Array.isArray(value). It returns true if the value is an array, and false
    otherwise.
*/  

console.log(Array.isArray({})); //false
console.log(Array.isArray([])); // true


//syntax for each ArrayMethod

/*
    forEach()
    arr.forEach(function(item, index, array){
        // Do something with item
    });
    
    arrow:
    arr.forEach((item, index, array) =>{
        // do something
    });
*/ 


/*
    indexOf() & lastIndexOf()

    arr.indexOf(item, fromIndex);
    arr.lastIndexOf(item, fromIndex);
*/ 

/*
    includes()

    arr.includes(item, fromIndex);
*/ 


/*
    find()

    arr.find(function(item, index, array){
        return condition;
    });
*/ 

/*
    findIndex() & findlastIndex()

    arr.findIndex(function(item, index, array){
        return condition;
    });

    arr.findLastIndex(function(item, index, array){
        return condition;
    });
*/ 


/*
    filter()

    arr.filter(function(item, index, array){
        return condition;
    });

    map()

    arr.map(function(item, index, array){
        return newValue;
    });

    sort()

    arr.sort((a,b) => a - b); // numeric ascending
    arr.sort((a, b) => a.localCompare(b)); // string alphabetical

    split() -> string method

    str.split(delimiter, limit); //returns array

    join()

    arr.join(separator); //returns string

    reduce() & reduceRight() 

    arr.reduce(function(accumulator, item, index, array){
        return updatedAccumulator
    });

    arr.reduceRight(...) // same, but from right to left

    Array.isArray()

    Array.isArray(value); //true if value is array
*/ 

