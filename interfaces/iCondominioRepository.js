class iCondominioRepository {
    constructor() {
        if (new.target === iCondominioRepository) {
            throw new Error("A interface iCondominioRepository não pode ser instanciada.");
        }
    }

    adicionarCondominio = async (condominio) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };

    deleteCondominio = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iCondominioRepository;