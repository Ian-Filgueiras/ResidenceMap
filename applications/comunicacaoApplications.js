class ComunicacaoApplication {
    constructor(comunicacaoRepository) {
      this.comunicacaoRepository = comunicacaoRepository
    }
    
    adicionarComunicacao = async (comunicacao) => {
        this.comunicacaoRepository.adicionarComunicacao(comunicacao);
    };
  
    get = async (idPorteiro) => {
      return await this.comunicacaoRepository.get(idPorteiro)
    };
  
    getAll = async () => {
      return await this.comunicacaoRepository.getAll();
    };
  }
  
  module.exports = ComunicacaoApplication;