function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id)
}

function findBookById(books, id) {
  return books.find((books) => books.id === id)
}

function partitionBooksByBorrowedStatus(books) {
    return books.reduce((a, b) => { a[+(b.borrows[0] && b.borrows[0].returned)].push(b); return a }, [[],[]] )
}
  
function getBorrowersForBook(book, accounts) {
  // `borrows` is a list of transactions, each of type { id: string, returned: true }
  const borrows = book.borrows;
  let borrowers = borrows.map(({ id, returned})=> {
    let account = accounts.find(account => account.id === id); 
    return {...account, returned};
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
