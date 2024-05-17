class PorteiroFacade {
    constructor(porteiroApplications) {
      this.porteiroApplications = porteiroApplications
    }
    
    adicionarPorteiro = async (porteiro) => {
      return await this.porteiroApplications.adicionarPorteiro(porteiro);
    };
  
    get = async (id) => {
      return await this.porteiroApplications.get(id)
    };
  
    getAll = async () => {
      return await this.porteiroApplications.getAll();
    };
  }
  
  module.exports = PorteiroFacade;