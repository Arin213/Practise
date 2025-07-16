// access the html in script

// console.dir(window.document);
// console.dir(document.body);

// print body
// console.log(document.body); //touch html through script

// print head
// console.log(document.head);

// print the first item through body to childNode
// console.dir(document.body.childNodes);
// console.log(document.body.childNodes[1]);

/*
    for dynamics changes we can make changes without touching
    html and css and only through java script
    which is called dynamic changes and we can use DOM 
    to do that.

*/
// document.body.childNodes[3].innerText = "abcd";


// DOM MANIPULATION

/* Selecting with id
    document.getElementByid("myid")

   Selecting with class
    document.getElementsByClassNames("myClass")

   Selecting with tag
    document.getElementsByTagName("p")
*/

/*
    to make cahnges the element, first we need to access that 
    element.
    basically if we add the script at the top before 
    the body then we get null which is just empty oject.
    because first script will get executed rather than body 
    so we get null instead of body parts.

*/ 

// access element using the id
/*
    to access the element using id then we must provide the id to 
    the attributes let's give id to h1 as "heading"
    if the element won't match then it gets return 
    null
*/ 
// let header = document.getElementById("heading"); //h1
// console.log(header);
// console.dir(header);


/* access element using class
    to access the element using class, we can pass the 
    class attribute in tag element for here we can 
    oass class="header";
    documnet.getElementByClassName will return the html collection 
    similar like array.
    if the element won't gets match then its return emoty html
    collection.

*/ 

// let classHeader = document.getElementsByClassName("header");
// console.log(classHeader);
// console.dir(classHeader);

/* access element using tag
*/ 

// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);


// better upgrade way to access the html element 

/* Query Selector
    In query selector we can pass all three 
    id, class and tag to access them 

    document.querySelector("myId/ myClass/tag")
    //returns first element

    document.querySelectorAll("myId/ myClass/ tag")
    //returns a NodeList
*/ 

// access all tag
/*
    we can get the first element of tag and won't get the other
*/ 

// let elements = document.querySelector("p"); //only returns the first element 
// console.log(elements);
// console.dir(elements);


/*
    however, we can get all the element of tag using 
    document.querySelectorAll();
*/ 
// let tagElements = document.querySelectorAll("p"); //returns all elements as NodeList
// console.log(tagElements); 
// console.dir(tagElements); 

// to access class we need to pass .className 
// let classElements = document.querySelector(".header"); //returns all elements as NodeList
// console.log(classElements); 
// console.dir(classElements); 


// let classAllElements = document.querySelectorAll(".header"); //returns all elements as NodeList
// console.log(classAllElements); 
// console.dir(classAllElements); 


// access id element using querySelector
// let idElement = document.querySelector("button"); //return button id 
// console.log(idElement);
// console.dir(idElement);

/*
    while accessing the elements we can check their value as well
    as make changes

    1. tagName : returns  tag for element nodes
    2. innerText : returns the text content of the element and all 
                   its children
    3. innerHtml : returns the plain text or HTML contents in the element
    4. textContent : returns textual content even for hidden elements.
     
*/ 

// tagName
// let firstElement = document.querySelector("#button");
// console.dir(firstElement);
// // to access the tagName we do this:
// console.log(firstElement.tagName);

// for paragraph
// let firstPara = document.querySelector("p");
// console.dir(firstPara)

// // get the tag name
// console.log(firstPara.tagName) // p


/*
    Nodes -> firstChild : means the first node after parent
          -> lastChilde : means the last node after parent
    
          if the parent has single child node then that node 
          would be also the last child node.


*/ 

// access the the first child 
// console.dir(document.body.firstChild);
/*
    instead of div output would be text 
    becuse when the dom tree is created, first 3 nodes are created 
    1. text nodes
    2. comment
    3. elements


*/ 

// select the children of element 
// console.dir(document.body.querySelector("div").children); //this will give the children of div

/*
    innerText: will return the text content of the element and all its children

*/ 
// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerText);//return the inner text as well as content inside the div
// console.dir(div.innerHTML)//  rerturn the plain text of html contents in the element
// console.dir(div.textContent)// returns textual content even for hidden elements


/*
    q1. Create a h2 heading elements with text - "Hello JavaScript".
    Append "From youtube channel Apna College" to this text using js.

    q2. Create 3 divs with common class name- "box".
    Access them and add some unique  text to each of them.
*/ 

//  q1. Create a h2 heading elements with text - "Hello JavaScript".
//     Append "From youtube channel Apna College" to this text using js.

// access the h2 element
// let h2 = document.body.querySelector("h2");
// console.dir(h2);

// console.dir(h2.innerText);
// h2.innerText  = h2.innerText + " from youtube channel Apna College"; //concatenate


// q2. Create 3 divs with common class name- "box".
//     Access them and add some unique  text to each of them.

// aceess the div first 
// let divs = document.querySelectorAll(".box");
// console.dir(divs);

// add some unique text
// divs[0].innerText = "box 1 with unique 1";
// divs[1].innerText = "box 2 with unique 2";
// divs[2].innerText = "box 3 with unique 3";

// using for of loops we can add the text;
// let idx = 1;
// for(div of divs){
//       div.innerText = `new unique value ${idx}`;
//       idx++;
// }

// PART 2

/*
    DOM Manipulation
    **Attributes
    1. getAttribute(attr) //to get the atribute value
    2. setAttribute(attr, value)//to set the attribute val th

    **Style
    1. node.style
    2.


*/ 

// let div = document.querySelector("div");
// console.log(div);

// // to get the value of id
// let id = div.getAttribute("id");
// console.log(id);

// // get the value of class
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// CHANGE THE VLAUE OF ATTRIBUTE like the name of class or id 
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));


// Style 
// change the style vale
// let div = document.querySelector("div");
// console.log(div);
// access  to its style
// console.log(div.style);

// we can set or make changes in style 
// change background color 
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// set the fontSize to 25px
// div.style.fontSize = "25px";

// div.innerText = "new div text";

// make the visibility to hidde
// div.style.visibility = "hidden";


// INSERT ELEMENTS
/*
    let el = document.createElement("div")

    1. node.append(el) -> adds at the end of node (inside)
    2. node.prepend(el) -> adds at the start of node (inside)
    3. node.before(el) -> adds before the node (outside)
    4. node.after(el) -> adds after the node (outside)
*/ 


// DELETE ELEMENT
/*
    node.remove() -> remove the node
*/ 

// create button 
// let newBtn = document.createElement("button");

// newBtn.innerText = "Click me!";
// console.log(newBtn);

// // insert elements
// let div = document.querySelector("div");
// div.append(newBtn); // add at the last  of div 
// div.prepend(newBtn); //add at the first 
// div.before(newBtn); // add at the top of outside the div
// div.after(newBtn); // add at the end of outside the div

// remove() 
// remove the button that has been created 
/*
    1. first access the element to be deleted 
    2. use element.remove();
*/ 
// newBtn.remove(); //created button and remove 


/*
    Question
    1.  Create a new button element. Give it a text "click me", 
    background color of red and text color white
         insert the button as the first element insid the body tag

    2.  Create a <p> tag in html. give it a class and some styling 
    now create a new class in css and try to append this 
    class to the <p> element

    Did you notice, how you override the class name when you add a new
    class

    solve this problem using classList.
    
*/ 

// 1. solution
// create
let btn = document.createElement("button");
btn.innerText = "Click me";
// append at the first
btn.style.backgroundColor = "red";
btn.style.color = "white";

//access the body to insert the btn at top using prepend
let getBody = document.querySelector("body").prepend(btn);
// getBody.prepend(btn);

// 2. solution
let para = document.querySelector("p");
// console.log(para);
// para.getAttribute("class");
// para.setAttribute("class", "newClass");
//now by accessing the paragraph we can changes the value using
// setAttribute(attr, value) however this will override the old style
// instead we use the classList
console.log(para.classList);

// using classList.add() -> will not override but add the new class to the 
// exsisting class
para.classList.add("newClass"); // this add the newClass style to the existing class.
para.classList.remove("newClass"); // this will remove the newClass from the existing one.








