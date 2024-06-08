class AreaFacade {
    constructor(areaApplication) {
      this.areaApplication = areaApplication
    }
  
    adicionarArea = async (area) => {
      return await this.areaApplication.adicionarArea(area);
    };
  
    get = async (id) => {
      return await this.areaApplication.get(id)
    };
  
    getAll = async () => {
      return await this.areaApplication.getAll();
    };
  
    async update(id, updatedArea) {
      return await this.areaApplication.update(id, updatedArea);
    };
  
    async deleteArea(id) {
      return await this.areaApplication.deleteArea(id);
    };
  }
  
  module.exports = AreaFacade;