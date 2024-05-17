const iSindicoRepository = require("../interfaces/iSindicoRepository");
const { Sindico } = require("../data/dbContext");

class SindicoRepository extends iSindicoRepository {
    constructor() {
      super();
    }
  
    adicionarSindico = async (sindico) => {
        const novoSindico = await Sindico.create({
            nome: sindico.nome,
            email: sindico.email,
            senha: sindico.senha,
            telefone: sindico.telefone,
            idCondominio: sindico.idCondominio,
        });

        return novoSindico;
    };
  
    get = async (id) => {
      let sindico = await Sindico.findOne({
        where: { id: id },
      });
  
      return sindico;
    };
  
    getAll = async () => {
      let sindicos = await Sindico.findAll({});
      return sindicos;
    };
  }
  
  module.exports = SindicoRepository;