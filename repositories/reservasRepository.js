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

    return novaReservas;
  };

  get = async (id) => {
    let reserva = await Reservas.findOne({
      where: { id: id },
    });

    return reserva;
  };

  getAll = async () => {
    let reservas = await Reservas.findAll({});
    return reservas;
  };

  async update(id, updatedReserva) {
    
    const [updatedRowCount] = await Reserva.update(updatedReserva, {
      where: { id : id }
    });

    if (updatedRowCount === 0) {
      throw new Error('Reserva não encontrada');
    }

    const updatedReservaRecord = await Reserva.findOne({ where: { id } });

    return updatedReservaRecord;
  };

  deleteReserva = async (id) => {
    let reserva = await Reserva.findOne({
      where: { id: id },
    });
    await reserva.destroy();
    return reserva;
  };
}

module.exports = ReservasRepository;