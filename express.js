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

app.get('/api/condominio/:id', async (req, res) => {
  let id = req.params.id;
  let condominio = await condominioFacade.get(id);
  res.json(condominio);
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

app.get('/api/condomino/:id', async (req, res) => {
  let id = req.params.id;
  let condomino = await condominoFacade.get(id);
  res.json(condomino);
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

app.get('/api/porteiro/:id', async (req, res) => {
  let id = req.params.id;
  let porteiro = await porteiroFacade.get(id);
  res.json(porteiro);
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

app.get('/api/sindico/:id', async (req, res) => {
  let id = req.params.id;
  let sindico = await sindicoFacade.get(id);
  res.json(sindico);
})

//Visitante
const VisitanteRepository = require("./repositories/visitanteRepository");
const VisitanteApplication = require("./applications/visitanteApplications");
const VisitanteFacade = require("./facade/visitanteFacade");

const visitanteRepository = new VisitanteRepository();
const visitanteApplication = new VisitanteApplication(visitanteRepository);
const visitanteFacade = new VisitanteFacade(visitanteApplication);


app.get('/api/visitante', async (req, res) => {
  let visitantes = await visitanteFacade.getAll();
  res.json(visitantes);
})

app.get('/api/visitante/:id', async (req, res) => {
  let id = req.params.id;
  let visitante = await visitanteFacade.get(id);
  res.json(visitante);
})

//Reservas
const ReservasRepository = require("./repositories/reservasRepository");
const ReservasApplication = require("./applications/reservasApplications");
const ReservasFacade = require("./facade/reservasFacade");

const reservasRepository = new ReservasRepository();
const reservasApplication = new ReservasApplication(reservasRepository);
const reservasFacade = new ReservasFacade(reservasApplication);


app.get('/api/reservas', async (req, res) => {
  let reservas = await reservasFacade.getAll();
  res.json(reservas);
})

app.get('/api/reservas/:id', async (req, res) => {
  let id = req.params.id;
  let reserva = await reservasFacade.get(id);
  res.json(reserva);
})

//Comunicação
const ComunicacaoRepository = require("./repositories/comunicacaoRepository");
const ComunicacaoApplication = require("./applications/comunicacaoApplications");
const ComunicacaoFacade = require("./facade/comunicacaoFacade");

const comunicacaoRepository = new ComunicacaoRepository();
const comunicacaoApplication = new ComunicacaoApplication(comunicacaoRepository);
const comunicacaoFacade = new ComunicacaoFacade(comunicacaoApplication);


app.get('/api/comunicacao', async (req, res) => {
  let comunicacoes = await comunicacaoFacade.getAll();
  res.json(comunicacoes);
})

app.get('/api/comunicacao/:id', async (req, res) => {
  let id = req.params.id;
  let comunicacao = await comunicacaoFacade.get(id);
  res.json(comunicacao);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})