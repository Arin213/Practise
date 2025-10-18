const reverseString = function(str) {
    /*
    1. first split the string which return the list
    2. use reverse method which will reverse the string char
    3. join the string back together and return the result
    */ 
   let reverseStr = str.split("").reverse();
   let reverseStrJoin = reverseStr.join("");
   return reverseStrJoin;

   // solution approach
//    return str.split("").reverse().join("");    

};

// Do not edit below this line
module.exports = reverseString;
