
// Select the body 
let body = document.querySelector("body");

// create the label
let label = document.createElement("label");
// set attribute item for
label.setAttribute("for", "item");
// add text 
label.innerText = "type your word ";
// append the item
body.appendChild(label);

// create the input element
let input = document.createElement("input");


// append the input 
let appendInput = body.appendChild(input);


// console.log(document.body);

// set id to the input 
appendInput.setAttribute("id", "name");
appendInput.setAttribute("type", "text");
appendInput.setAttribute("name", "item");
console.log(document.body);