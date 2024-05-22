const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//Condominio
const condominioRouter = require("./routes/condominioRouter");
app.use("/api/condominio",condominioRouter)


//Condomino
const condominoRouter = require("./routes/condominoRouter");
app.use("/api/condomino",condominoRouter)


//Porteiro
const porteiroRouter = require("./routes/porteiroRouter");
app.use("/api/porteiro",porteiroRouter)



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

app.post('/api/sindico', async (req, res) => {
  let novoSindico = req.body;
  let sindicoSalvo = await sindicoFacade.adicionarSindico(novoSindico);
  res.json(sindicoSalvo);
});

app.put('/api/sindico/:id', async (req, res) => {
  let id = req.params.id;
  let updatedSindico = req.body;
  try {
    let sindicoAtualizado = await sindicoFacade.updateSindico(id, updatedSindico);
    res.json(sindicoAtualizado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/api/sindico/:id', async (req, res) => {
  let id = req.params.id;
  let sindicoRemovido = await sindicoFacade.deleteSindico(id);
  res.json(sindicoRemovido);
});

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

app.post('/api/visitante', async (req, res) => {
  let novoVisitante = req.body;
  let visitanteSalvo = await visitanteFacade.adicionarVisitante(novoVisitante);
  res.json(visitanteSalvo);
});

app.put('/api/visitante/:id', async (req, res) => {
  let id = req.params.id;
  let updatedVisitante = req.body;
  try {
    let visitanteAtualizado = await visitanteFacade.updateVisitante(id, updatedVisitante);
    res.json(visitanteAtualizado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/api/visitante/:id', async (req, res) => {
  let id = req.params.id;
  let visitanteRemovido = await visitanteFacade.deleteVisitante(id);
  res.json(visitanteRemovido);
});

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

app.post('/api/reservas', async (req, res) => {
  let novaReserva = req.body;
  let reservasSalvo = await reservasFacade.adicionarReserva(novaReserva);
  res.json(reservasSalvo);
});

app.put('/api/reservas/:id', async (req, res) => {
  let id = req.params.id;
  let updatedReservas = req.body;
  try {
    let reservaAtualizada = await reservasFacade.updateSindico(id, updatedReservas);
    res.json(reservaAtualizada);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/api/reserva/:id', async (req, res) => {
  let id = req.params.id;
  let reservaRemovido = await reservaFacade.deleteReserva(id);
  res.json(reservaRemovido);
});

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

app.post('/api/comunicacao', async (req, res) => {
  let novaComunicacao = req.body;
  let comunicacaoSalvo = await comunicacaoFacade.adicionarComunicacao(novaComunicacao);
  res.json(comunicacaoSalvo);
});

app.delete('/api/comunicacao/:id', async (req, res) => {
  let id = req.params.id;
  let comunicacaoRemovido = await comunicacaoFacade.deleteComunicacao(id);
  res.json(comunicacaoRemovido);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});