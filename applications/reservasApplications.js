const ReservaFactory = require("../factories/reservaFactorie");

class ReservasApplication {
  constructor(reservasRepository, areaRepository) {
    this.reservasRepository = reservasRepository;
    this.areaRepository = areaRepository;
  }

  adicionarReserva = async (reserva) => {
    return await this.reservasRepository.adicionarReserva(reserva);
  };

  get = async (id) => {
    return await this.reservasRepository.get(id)
  };

  getAll = async () => {
    return await this.reservasRepository.getAll();
  };

  async update(id, updatedReservas) {
    return await this.reservasRepository.update(id, updatedReservas);
  };

  async deleteReserva(id) {
    return await this.reservasRepository.deleteReserva(id);
  };

  async buscarReservaArea(reserva) {
   
    let reservaDb = await this.reservasRepository.buscarPorData(reserva.data_inicio);
    let areaDb = await this.areaRepository.get(reserva.idArea);

    let factory = new ReservaFactory(reservaDb, areaDb).novaReserva();
    let reservaFactory = factory.seReservado();
    return reservaFactory;
  }
}

module.exports = ReservasApplication;