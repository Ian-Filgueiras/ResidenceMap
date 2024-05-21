const iVisitantesRepository = require("../interfaces/iVisitantesRepository");
const { Visitante } = require("../data/dbContext");

class VisitantesRepository extends iVisitantesRepository {
    constructor() {
        super();
    }

    adicionarVisitante = async (visitante) => {
        const novoVisitante = await Visitante.create({
            nome: visitante.nome,
            cpf: visitante.cpf,
            data_visita: visitante.data_visita,
            idCondomino: visitante.idCondomino,
        });

        return novoVisitante;
    };

    get = async (id) => {
        let visitante = await Visitante.findOne({
            where: { id: id },
        });

        return visitante;
    };

    getAll = async () => {
        let visitantes = await Visitante.findAll({});
        return visitantes;
    };

    async update(id, updatedVisitante) {
        const [updatedRowCount] = await Visitante.update(updatedVisitante, {
          where: { id : id}
        });
    
        if (updatedRowCount === 0) {
          throw new Error('Visitante não encontrado');
        }
    
        
        const updatedVisitanteRecord = await Visitante.findOne({ where: { id } });
    
        return updatedVisitanteRecord;
      };

    deleteVisitante = async (id) => {
        let visitante = await Visitante.findOne({
            where: { id: id },
        });
        await visitante.destroy();
        return visitante;
    };
}

module.exports = VisitantesRepository;

