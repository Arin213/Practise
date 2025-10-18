/*
    Exercise 01:
    You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
    For instance:
*/ 

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// solution
let names = users.map(item => item.name)
console.log(names); 


/*
    Exercise 02:
    You have an array of user objects, each one has name, surname and id.
    Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
    For instance:
*/ 

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1];


/*
output:
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
// solution:
let usersMapped = users1.map(user => ({
    /*
        No return keyword is needed becasue we deal with inside () and its arrow function 
        so js treat as the experssion to be returned not act as the {} as the function experession
    */ 
    fullName: `${user.name} ${user.surname}`,
    id:user.id

}));

console.log(usersMapped);


/*
    Exercise 03:
    Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

    For instance:
*/ 
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr = [ pete2, john2, mary2 ];


// output: [john, mary, pete]
let sortByAge = [...arr].sort((a,b) => a.age - b.age);
console.log(sortByAge);

/*
    Exercise 04:
    Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
    The formula for the average is (age1 + age2 + ... + ageN) / N.
    For instance:
*/ 
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr3 = [ john3, pete3, mary3 ];

let getAverageAge = arr3.reduce((acc, current) => {
    return acc + current.age/arr3.length;

},0);
   
console.log(getAverageAge);

/*
    Exercise 05:
    Let’s say we received an array of users in the form {id:..., name:..., age:... }.
    Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
    For example:
*/ 
let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];



/*
// after the call we should have:
output:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(arr) {
   return arr.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;

   },{});
}
let usersById = groupById(users2);   

console.log(usersById);
