const LivroController = require("../controllers/livroController");
const componentGlobalsTag = require("marko/src/components/taglib/component-globals-tag");
const livroController = new LivroController();

const livrosRotas = LivroController.rotas();

const Livros = require("../model/livros.js");
const BaseController = require("../controllers/baseController");

module.exports = (app) => {
  app.use(livrosRotas.autorizadas, function (req, resp, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      resp.redirect(BaseController.rotas().login);
    }
  });

  app.get(livrosRotas.lista, livroController.lista());

  app
    .route(livrosRotas.cadastro)
    .get(livroController.formCadastro())
    .post(Livros.validacao(), livroController.cadastrar())
    .put(livroController.update());

  app.get(livrosRotas.edicao, livroController.formEditar());

  app.delete(livrosRotas.delecao, livroController.deletar());
};
