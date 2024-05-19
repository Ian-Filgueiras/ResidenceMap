class CondominioApplication{
    constructor(condominioRepository){
        this.condominioRepository = condominioRepository;
    }

    adicionarCondominio = async (condominio) => {
      return this.condominioRepository.adicionarCondominio(condominio);
    };
  
    get = async (id) => {
      return await this.condominioRepository.get(id)
    };
  
    getAll = async () => {
      return await this.condominioRepository.getAll();
    };

    async update(id, updatedCondominio) {
      return await this.condominioRepository.update(id, updatedCondominio);
    }
}


module.exports = CondominioApplication;