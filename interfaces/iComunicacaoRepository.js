class iComunicacaoRepository {
    constructor() {
        if (new.target === iComunicacaoRepository) {
            throw new Error("A interface iComunicacaoRepository não pode ser instanciada.");
        }
    }

    adicionarComunicacao = async (comunicacao) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (idPorteiro) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };

    deleteComunicacao = async (id) => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = iComunicacaoRepository;