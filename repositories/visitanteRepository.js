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
        // Implementação real usando Sequelize
        const [updatedRowCount, [updatedVisitanteRecord]] = await Visitante.update(updatedVisitante, {
          where: { id },
          returning: true, // Para retornar essa bosta atualizada
        });
    
        if (updatedRowCount === 0) {
          throw new Error('Visitante não registrado');
        }
    
        return updatedSindicoRecord;
      }
}

module.exports = VisitantesRepository;

