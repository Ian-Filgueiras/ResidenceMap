class CondominoFacade {
  constructor(condominoApplications) {
    this.condominoApplications = condominoApplications
  }

  adicionarCondomino = async (condomino) => {
    return await this.condominoApplications.adicionarCondomino(condomino);
  };

  get = async (id) => {
    return await this.condominoApplications.get(id)
  };

  getAll = async () => {
    return await this.condominoApplications.getAll();
  };

  async updateCondomino(id, updatedCondomino) {
    return await this.condominoApplications.update(id, updatedCondomino);
  };

  deleteCondomino = async (id) => {
    return await this.condominoApplications.delete(id);
  };
}

module.exports = CondominoFacade;