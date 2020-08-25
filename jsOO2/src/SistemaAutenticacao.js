class SistemaAutenticacao {
    static login(usuario, senha){
        if(SistemaAutenticacao.ehAutenticavel(usuario)){
            return usuario.autenticacao(senha);
        }
        return false;
    }

    static ehAutenticavel(usuario){
        return 'autenticacao' in usuario && usuario.autenticacao instanceof Function
    }
}
module.exports = SistemaAutenticacao;