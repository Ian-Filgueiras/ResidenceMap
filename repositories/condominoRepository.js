const ICondominoRepository = require("../interfaces/iCondominoRepository.js");
const { Condomino } = require("../data/dbContext");

class CondominoRepository extends ICondominoRepository {
    constructor() {
      super();
    }
  
    adicionarCondomino = async (condomino) => {
        const novoCondomino = await Condomino.create({
            nome: condomino.nome,
            email: condomino.email,
            senha: condomino.senha,
            telefone: condomino.telefone,
            logradouro: condomino.logradouro,
            idCondominio: condomino.idCondominio,
        });
    };
  
    get = async (nome) => {
      let condomino = await Condomino.findOne({
        where: { nome: nome },
      });
  
      return condomino;
    };
  
    getAll = async () => {
      let condominos = await Condomino.findAll({});
      return condominos;
    };
  }
  
  module.exports = CondominoRepository;