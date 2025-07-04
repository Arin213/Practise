/*
    We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

    Create a function copySorted(arr) that returns such a copy.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (no changes)
*/ 
let copySorted = (arr) => {
    return [...arr].sort(); //using spread operator 
    // return arr.slice().sort() //using slice()

}
let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));
console.log(arr);