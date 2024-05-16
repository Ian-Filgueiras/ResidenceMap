class CondominoFacade {
    constructor(condominoApplications) {
      this.condominoApplications = condominoApplications
    }
    
    adicionarCondomino = async (condomino) => {
        this.condominoApplications.adicionarCondominio(condomino);
    };
  
    get = async (nome) => {
      return await this.condominoApplications.get(nome)
    };
  
    getAll = async () => {
      return await this.condominoApplications.getAll();
    };
  }
  
  module.exports = CondominoFacade;