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

  async update(id, updatedReservas) {
    // Implementação real usando Sequelize
    const [updatedRowCount, [updatedReservasRecord]] = await Reservas.update(updatedReservas, {
      where: { id },
      returning: true, // Para retornar essa bosta atualizada
    });

    if (updatedRowCount === 0) {
      throw new Error('Nenhuma reserva encontrada');
    }

    return updatedReservasRecord;
  }
}

module.exports = ReservasRepository;