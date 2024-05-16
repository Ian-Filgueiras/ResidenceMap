class CondominoApplication {
    constructor(condominoRepository) {
      this.condominoRepository = condominoRepository
    }
    
    adicionarCondomino = async (condomino) => {
        this.condominoRepository.adicionarCondominio(condomino);
    };
  
    get = async (nome) => {
      return await this.condominoRepository.get(nome)
    };
  
    getAll = async () => {
      return await this.condominoRepository.getAll();
    };
  }
  
  module.exports = CondominoApplication;