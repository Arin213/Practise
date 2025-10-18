
// const fibonacci = function(num) {
//     let n = Number(num);
//     if(n < 0) return "OOPS";
//     if(n === 0) return 0;
//     if(n === 1) return 1;
    
//     return fibonacci(n-1) + fibonacci(n-2); 


// };

                //OR

// iteratrive approach 
const fibonacci = function(num){
    let n = Number(num);
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n < 0) return "OOPS";
    let a = 0, b =1;
    for(let i = 2; i <=n; i++ ){
        let temp = a + b // sum of a and b
        a = b; //a will hold the value of b i.e 1 at first iteration
        b = temp; // b will hold the sum value of a & b i.e 1 at the first iteration
    }
    return b;


}

// // console.log(fibonacci("8"));
// console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
