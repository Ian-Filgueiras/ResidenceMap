class SindicoApplication {
    constructor(sindicoRepository) {
      this.sindicoRepository = sindicoRepository
    }
    
    adicionarSindico = async (sindico) => {
        this.sindicoRepository.adicionarSindico(sindico);
    };
  
    get = async (nome) => {
      return await this.sindicoRepository.get(nome)
    };
  
    getAll = async () => {
      return await this.sindicoRepository.getAll();
    };
  }
  
  module.exports = SindicoApplication;