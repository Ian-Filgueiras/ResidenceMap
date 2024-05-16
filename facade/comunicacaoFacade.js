class ComunicacaoFacade {
    constructor(comunicacaoFacade) {
      this.comunicacaoFacade = comunicacaoFacade
    }
    
    adicionarComunicacao = async (comunicacao) => {
        this.comunicacaoFacade.adicionarComunicacao(comunicacao);
    };
  
    get = async (idPorteiro) => {
      return await this.comunicacaoFacade.get(idPorteiro)
    };
  
    getAll = async () => {
      return await this.comunicacaoFacade.getAll();
    };
  }
  
  module.exports = ComunicacaoFacade;