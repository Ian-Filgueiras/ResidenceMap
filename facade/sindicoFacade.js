class SindicoFacade {
    constructor(sindicoApplications) {
      this.sindicoApplications = sindicoApplications
    }
    
    adicionarSindico = async (sindico) => {
        this.sindicoApplications.adicionarSindico(sindico);
    };
  
    get = async (nome) => {
      return await this.sindicoApplications.get(nome)
    };
  
    getAll = async () => {
      return await this.sindicoApplications.getAll();
    };
  }
  
  module.exports = SindicoFacade;