class ReservasApplication {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository
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
}

module.exports = ReservasApplication;