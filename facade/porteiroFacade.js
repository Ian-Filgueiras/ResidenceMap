class PorteiroFacade {
    constructor(porteiroApplications) {
      this.porteiroApplications = porteiroApplications
    }
    
    adicionarPorteiro = async (porteiro) => {
        this.porteiroApplications.adicionarPorteiro(porteiro);
    };
  
    get = async (nome) => {
      return await this.porteiroApplications.get(nome)
    };
  
    getAll = async () => {
      return await this.porteiroApplications.getAll();
    };
  }
  
  module.exports = PorteiroFacade;