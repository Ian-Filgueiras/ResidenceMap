class ReservasFacade {
    constructor(reservasApplications) {
      this.reservasApplications = reservasApplications
    }
    
    adicionarReserva = async (reservas) => {
        this.reservasApplications.adicionarReserva(reservas);
    };
  
    get = async (id) => {
      return await this.reservasApplications.get(id)
    };
  
    getAll = async () => {
      return await this.reservasApplications.getAll();
    };
  }
  
  module.exports = ReservasFacade;