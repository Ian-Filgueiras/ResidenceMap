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
            dataVisita: visitante.data_visita,
            idCondomino: visitante.idCondomino,
        });
    };

    get = async (nome) => {
        let visitante = await Visitante.findOne({
            where: { nome: nome },
        });

        return visitante;
    };

    getAll = async () => {
        let visitantes = await Visitante.findAll({});
        return visitantes;
    };
}

module.exports = VisitantesRepository;

