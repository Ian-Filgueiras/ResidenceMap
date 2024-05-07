class iVisitantesRepository{
    constructor() {
        if (new.target === iVisitantesRepository) {
            throw new Error("A interface iVisitantesRepository não pode ser instanciada.");
        }
    }

    adicionarVisitante = async (visitante) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (nome) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iVisitantesRepository;