const IComunicacaoRepository = require("../interfaces/iComunicacao");
const { Comunicacao } = require("../data/dbContext");

class ComunicacaoRepository extends IComunicacaoRepository {
    constructor() {
      super();
    }
  
    adicionarComunicacao = async (comunicacao) => {
        const novaComunicacao = await Comunicacao.create({
            text: comunicacao.text,
            data_envio: comunicacao.data_envio,
            idPorteiro: comunicacao.idPorteiro,
            idCondomino: comunicacao.idCondomino,
            mensagem_p_para_c: comunicacao.mensagem_p_para_c,
        });
    };
  
    get = async (nome) => {
      let comunicacao = await Comunicacao.findOne({
        where: { nome: nome },
      });
  
      return condomino;
    };
  
    getAll = async () => {
      let comunicacoes = await Comunicacao.findAll({});
      return comunicacoes;
    };
  }
  
  module.exports = ComunicacaoRepository;