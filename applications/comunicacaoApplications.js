class ComunicacaoApplication {
  constructor(comunicacaoRepository) {
    this.comunicacaoRepository = comunicacaoRepository
  }

  adicionarComunicacao = async (comunicacao) => {
    return await this.comunicacaoRepository.adicionarComunicacao(comunicacao);
  };

  get = async (idPorteiro) => {
    return await this.comunicacaoRepository.get(idPorteiro)
  };

  getAll = async () => {
    return await this.comunicacaoRepository.getAll();
  };

  async deleteComunicacao(id) {
    return await this.comunicacaoRepository.deleteComunicacao(id);
  };
}

module.exports = ComunicacaoApplication;