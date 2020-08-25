const Conta = require("./Conta.js");

class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(agencia, cliente, 0);
    Conta.numeroDeContas += 1;
  }

  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
module.exports = ContaCorrente;
