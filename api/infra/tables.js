class Tables {
  init(conection) {
    this.conection = conection;
    this.createAntendimentoTable();
  }

  createAntendimentoTable() {
    const sql =
      "CREATE TABLE IF NOT EXISTS attendance (\
        id int NOT NULL AUTO_INCREMENT, \
        client varchar(50) NOT NULL, \
        pet varchar(20), \
        service varchar(20) NOT NULL, \
        service_date datetime NOT NULL, \
        creation_date datetime NOT NULL, \
        status varchar(20) NOT NULL, \
        observations text, \
        PRIMARY KEY(id))";
    this.conection.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela attendance criada");
      }
    });
  }
}

module.exports = new Tables();
