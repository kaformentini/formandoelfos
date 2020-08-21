const Atendimento = require("../models/atendimento");

module.exports = (app) => {
  app.get("/atendimento", (req, res) => {
    Atendimento.list(res);
  });

  app.post("/atendimento", (req, res) => {
    console.log('Post com sucesso');
    console.log(req.body);

    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res);
    
    // res.send("atendimento POST");
  });

  app.get("/atendimento/:id", (req, res) => {
    Atendimento.findById(parseInt(req.params.id), res)
  })

  app.patch("/atendimento/:id", (req, res) => {
    const dataForChange = req.body
    Atendimento.update(parseInt(req.params.id), dataForChange,res)
  })

  app.delete("/atendimento/:id", (req, res)  => {
    Atendimento.delete(parseInt(req.params.id), res)
  })
};
