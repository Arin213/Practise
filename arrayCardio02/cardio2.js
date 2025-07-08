   // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
   function Age(array){
    return array.map(someAge => 2025 - someAge.year)
    .some(someAge => someAge >= 19);
   }
   console.log(Age(people));
    // Array.prototype.every() // is everyone 19 or older?
    let everyone = function(array){
      return array.map(everyAge => 2025 - everyAge.year)
      .every(everyAge => everyAge >= 19);

    };

    console.log(everyone(people));


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    let findComment = comments.find(getId => getId.id == 823423);
    console.log(findComment);
    console.log(findComment.text);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    let findCommentId = comments.findIndex(getIndex => getIndex.id == 823423);
    let deleted  = comments.splice(findCommentId, 1);
    console.table(deleted);
    console.table(comments);
    

