const palindromes = function (str) {
    let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((chars) => alphanumerical.includes(chars))
    .join('');


    return cleanedStr === cleanedStr.split("").reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

// console.log(palindromes('Racecar!'));
// console.log(palindromes('ZZZZ car, a man, a maracaz.')); // false