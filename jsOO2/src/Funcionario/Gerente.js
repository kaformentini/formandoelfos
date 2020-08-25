const Funcionario = require("./Funcionario");

class Gerente extends Funcionario {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario);
    this._bonificacao = 1.1;
  }
}

module.exports = Gerente;
