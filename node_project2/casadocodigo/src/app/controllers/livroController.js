const { validationResult } = require("express-validator/check");

const LivroDao = require("../infra/livro-dao");
const db = require("../../config/database");

const templates = require("../views/tamplates");

class LivroController {
  static rotas() {
    return {
      autorizadas: "/livros*",
      lista: "/livros",
      cadastro: "/livros/form",
      edicao: "/livros/form/:id",
      delecao: "/livros/:id",
    };
  }

  lista() {
    return function (req, resp) {
      const livroDao = new LivroDao(db);
      livroDao
        .lista()
        .then((livros) =>
          resp.marko(templates.livros.lista, {
            livros: livros,
          })
        )
        .catch((erro) => console.log(erro));
    };
  }

  formCadastro() {
    return function (req, resp) {
      resp.marko(templates.livros.form, { livro: {} });
    };
  }

  cadastrar() {
    return function (req, resp) {
      console.log(req.body);
      const livroDao = new LivroDao(db);

      const erro = validationResult(req);

      if (!erro.isEmpty()) {
        return resp.marko(templates.livros.form, {
          livro: req.body,
          errosValidacao: erro.array(),
        });
      }

      livroDao
        .adiciona(req.body)
        .then(resp.redirect(LivroController.rotas().lista))
        .catch((erro) => console.log(erro));
    };
  }

  formEditar() {
    return function (req, resp) {
      const id = req.params.id;
      const livroDao = new LivroDao(db);

      livroDao
        .buscaPorId(id)
        .then((livro) =>
          resp.marko(templates.livros.form, {
            livro: livro,
          })
        )
        .catch((erro) => console.log(erro));
    };
  }

  update() {
    return function (req, resp) {
      console.log(req.body);
      const livroDao = new LivroDao(db);

      livroDao
        .atualiza(req.body)
        .then(resp.redirect(LivroController.rotas().lista))
        .catch((erro) => console.log(erro));
    };
  }

  deletar() {
    return function (req, resp) {
      const id = req.params.id;

      const livroDao = new LivroDao(db);
      livroDao
        .remove(id)
        .then(() => resp.status(200).end())
        .catch((erro) => console.log(erro));
    };
  }
}

module.exports = LivroController;
