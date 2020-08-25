const Cliente = require("../Cliente/Cliente.js");

class Conta {
  constructor(agencia, cliente, saldo) {
    if(this.constructor == Conta) {
      throw new Error("Classe abstrata, não instanciar");
    }
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = saldo;
  }

  // sacar(valor) {

  // }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
}

module.exports = Conta;
