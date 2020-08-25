const Cliente = require('./Cliente/Cliente.js')
const ContaCorrente = require('./Conta/ContaCorrente.js')
const ContaPolpanca = require('./Conta/ContaPolpanca.js')
const ContaSalario = require('./Conta/ContaSalario.js')
const Diretor = require('./Funcionario/Diretor')
const Gerente = require('./Funcionario/Gerente')


const Conta = require('./Conta/Conta')

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const diretor = new Diretor("Bim", 1234, 10000);
const gerente = new Gerente("Bim", 1234, 10000);

diretor.cadastrarSenha(1234)
gerente.cadastrarSenha(1234)
cliente1.cadastrarSenha(123)



console.log(cliente1.autenticacao(123));

