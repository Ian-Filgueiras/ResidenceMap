const IPorteiroRepository = require("../interfaces/iPorteiroRepository");
const { Porteiro } = require("../data/dbContext");

class PorteiroRepository extends IPorteiroRepository {
    constructor() {
      super();
    }
  
    adicionarPorteiro = async (porteiro) => {
        const novoPorteiro = await Porteiro.create({
            nome: porteiro.nome,
            email: porteiro.email,
            senha: porteiro.senha,
            telefone: porteiro.telefone,
            idCondominio: porteiro.idCondominio,
        });
    };
  
    get = async (nome) => {
      let porteiro = await Porteiro.findOne({
        where: { nome: nome },
      });
  
      return porteiro;
    };
  
    getAll = async () => {
      let porteiros = await Porteiro.findAll({});
      return porteiros;
    };
  }
  
  module.exports = PorteiroRepository;