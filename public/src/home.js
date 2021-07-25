function getTotalBooksCount(books) {
  let total = 0;
  return books.reduce((total) => total += 1, 0)
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  return accounts.reduce((total) => total +1, 0)
}

function getBooksBorrowedCount(books) {
  let count = 0
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) count++
  }
  return count;
}

function getMostCommonGenres(books) { 
  let countObj = {};
    books.forEach(book => {
      if (countObj[book.genre] != null) {
        countObj[book.genre]++;
      } else {
        countObj[book.genre] = 1;
      }
    });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
      countArray.push({
        'name' : key,
        'count' : value
      }); 
    }
    countArray.sort((a,b) => b.count - a.count);
    return countArray.slice(0, 5);
  }

function getMostPopularBooks(books) { 
   const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
    borrows.sort((a,b) => b.count - a.count);
    return borrows.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  return authors.map(book => {
    book.count = books.filter(author => author.authorId === book.id)
     .reduce((b, a) => b + (a.borrows && a.borrows.length || 0), 0);
    book.name = `${book.name.first} ${book.name.last}`;
    delete book.id;
    return book})
    .sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
