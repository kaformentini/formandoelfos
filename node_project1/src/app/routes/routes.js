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
    bookDao
      .showAll()
      .then((books) =>
        resp.marko(require("../views/books/booksList/books.marko"), {
          books: books,
        })
      )
      .catch((error) => console.log(error));
  });
  app.get("/livros/cadastro", function (req, resp) {
    resp.marko(require("../views/books/form/form.marko"), { book: {} });
  });

  app.get("/livros/cadastro/:id", function (req, resp) {
    const id = req.params.id;
    const bookDao = new BookDao(db);

    bookDao
      .show(id)
      .then((book) =>
        resp.marko(require("../views/books/form/form.marko"), { book: book })
      );
  });

  app.post("/livros", function (req, resp) {
    console.log(req.body);
    const bookDao = new BookDao(db);
    bookDao
      .create(req.body)
      .then(resp.redirect("/livros"))
      .catch((error) => console.log(error));
  });

  app.put("/livros", function (req, resp) {
    console.log(req.body);
    const bookDao = new BookDao(db);
    bookDao
      .update(req.body)
      .then(resp.redirect("/livros"))
      .catch((error) => console.log(error));
  });

  app.delete("/livros/:id", function (req, resp) {
    const id = req.params.id;
    const bookDao = new BookDao(db);
    bookDao
      .delete(id)
      .then(() => resp.status(200).end())
      .catch((error) => console.log(error));
  });
};
