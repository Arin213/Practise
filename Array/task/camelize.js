/*
    Write the function camelize(str) that changes dash-separated words 
    like “my-short-string” into camel-cased “myShortString”.

    That is: removes all dashes, each word after dash becomes uppercased.

    Examples:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Hint: use split to split the string into an array, transform it and join back.

    //steps or process:
        a. str.split("-") which will remove the "-" from the given string
        b. str.join("") which will join the array into the  string


*/

// let str = "background-Color";
// let splitString = str.split("-");
// // console.log(str.split("-"));
// console.log(splitString.join(""));

function camelize(str) {
    return str.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

}


console.log(camelize("background-color"));
console.log( camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
