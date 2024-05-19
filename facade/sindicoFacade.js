class SindicoFacade {
    constructor(sindicoApplications) {
      this.sindicoApplications = sindicoApplications
    }
    
    adicionarSindico = async (sindico) => {
      return await this.sindicoApplications.adicionarSindico(sindico);
    };
  
    get = async (id) => {
      return await this.sindicoApplications.get(id)
    };
  
    getAll = async () => {
      return await this.sindicoApplications.getAll();
    };

    async updateSindico(id, updatedSindico) {
      return await this.sindicoApplications.update(id, updatedSindico);
    }
  }
  
  module.exports = SindicoFacade;