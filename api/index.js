const customExpress = require("./config/customExpress");
app = customExpress();

const Tables = require("./infra/tables");

const conection = require("./infra/mysql");

conection.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("BD mysql conectado");

    Tables.init(conection);

    app.listen(3002, () => console.log("servidor porta 3002"));
  }
});
