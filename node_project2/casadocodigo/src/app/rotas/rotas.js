const baseRotas = require("./base-rotas");
const livrosRotas = require("./livro-rotas");

module.exports = (app) => {
  baseRotas(app);
  livrosRotas(app);
};
