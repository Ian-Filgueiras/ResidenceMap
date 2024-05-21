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

    return novoPorteiro;
  };

  get = async (id) => {
    let porteiro = await Porteiro.findOne({
      where: { id: id },
    });

    return porteiro;
  };

  getAll = async () => {
    let porteiros = await Porteiro.findAll({});
    return porteiros;
  };

  async update(id, updatedPorteiro) {
    const [updatedRowCount] = await Porteiro.update(updatedPorteiro, {
      where: { id : id}
    });

    if (updatedRowCount === 0) {
      throw new Error('Porteiro não encontrado');
    }

    const updatedPorteiroRecord = await Porteiro.findOne({ where: { id } });

    return updatedPorteiroRecord;
  };

  deletePorteiro = async (id) => {
    let porteiro = await Porteiro.findOne({
      where: { id: id },
    });
    await porteiro.destroy();
    return porteiro;
  };
}

module.exports = PorteiroRepository;