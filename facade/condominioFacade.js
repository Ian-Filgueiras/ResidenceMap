class CondominioFacade{
    constructor(condominioApplication){
        this.condominioApplication = condominioApplication;
    }

    adicionarCondominio = async (condominio) => {
      this.condominioApplication.adicionarCondominio(condominio);
    };
  
    get = async (nome) => {
      return await this.condominioApplication.get(nome)
    };
  
    getAll = async () => {
      return await this.condominioApplication.getAll();
    };
}






module.exports = CondominioFacade;