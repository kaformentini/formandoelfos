const { check, validationResult } = require("express-validator/check");

class Livros {
  static validacao() {
    return [
      check("titulo").isLength({ min: 5 }).withMessage("Deve conter ao menos 5 caracteres"),
      check("preco").isCurrency().withMessage("Coloque um valor"),
    ];
  }
}

module.exports = Livros;
