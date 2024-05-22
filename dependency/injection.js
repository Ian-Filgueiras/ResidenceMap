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

module.exports = {condominoFacade, condominioFacade, porteiroFacade}