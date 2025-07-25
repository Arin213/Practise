const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born1500 = inventors.filter((born) => {
    if (born.year >= 1500 && born.year <= 1599) {
        return true;
    }

});
console.table(born1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstLastName = inventors.map((firstLast) => {
    return `${firstLast.first} ${firstLast.last}`;

});
console.table(firstLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Sort the inventors by birthdate, oldest to youngest
const Age = inventors.slice().sort((a, b) => a.year - b.year);
console.table(Age);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// syntax: array.reduce(function(accumulator, current value, index array){
// }, initial value);
// In reduce, the second argument (here, 0) is the initial value of the accumulator (totalYear). 
// If you don't provide it, reduce will use the first element of the array as the initial value, which can lead to bugs if you're expecting a number.
// Here, 0 is used because we want to sum up numbers, so the starting point should be 0.

const years = inventors.reduce((totalYear, inventor) => {
    return totalYear + (inventor.passed - inventor.year);
}, 0);
console.table(years);

// 5. Sort the inventors by years lived
// const oldest = inventors.slice().map(age => {
//     return age.passed - age.year;
// });
// const sortAge = oldest.sort();
// console.table(sortAge);
const sortAge = inventors.slice().sort((a, b) => {
    let alived = a.passed - b.passed;
    let blived = b.passed - b.passed;
    return blived - alived;

});
console.table(sortAge);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortLastName = people.sort(function (a, b) {
    const [aLast, aFirst] = a.split(", ");
    const [bLast, bFirst] = b.split(", ");
    // return aLast - bLast;
    return aLast > bLast ? 1 : -1;


});
console.log(sortLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sumOfInstance = data.reduce((totalCount, item) => { //totalCount = adder, item = current value in array
    // console.log(current);
    if (!totalCount[item]) {
        totalCount[item] = 0;
    }
    totalCount[item]++;
    return totalCount;
}, {}); //{} holder or initial holder either could be array or numbers or any obj

console.table(sumOfInstance);