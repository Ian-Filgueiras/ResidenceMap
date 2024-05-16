class PorteiroApplication {
    constructor(porteiroRepository) {
      this.porteiroRepository = porteiroRepository
    }
    
    adicionarPorteiro = async (porteiro) => {
        this.porteiroRepository.adicionarPorteiro(porteiro);
    };
  
    get = async (id) => {
      return await this.porteiroRepository.get(id)
    };
  
    getAll = async () => {
      return await this.porteiroRepository.getAll();
    };
  }
  
  module.exports = PorteiroApplication;