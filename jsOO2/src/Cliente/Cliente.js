class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha;
  }
  
  get cpf() {
    return this._cpf;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }

  autenticacao(senha){
    return senha == this._senha
}
}
module.exports = Cliente;
