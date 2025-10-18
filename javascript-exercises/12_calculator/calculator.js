const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(arr) {
  return arr.reduce((acc, current) => {
    return acc + current;

  },0)
	
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current, 1);

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(num) {
  if(num< 0) return undefined;
  if (num == 0 || num == 1) return 1;
  let numArr = []
  for(let i = 1; i <= num; i++){
    numArr.push(i);
  }
	return numArr.reduce((acc, current) => {
    return acc * current;
  },1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
