/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
//solution:
// target the element
const para = document.querySelector("p");
/*
  simply using only innerText wont let the modified paragraph to be rendered 
  instead it will pass everything as plain text 
  to get rendered in webpage we neeed innerHtml so it will 
  rendered the changes in page 
*/
para.innerHTML = para.innerText.split(" ")
  .map(word => word.length > 8 ? `<span style = "background-color:yellow"> ${word} </span>` : word)
  .join(" ");



/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

// solution:
// select body
const body = document.querySelector('body');
const link = document.createElement("a");
link.href = 'https://forcemipsum.com/';
link.innerHTML = `<button style = "border-radius: 4px; color:white; background-color:blue;" >Click</button>`;
body.appendChild(link);



/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
para.innerHTML = para.innerHTML.split(".")
  .join(`<br>`);

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const count = para.innerText.split(" ").length;
const wordCount = document.createElement("div");
wordCount.innerText = `${count} words`;
console.log(wordCount);
body.insertBefore(wordCount, para);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const text = para.innerText.split(" ");
const replace = text.map(word => word.includes("?") ? "🤔" : word.includes("!") ?" 😲" : word)
  .join(" ");

para.innerHTML = replace;



