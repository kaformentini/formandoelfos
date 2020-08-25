const Conta = require("./Conta.js");

class ContaPolpanca extends Conta {
  constructor(agencia, cliente, saldo) {
    super(agencia, cliente, saldo);
  }

 
}
module.exports = ContaPolpanca;
