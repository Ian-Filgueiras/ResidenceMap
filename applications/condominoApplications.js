class CondominoApplication {
    constructor(condominoRepository) {
      this.condominoRepository = condominoRepository
    }
    
    adicionarCondomino = async (condomino) => {
        this.condominoRepository.adicionarCondominio(condomino);
    };
  
    get = async (id) => {
      return await this.condominoRepository.get(id)
    };
  
    getAll = async () => {
      return await this.condominoRepository.getAll();
    };
  }
  
  module.exports = CondominoApplication;