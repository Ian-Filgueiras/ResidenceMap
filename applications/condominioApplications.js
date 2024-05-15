class CondominioApplication{
    constructor(condominioRepository){
        this.condominioRepository = condominioRepository;
    }

    adicionarCondominio = async (condominio) => {
        this.condominioRepository.adicionarCondominio(condominio);
    };
  
    get = async (nome) => {
      return await this.condominioRepository.get(nome)
    };
  
    getAll = async () => {
      return await this.condominioRepository.getAll();
    };
}






module.exports = CondominioApplication;