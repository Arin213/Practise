const convertToCelsius = function(f) {
  let convertC =(f- 32) * 5/9;
  return Number(convertC.toFixed(1)); // using Number ((var.tofiexd(n))) -> n represent number after.
};

const convertToFahrenheit = function(c) {
  let convertF = (c * 9 /5) + 32;
  return Number(convertF.toFixed(1));
};

// console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
