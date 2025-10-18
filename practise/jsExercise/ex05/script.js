/*Exercise 1:
  ----------
  Write a JavaScript function that returns a passed string with 
  letters in alphabetical order.
  Example string: "webmaster"
  Expected Output: "abeemrstw"
*/




// solution
const sortString = (str) => {
  // return str.split("").sort().join("");
  return str.split("").sort((a, b) => a > b ? 1 : -1).join("");
}

console.log(sortString("webmaster"));
console.log(sortString("javascript"));

/* Exercise 2:
   ----------
   Write a JavaScript functin that accepts a string as a parameter and counts 
   the number of vowels within the string.
*/

// solution
const vowel = (str) => {
  // let count = 0;
  return str.toLowerCase()
    .split("")
    .filter(char => /[aeiou]/.test(char)).length; //ues of regex 

};

console.log(vowel("Apple"));
console.log(vowel("Orange"));
console.log(vowel("Banana"));


/* Exercise 3:
   ----------
   Write a JavaScript function to convert an amount to 
   coins.
   Example input: 46 and possible coins 25, 10, 5, 2, 1

   output: 25, 10, 10, 1

*/

// solution
const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i++) {
    const thisCoinNum = Math.floor(money / coins[i]);
    for (let y = 0; y < thisCoinNum; y++) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
}

console.log(countCoins(46));
console.log(countCoins(50));
console.log(countCoins(25));

/* Exercise 4:
   ----------
   Write a JavaScript function to extract unique 
   characters from a string.
*/

// solution
const uniqueChars = (str) => {
  return [...new Set(str)];

};

console.log(uniqueChars("apple"))
console.log(uniqueChars("orange"))
console.log(uniqueChars("banana"))

/* Exercise 5:
   ----------:
   Wrtie a Javascript functions to find the 
   first not repeated cahraceter

   example string: "abacddbec"
   expected output: "e"
*/

const nonRepeatChar = (str) => {
  return str.split("") //["a", "b", "a", "c", "d", "d", "b", "e", "c"]
    /*
    So now we’re looping over this array with .filter.
    Case: when item = "a"
    The outer filter gives us one "a" from the array (first at index 0).
    Then we run:
    arr.filter(arrItem => arrItem === item)
  Here arr = ["a","b","a","c","d","d","b","e","c"]
  
  item = "a"
  
  So we check every arrItem one by one:
  
  arrItem = "a" → is "a" === "a"? ✅ yes → keep "a"
  
  arrItem = "b" → is "b" === "a"? ❌ no → skip
  
  arrItem = "a" → is "a" === "a"? ✅ yes → keep "a"
  
  arrItem = "c" → ❌ skip
  
  arrItem = "d" → ❌ skip
  
  arrItem = "d" → ❌ skip
  
  arrItem = "b" → ❌ skip
  
  arrItem = "e" → ❌ skip
  
  arrItem = "c" → ❌ skip
  
  The kept values
  
  👉 Only the first and third elements matched.
  So the inner filter returns:
  
  ["a", "a"]
  
  If item = "e"
  
  Check each element in the array against "e".
  
  Only one matches (at index 7).
  So you’d get:
  
  ["e"]
  
  Summary
  
  That’s why:
  
  "a" corresponds to ["a","a"] (because it appears twice in the array).
  
  "e" corresponds to ["e"] (only once).
  
  "d" corresponds to ["d","d"].
  
  The inner .filter is basically collecting all the copies of the current item from the array.
    */

    .filter((item, index, arr) =>
      arr.filter(arrItem => arrItem === item).length === 1
    );


};

console.log(nonRepeatChar("abacddbec"));