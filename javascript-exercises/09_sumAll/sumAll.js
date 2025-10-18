const sumAll = function(initial, last) {

    if (typeof initial !== "number" || typeof last !== "number"
        ||  initial < 0  || last < 0 || !Number.isInteger(initial) || 
        !Number.isInteger(last)  
    ) {
        return "ERROR";

    }

    // Swap if initial is greater than last
    if (initial > last) {
        [initial, last] = [last, initial];
    }

    let total = 0;
    for (; initial <= last; initial++) {
        total += initial;

    }
    return total;

};

// console.log(sumAll(1, 4000));
// Do not edit below this line
module.exports = sumAll;
