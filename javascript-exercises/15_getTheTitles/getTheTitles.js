const getTheTitles = function(book) {
    return book.map((bookTitle) => {
        return bookTitle.title;

    });

};

// const books = [
//       {
//         title: 'Book',
//         author: 'Name'
//       },
//       {
//         title: 'Book2',
//         author: 'Name2'
//       }
//     ]

// console.log(getTheTitles(books));

// let tit = books.map((item) => {
//     return item.title;
// });
// console.log(tit);
// console.log(getTheTitles(books));


// Do not edit below this line
module.exports = getTheTitles;
