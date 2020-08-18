const { check, validationResult } = require("express-validator/check");

const BaseController = require("../controllers/baseController");
const baseController = new BaseController();

const LivroController = require("../controllers/livroController");
const componentGlobalsTag = require("marko/src/components/taglib/component-globals-tag");
const livroController = new LivroController();

const baseRotas = BaseController.rotas();
const livrosRotas = LivroController.rotas();

module.exports = (app) => {
  app.get(baseRotas.index, baseController.index());

  app.get(livrosRotas.lista, livroController.lista());

  app.get(livrosRotas.cadastro, livroController.formCadastro());

  app.get(livrosRotas.edicao, livroController.formEditar());

  app.post(
    livrosRotas.lista,
    [
      check("titulo")
        .isLength({ min: 5 })
        .withMessage("Deve conter ao menos 5 caracteres"),
      check("preco").isCurrency().withMessage("Coloque um valor"),
    ],
    livroController.cadastrar())
  );

  app.put(livrosRotas.lista, livroController.update());

  app.delete(livrosRotas.delecao, livroController.deletar());
};
