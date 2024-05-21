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

  async update(id, updatedSindico) {
    const [updatedRowCount] = await Sindico.update(updatedSindico, {
      where: { id : id}
    });

    if (updatedRowCount === 0) {
      throw new Error('Síndico não encontrado');
    }

    const updatedSindicoRecord = await Sindico.findOne({ where: { id } });

    return updatedSindicoRecord;
  };

  deleteSindico = async (id) => {
    let sindico = await Sindico.findOne({
      where: { id: id },
    });
    await sindico.destroy();
    return sindico;
  };
}

module.exports = SindicoRepository;