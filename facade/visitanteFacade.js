class VisitanteFacade {
    constructor(visitanteApplications) {
      this.visitanteApplications = visitanteApplications
    }
    
    adicionarVisitante = async (visitante) => {
        this.visitanteApplications.adicionarVisitante(visitante);
    };
  
    get = async (id) => {
      return await this.visitanteApplications.get(id)
    };
  
    getAll = async () => {
      return await this.visitanteApplications.getAll();
    };
  }
  
  module.exports = VisitanteFacade;