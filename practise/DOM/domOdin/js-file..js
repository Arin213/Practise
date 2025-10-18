/*
    Add the following elements to the container using ONLY JavaScript
    and the DOM methods shown above:

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color 
    with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, 
    append the <h1> and <p> to it before adding it to the container.
*/




// create p text with red!
let p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.style.color = "red";

// create h3 with blue !
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";

// create div 
let createDiv = document.createElement("div");
// console.dir(createDiv);
// create a class in it 
createDiv.classList.add("newDiv");


// give the styling to the div
createDiv.setAttribute("style", "background:pink; border:solid; height:200px; width:100px;")

// create the h1 and p
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";

let pInner = document.createElement("p");
pInner.innerText = "ME TOO!";

// append the child 
createDiv.append(h1);
createDiv.append(pInner);



let div = document.querySelector("div");
div.append(p);
div.append(h3);
div.append(createDiv);


