const ICondominioRepository = require("../interfaces/iCondominioRepository");
const { Condominio } = require("../data/dbContext");

class CondominioRepository extends ICondominioRepository {
    constructor() {
      super();
    }
  
    adicionarCondominio = async (condominio) => {
        const novoCondominio = await Condominio.create({
            nome: condominio.nome,
            endereco: condominio.endereco,
            numero_unidades: condominio.numero_unidades,
        });
    };
  
    get = async (nome) => {
      let condominio = await Condominio.findOne({
        where: { nome: nome },
      });
  
      return condominio;
    };
  
    getAll = async () => {
      let condominios = await Condominio.findAll({});
      return condominios;
    };
  }
  
  module.exports = CondominioRepository;