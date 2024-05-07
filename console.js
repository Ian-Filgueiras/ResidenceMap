const CondominioRepository = require("./repositories/condominioRepository");

let condominioRepository = new CondominioRepository();
condominioRepository.adicionarCondomino({nome: "rose", endereco: "rubens", numero_unidades: 10});

const CondominoRepository = require("./repositories/condominoRepository");

let condominoRepository = new CondominoRepository();
condominoRepository.adicionarCondomino({nome: "rose",email:"dhasvdksa",senha: 123 ,telefone:"41561", logradouro: "rubens", idCondominio: 1});