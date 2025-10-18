const findTheOldest = function(age) {
    return age.reduce((acc, current) => {
      const getAge = (person) => {
        const current = new Date().getFullYear();
        const getDeathYear = person.yearOfDeath || current; //truthy , falsy value 

        return getDeathYear - person.yearOfBirth;

      };

      return getAge(acc) > getAge(current)? acc:current;

    });

};

//  const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

  // console.log(findTheOldest(people));
// let old = people.reduce((acc, current) =>{
//   const getAge = (person) => {
//     let currentYear = new Date().getFullYear();
//     let getDeathYear = person.yearOfDeath||currentYear;
//     return getDeathYear - person.yearOfBirth;

//   };
//   return  getAge(acc) > getAge(current) ? acc : current;


// });

// console.log(old);

// Do not edit below this line
module.exports = findTheOldest;
