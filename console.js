const CondominioRepository = require("./repositories/condominioRepository");

let condominioRepository = new CondominioRepository();
condominioRepository.adicionarCondominio({nome: "rose", endereco: "rubens", numero_unidades: 10});

const CondominoRepository = require("./repositories/condominoRepository");

let condominoRepository = new CondominoRepository();
condominoRepository.adicionarCondomino({nome: "rose",email:"dhasvdksa",senha: 123 ,telefone:"41561", logradouro: "rubens", idCondominio: 1});

const PorteiroRepository = require("./repositories/porteiroRepository");

let porteiroRepository = new PorteiroRepository();
porteiroRepository.adicionarPorteiro({nome: "mario",email:"dasf",senha: 123 ,telefone:"321321", idCondominio: 1});

const SindicoRepository = require("./repositories/sindicoRepository");

let sindicoRepository = new SindicoRepository();
sindicoRepository.adicionarSindico({nome: "joao",email:"admin",senha: 1113 ,telefone:"135513", idCondominio: 1});

const VisitanteRepository = require("./repositories/visitanteRepository");

let visitanteRepository = new VisitanteRepository();
visitanteRepository.adicionarVisitante({nome: "ian",cpf:"00023414",data_visita: "08-05-2024" ,idCondomino: 1});


const ReservasRepository = require("./repositories/reservasRepository");

let reservasRepository = new ReservasRepository();
reservasRepository.adicionarReserva({data_inicio: "08-05-2024",data_fim:"09-05-2024",descricao: "salao de festa" , idCondomino: 1});


const ComunicacaoRepository = require("./repositories/comunicacaoRepository");

let comunicacaoRepository = new ComunicacaoRepository();
comunicacaoRepository.adicionarComunicacao({text: "ola paulo",idPorteiro: 1 ,idCondomino: 1, mensagem_p_para_c: true});