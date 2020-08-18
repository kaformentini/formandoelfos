class baseController {
static rotas() {
    return {
        index: "/"
    }
}
    index() {
    return function (req, resp) {
        resp.marko(require("../views/base/home/home.marko"));
      }
 }
}
module.exports = baseController;