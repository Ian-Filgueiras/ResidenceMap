class AreaApplication {
    constructor(araeRepository) {
      this.areaRepository = araeRepository
    }
  
    adicionarArea = async (area) => {
      return await this.areaRepository.adicionarArea(area);
    };
  
    get = async (id) => {
      return await this.areaRepository.get(id)
    };
  
    getAll = async () => {
      return await this.areaRepository.getAll();
    };
  
    async update(id, updatedArea) {
      return await this.areaRepository.update(id, updatedArea);
    };
  
    async deleteArea(id) {
      return await this.areaRepository.deleteArea(id);
    };
  }
  
  module.exports = AreaApplication;