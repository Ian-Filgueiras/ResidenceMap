class CondominoApplication {
    constructor(condominoRepository) {
      this.condominoRepository = condominoRepository
    }
    
    adicionarCondomino = async (condomino) => {
      return await this.condominoRepository.adicionarCondomino(condomino);
    };
  
    get = async (id) => {
      return await this.condominoRepository.get(id)
    };
  
    getAll = async () => {
      return await this.condominoRepository.getAll();
    };

    async update(id, updatedCondomino) {
      return await this.condominoRepository.update(id, updatedCondomino);
    }
  }
  
  module.exports = CondominoApplication;