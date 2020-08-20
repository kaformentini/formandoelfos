const BaseController = require("../controllers/baseController");
const { base } = require("../views/tamplates");
const baseController = new BaseController();

const baseRotas = BaseController.rotas();

module.exports = (app) => {
  app.get(baseRotas.index, baseController.index());
  app.route(baseRotas.login).get(baseController.login()).post(baseController.efetuaLogin())
};
