const IReservasRepository = require("../interfaces/iReservasRepository");
const { Reservas } = require("../data/dbContext");

class ReservasRepository extends IReservasRepository {
  constructor() {
    super();
  }

  adicionarReserva = async (reservas) => {
    const novaReservas = await Reservas.create({
      data_inicio: reservas.data_inicio,
      data_fim: reservas.data_fim,
      descricao: reservas.descricao,
      idCondomino: reservas.idCondomino,
    });
  };

  get = async (nome) => {
    let reserva = await Reservas.findOne({
      where: { nome: nome },
    });

    return condomino;
  };

  getAll = async () => {
    let reservas = await Reservas.findAll({});
    return reservas;
  };
}

module.exports = ReservasRepository;