class PorteiroApplication {
    constructor(porteiroRepository) {
      this.porteiroRepository = porteiroRepository
    }
    
    adicionarPorteiro = async (porteiro) => {
        this.porteiroRepository.adicionarPorteiro(porteiro);
    };
  
    get = async (nome) => {
      return await this.porteiroRepository.get(nome)
    };
  
    getAll = async () => {
      return await this.porteiroRepository.getAll();
    };
  }
  
  module.exports = PorteiroApplication;