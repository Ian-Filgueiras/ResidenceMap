class iAreaRepository {
    constructor() {
        if (new.target === iAreaRepository) {
            throw new Error("A interface iAreaRepository não pode ser instanciada.");
        }
    }

    adicionarArea = async (area) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (idArea) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };

    deleteArea = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iAreaRepository;