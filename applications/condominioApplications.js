class CondominioApplication{
    constructor(condominioRepository){
        this.condominioRepository = condominioRepository;
    }

    adicionarCondominio = async (condominio) => {
        this.condominioRepository.adicionarCondominio(condominio);
    };
  
    get = async (id) => {
      return await this.condominioRepository.get(id)
    };
  
    getAll = async () => {
      return await this.condominioRepository.getAll();
    };
}






module.exports = CondominioApplication;