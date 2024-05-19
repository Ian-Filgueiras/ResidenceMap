class SindicoApplication {
    constructor(sindicoRepository) {
      this.sindicoRepository = sindicoRepository
    }
    
    adicionarSindico = async (sindico) => {
      return await this.sindicoRepository.adicionarSindico(sindico);
    };
  
    get = async (id) => {
      return await this.sindicoRepository.get(id)
    };
  
    getAll = async () => {
      return await this.sindicoRepository.getAll();
    };

    async update(id, updatedSindico) {
      return await this.sindicoRepository.update(id, updatedSindico);
    }
  }
  
  module.exports = SindicoApplication;