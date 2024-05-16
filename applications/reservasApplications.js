class ReservasApplication {
    constructor(reservasRepository) {
      this.reservasRepository = reservasRepository
    }
    
    adicionarReserva = async (reserva) => {
        this.reservasRepository.adicionarReserva(reserva);
    };
  
    get = async (id) => {
      return await this.reservasRepository.get(id)
    };
  
    getAll = async () => {
      return await this.reservasRepository.getAll();
    };
  }
  
  module.exports = ReservasApplication;