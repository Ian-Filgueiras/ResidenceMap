const IComunicacaoRepository = require("../interfaces/iComunicacaoRepository");
const { Comunicacao } = require("../data/dbContext");

class ComunicacaoRepository extends IComunicacaoRepository {
  constructor() {
    super();
  }

  adicionarComunicacao = async (comunicacao) => {
    const novaComunicacao = await Comunicacao.create({
      text: comunicacao.text,
      idPorteiro: comunicacao.idPorteiro,
      idCondomino: comunicacao.idCondomino,
      mensagem_p_para_c: comunicacao.mensagem_p_para_c,
    });

    return novaComunicacao;
  };

  get = async (idPorteiro) => {
    let comunicacao = await Comunicacao.findOne({
      where: { idPorteiro: idPorteiro },
    });

    return comunicacao;
  };

  getAll = async () => {
    let comunicacoes = await Comunicacao.findAll({});
    return comunicacoes;
  };

  deleteComunicacao = async (id) => {
    let comunicacao = await Comunicacao.findOne({
      where: { id: id },
    });
    await comunicacao.destroy();
    return comunicacao;
  };
}

module.exports = ComunicacaoRepository;