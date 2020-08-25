const Funcionario = require("./Funcionario");

class Diretor extends Funcionario {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario);
    this._bonificacao = 2;
  }
}

module.exports = Diretor;
