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

    return novoCondominio;
  };

  get = async (id) => {
    let condominio = await Condominio.findOne({
      where: { id: id },
    });

    return condominio;
  };

  getAll = async () => {
    let condominios = await Condominio.findAll({});
    return condominios;
  };

  async update(id, updatedCondominio) {
    
    const [updatedRowCount] = await Condominio.update(updatedCondominio, {
      where: { id : id}
    });

    if (updatedRowCount === 0) {
      throw new Error('Condominio não encontrado');
    }

    
    const updatedCondominioRecord = await Condominio.findOne({ where: { id } });

    return updatedCondominioRecord;
  };


  deleteCondominio = async (id) => {
    let condominio = await Condominio.findOne({
      where: { id: id },
    });
    await condominio.destroy();
    return condominio;
  };
}

module.exports = CondominioRepository;