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
    }
  }
  
  module.exports = ReservasFacade;