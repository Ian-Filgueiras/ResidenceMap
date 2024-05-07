class iSindicoRepository{
    constructor() {
        if (new.target === iSindicoRepository) {
            throw new Error("A interface iSindicoRepository não pode ser instanciada.");
        }
    }

    adicionarSindico = async (sindico) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (nome) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iSindicoRepository;