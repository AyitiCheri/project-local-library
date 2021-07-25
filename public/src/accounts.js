function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
}

function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  return books.reduce((accumulator, book) => {
    return ( accumulator + book.borrows
            .filter(borrow => borrow.id === accId)
            .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
} 


function getBooksPossessedByAccount(account, books, authors) {
  const accId = account.id;
  let booksByAcct = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === accId)
  );
  booksByAcct.forEach(book => book.author = authors.find(author => book.authorId == author.id))
  return booksByAcct;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
