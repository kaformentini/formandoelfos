const booksMarko = require("../views/books/booksList/books.marko");

class BookDao {
  constructor(db) {
    this._db = db;
  }

  show(bookId) {
    return new Promise((resolve, reject) => {
      this._db.get(
        "SELECT * FROM livros WHERE id = ?",
        [bookId],
        (error, row) => {
          if (error) return reject("Não foi possível listar os livros!");
          return resolve(row);
        }
      );
    });
  }

  showAll() {
    return new Promise((resolve, reject) => {
      this._db.all("SELECT * FROM livros", (error, results) => {
        if (error) return reject("Não foi possível listar os livros!");
        return resolve(results);
      });
    });
  }
  create(book) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `INSERT INTO LIVROS (
        titulo, preco, descricao) values (?, ?, ?)`,
        [book.titulo, book.preco, book.descricao],
        function (error) {
          if (error) {
            console.log(error);
            return reject("Não foi possível cadastrar o livro.");
          }
          resolve();
        }
      );
    });
  }
  update(bookId) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `UPDATE livros SET
        titulo = ?,
        preco = ?,
        descricao = ? 
        WHERE ID = ?`,
        [bookId.titulo, bookId.preco, bookId.descricao, bookId.id],
        function (error) {
          if (error) {
            console.log(error);
            return reject("Não foi possível atualizar o livro.");
          }
          resolve();
        }
      );
    });
  }

  delete(bookId) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `DELETE FROM livros WHERE ID = ?`,
        [bookId],
        function (error) {
          if (error) {
            console.log(error);
            return reject("Não foi possível excluir o livro.");
          }
          resolve();
        }
      );
    });
  }
}

module.exports = BookDao;
