class VisitanteApplication {
    constructor(visitanteRepository) {
      this.visitanteRepository = visitanteRepository
    }
    
    adicionarVisitante = async (visitante) => {
        this.visitanteRepository.adicionarVisitante(visitante);
    };
  
    get = async (id) => {
      return await this.visitanteRepository.get(id)
    };
  
    getAll = async () => {
      return await this.visitanteRepository.getAll();
    };
  }
  
  module.exports = VisitanteApplication;