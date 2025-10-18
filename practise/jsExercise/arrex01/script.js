const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?
const totalIncome = people.reduce(function (acc, current) {
    return acc + Number(current.salary);

}, 0);
const averageIncome = Math.floor(totalIncome / people.length);
console.log(averageIncome);

// 2) Who are the people that are currently older than 30?
const age = people.map(age => {
    const current = new Date();
    const today = new Date(age.DOB);
    const currentInMs = current - today; //get the miliseconds 

    // get  the miliseconds in year 
    // ms in sc = 1000
    // sec in min = 60
    // min in hrs = 60
    // hsr in day = 24 
    // day in year = 365.25  * include the leap year

    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYears = Math.floor(currentInMs / msInYear);
    if (ageInYears > 30) {
        return age.firstName + " " + String(ageInYears);
    }

});

console.log(age);


// 3) Get a list of the people's full name (firstName and lastName).\
const fullName = people.map(firstAndLastname => firstAndLastname.firstName + " " + firstAndLastname.lastName);
console.log(fullName);

// 4) Get a list of people in the array ordered from youngest to oldest.
// solution we use above get age then use sort(a-b)
const getAge = people.map(age => {
    const currentDatePeople = new Date();
    const todayDate = new Date(age.DOB);

    const currentMS = currentDatePeople - todayDate;
    const milisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYear = Math.floor(currentMS / milisecondsInYear);
    return ageInYear;

});

const sortAge = getAge.sort((a, b) => a - b);
console.log(sortAge);

// 5) How many people are there in each department?
// solution use reduce with arg of {}.
const empDepartment = people.reduce((acc, current) => {
    /*
// First iteration
acc = {} // empty object to start
current = { department: 'Development', ... } 
acc['Development'] = (undefined || 0) + 1 // acc becomes { Development: 1 }

// Second iteration
acc = { Development: 1 } // accumulator from previous iteration
current = { department: 'Development', ... }
acc['Development'] = (1 || 0) + 1 // acc becomes { Development: 2 }

// Third iteration
acc = { Development: 2 }
current = { department: 'Marketing', ... }
acc['Marketing'] = (undefined || 0) + 1 // acc becomes { Development: 2, Marketing: 1 }
    */
    acc[current.department] = (acc[current.department] || 0) + 1;
    return acc;

}, {})

console.log(empDepartment);

