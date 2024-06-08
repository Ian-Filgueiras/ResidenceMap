const IAreaRepository = require("../interfaces/iAreaRepository");
const { Area } = require("../data/dbContext");

class AreaRepository extends IAreaRepository{
    constructor(){
        super();
    }

    adicionarArea = async (area) => {
        const novaArea = await Area.create({
          descricao: area.descricao,
        });
    
        return novaArea;
      };
    
      get = async (id) => {
        let area = await Area.findOne({
          where: { id: id},
        });
    
        return area;
      };
    
      getAll = async () => {
        let areas = await Area.findAll({});
        return areas;
      };
    
      async update(id, updatedArea) {
    
        const [updatedRowCount] = await Area.update(updatedArea, {
          where: { id : id}
        });
    
        if (updatedRowCount === 0) {
          throw new Error('Area não encontrado');
        }
    
        
        const updatedAreaRecord = await Area.findOne({ where: { id } });
    
        return updatedAreaRecord;
      };

      deleteArea = async (id) => {
        let area = await Area.findOne({
          where: { id: id },
        });
        await area.destroy();
        return area;
      };
}

module.exports = AreaRepository;