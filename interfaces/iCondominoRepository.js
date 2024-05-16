class iCondominoRepository{
    constructor() {
        if (new.target === iCondominoRepository) {
            throw new Error("A interface iCondominoRepository não pode ser instanciada.");
        }
    }

    adicionarCondomino = async (condomino) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iCondominoRepository;