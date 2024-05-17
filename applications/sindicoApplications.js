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
  }
  
  module.exports = SindicoApplication;