class VisitanteFacade {
  constructor(visitanteApplications) {
    this.visitanteApplications = visitanteApplications
  }

  adicionarVisitante = async (visitante) => {
    return await this.visitanteApplications.adicionarVisitante(visitante);
  };

  get = async (id) => {
    return await this.visitanteApplications.get(id)
  };

  getAll = async () => {
    return await this.visitanteApplications.getAll();
  };

  async updateVisitante(id, updatedVisitante) {
    return await this.visitanteApplications.update(id, updatedVisitante);
  };

  deleteVisitante = async (id) => {
    return await this.visitanteApplications.deleteVisitante(id);
  };
}

module.exports = VisitanteFacade;