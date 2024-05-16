const express = require('express')
const app = express()
const port = 3000


//Condominio
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


//Condomino
const CondominoRepository = require("./repositories/condominoRepository");
const CondominoApplication = require("./applications/condominoApplications");
const CondominoFacade = require("./facade/condominoFacade");

const condominoRepository = new CondominoRepository();
const condominoApplication = new CondominoApplication(condominoRepository);
const condominoFacade = new CondominoFacade(condominoApplication);


app.get('/api/condomino', async (req, res) => {
  let condominos = await condominoFacade.getAll();
  res.json(condominos);
})

//Porteiro
const PorteiroRepository = require("./repositories/porteiroRepository");
const PorteiroApplication = require("./applications/porteiroApplications");
const PorteiroFacade = require("./facade/condominoFacade");

const porteiroRepository = new PorteiroRepository();
const porteiroApplication = new PorteiroApplication(porteiroRepository);
const porteiroFacade = new PorteiroFacade(porteiroApplication);


app.get('/api/porteiro', async (req, res) => {
  let porteiros = await porteiroFacade.getAll();
  res.json(porteiros);
})

//Sindico
const SindicoRepository = require("./repositories/sindicoRepository");
const SindicoApplication = require("./applications/sindicoApplications");
const SindicoFacade = require("./facade/sindicoFacade");

const sindicoRepository = new SindicoRepository();
const sindicoApplication = new SindicoApplication(sindicoRepository);
const sindicoFacade = new SindicoFacade(sindicoApplication);


app.get('/api/sindico', async (req, res) => {
  let sindicos = await sindicoFacade.getAll();
  res.json(sindicos);
})

//Visitante

//Reservas

//Comunicação


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})