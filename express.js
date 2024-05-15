const express = require('express')
const app = express()
const port = 3000

const CondominioRepository = require("./repositories/condominioRepository");
const CondominioApplication = require("./applications/condominioApplications");
const CondominioFacade = require("./facade/condominioFacade");

const condominioRepository = new CondominioRepository();
const condominioApplication = new CondominioApplication(condominioRepository);
const condominioFacade = new CondominioFacade(condominioApplication);

app.get('/api/condominio', async (req, res) => {
  let condominios = await condominioFacade.getAll();
  res.json(condominios);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})