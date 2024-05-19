class PorteiroApplication {
  constructor(porteiroRepository) {
    this.porteiroRepository = porteiroRepository
  }

  adicionarPorteiro = async (porteiro) => {
    return await this.porteiroRepository.adicionarPorteiro(porteiro);
  };

  get = async (id) => {
    return await this.porteiroRepository.get(id)
  };

  getAll = async () => {
    return await this.porteiroRepository.getAll();
  };

  async update(id, updatedPorteiro) {
    return await this.porteiroRepository.update(id, updatedPorteiro);
  };

  async deletePorteiro(id) {
    return await this.porteiroRepository.deletePorteiro(id);
  };
}

module.exports = PorteiroApplication;