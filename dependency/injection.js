//Condomino
const CondominoRepository = require("../repositories/condominoRepository");
const CondominoApplication = require("../applications/condominoApplications");
const CondominoFacade = require("../facade/condominoFacade");
const condominoRepository = new CondominoRepository();
const condominoApplication = new CondominoApplication(condominoRepository);
const condominoFacade = new CondominoFacade(condominoApplication);

//Condominio
const CondominioRepository = require("../repositories/condominioRepository");
const CondominioApplication = require("../applications/condominioApplications");
const CondominioFacade = require("../facade/condominioFacade");

const condominioRepository = new CondominioRepository();
const condominioApplication = new CondominioApplication(condominioRepository);
const condominioFacade = new CondominioFacade(condominioApplication);

//Porteiro
const PorteiroRepository = require("../repositories/porteiroRepository");
const PorteiroApplication = require("../applications/porteiroApplications");
const PorteiroFacade = require("../facade/porteiroFacade");

const porteiroRepository = new PorteiroRepository();
const porteiroApplication = new PorteiroApplication(porteiroRepository);
const porteiroFacade = new PorteiroFacade(porteiroApplication);

//Sindico
const SindicoRepository = require("../repositories/sindicoRepository");
const SindicoApplication = require("../applications/sindicoApplications");
const SindicoFacade = require("../facade/sindicoFacade");

const sindicoRepository = new SindicoRepository();
const sindicoApplication = new SindicoApplication(sindicoRepository);
const sindicoFacade = new SindicoFacade(sindicoApplication);

//Visitante
const VisitanteRepository = require("../repositories/visitanteRepository");
const VisitanteApplication = require("../applications/visitanteApplications");
const VisitanteFacade = require("../facade/visitanteFacade");

const visitanteRepository = new VisitanteRepository();
const visitanteApplication = new VisitanteApplication(visitanteRepository);
const visitanteFacade = new VisitanteFacade(visitanteApplication);

//Reservas
const ReservasRepository = require("../repositories/reservasRepository");
const ReservasApplication = require("../applications/reservasApplications");
const ReservasFacade = require("../facade/reservasFacade");

const reservasRepository = new ReservasRepository();
const reservasApplication = new ReservasApplication(reservasRepository);
const reservasFacade = new ReservasFacade(reservasApplication);

//Comunicação
const ComunicacaoRepository = require("../repositories/comunicacaoRepository");
const ComunicacaoApplication = require("../applications/comunicacaoApplications");
const ComunicacaoFacade = require("../facade/comunicacaoFacade");

const comunicacaoRepository = new ComunicacaoRepository();
const comunicacaoApplication = new ComunicacaoApplication(comunicacaoRepository);
const comunicacaoFacade = new ComunicacaoFacade(comunicacaoApplication);


module.exports = {
    condominoFacade, 
    condominioFacade, 
    porteiroFacade, 
    sindicoFacade, 
    visitanteFacade,
    reservasFacade,
    comunicacaoFacade
}