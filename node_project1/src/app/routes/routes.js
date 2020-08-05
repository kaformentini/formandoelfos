const db = require("../../config/database");
const BookDao = require("../infra/book-dao");

module.exports = (app) => {
  app.get("/", function (req, resp) {
    resp.send(
      `<html>
            <head>
              <meta charset="utf-8"></head>
              <body>
                <h1> Casa do Código </h1>
              </body>
         </html>`
    );
  });

  app.get("/livros", function (req, resp) {
    const bookDao = new BookDao(db);
    bookDao.showAll()
      .then((books) =>
        resp.marko(require("../views/books/booksList/books.marko"), {
          books: books,
        })
      )
      .catch((error) => console.log(error));
  });
};
