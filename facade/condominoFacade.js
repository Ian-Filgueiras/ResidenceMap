class CondominoFacade {
    constructor(condominoApplications) {
      this.condominoApplications = condominoApplications
    }
    
    adicionarCondomino = async (condomino) => {
        this.condominoApplications.adicionarCondominio(condomino);
    };
  
    get = async (id) => {
      return await this.condominoApplications.get(id)
    };
  
    getAll = async () => {
      return await this.condominoApplications.getAll();
    };
  }
  
  module.exports = CondominoFacade;