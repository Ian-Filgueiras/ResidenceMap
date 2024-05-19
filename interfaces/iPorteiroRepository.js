class iPorteiroRepository {
    constructor() {
        if (new.target === iPorteiroRepository) {
            throw new Error("A interface iPorteiroRepository não pode ser instanciada.");
        }
    }

    adicionarPorteiro = async (porteiro) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };

    deletePorteiro = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iPorteiroRepository;