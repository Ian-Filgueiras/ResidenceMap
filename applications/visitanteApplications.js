class VisitanteApplication {
  constructor(visitanteRepository) {
    this.visitanteRepository = visitanteRepository
  }

  adicionarVisitante = async (visitante) => {
    return await this.visitanteRepository.adicionarVisitante(visitante);
  };

  get = async (id) => {
    return await this.visitanteRepository.get(id)
  };

  getAll = async () => {
    return await this.visitanteRepository.getAll();
  };

  async update(id, updatedVisitante) {
    return await this.visitanteRepository.update(id, updatedVisitante);
  };

  async deleteVisitante(id) {
    return await this.visitanteRepository.deleteVisitante(id);
  };
}

module.exports = VisitanteApplication;