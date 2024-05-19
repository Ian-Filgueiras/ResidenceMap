class CondominioFacade{
    constructor(condominioApplication){
        this.condominioApplication = condominioApplication;
    }

    adicionarCondominio = async (condominio) => {
      return this.condominioApplication.adicionarCondominio(condominio);
    };
  
    get = async (id) => {
      return await this.condominioApplication.get(id)
    };
  
    getAll = async () => {
      return await this.condominioApplication.getAll();
    };

    async updateCondominio(id, updatedCondominio) {
      return await this.condominioApplications.update(id, updatedCondominio);
    }
}






module.exports = CondominioFacade;