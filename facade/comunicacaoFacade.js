class ComunicacaoFacade {
  constructor(comunicacaoFacade) {
    this.comunicacaoFacade = comunicacaoFacade
  }

  adicionarComunicacao = async (comunicacao) => {
    return await this.comunicacaoFacade.adicionarComunicacao(comunicacao);
  };

  get = async (idPorteiro) => {
    return await this.comunicacaoFacade.get(idPorteiro)
  };

  getAll = async () => {
    return await this.comunicacaoFacade.getAll();
  };

  deleteComunicacao = async(id) => {
    return await this.comunicacaoFacade.delete(id);
  };
}

module.exports = ComunicacaoFacade;