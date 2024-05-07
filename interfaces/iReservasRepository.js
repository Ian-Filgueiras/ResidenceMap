class IReservasRepository {
    constructor() {
        if (new.target === IReservasRepository) {
            throw new Error("A interface IReservaRepository não pode ser instanciada.");
        }
    }

    adicionarReserva = async (reservas) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (nome) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
  }
  
  module.exports = IReservasRepository;