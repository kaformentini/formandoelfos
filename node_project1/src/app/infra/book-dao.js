const booksMarko = require("../views/books/booksList/books.marko");

class BookDao {
  constructor(db) {
    this._db = db;
  }

  showAll() {
    return new Promise((resolve, reject) => {
      this._db.all("SELECT * FROM livros", (error, results) => {
        if (error) return reject("Não foi possível listar os livros!");
        return resolve(results);
      });
    });
  }
}

module.exports = BookDao;
