class ReservasFacade {
  constructor(reservasApplications) {
    this.reservasApplications = reservasApplications
  }

  adicionarReserva = async (reservas) => {
    return await this.reservasApplications.adicionarReserva(reservas);
  };

  get = async (id) => {
    return await this.reservasApplications.get(id)
  };

  getAll = async () => {
    return await this.reservasApplications.getAll();
  };

  async updateReservas(id, updatedReservas) {
    return await this.reservasApplications.update(id, updatedReservas);
  };

  deleteReserva = async (id) => {
    return await this.reservasApplications.deleteReserva(id);
  };

  async buscarReservaArea(reserva, area) {
    return await this.reservasApplications.buscarReservaArea(reserva,area)
  }
}

module.exports = ReservasFacade;