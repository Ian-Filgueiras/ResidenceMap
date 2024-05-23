const { comunicacaoFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let comunicacoes = await comunicacaoFacade.getAll();
    res.status(200).json(comunicacoes)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let comunicacao = await comunicacaoFacade.get(id);

    res.status(200).json(comunicacao)
}

module.exports.post = async (req, res) => {
    let novaComunicacao = req.body;
    let comunicacaoSalvo = await comunicacaoFacade.adicionarComunicacao(novaComunicacao);
    res.status(200).json(comunicacaoSalvo)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let comunicacaoRemovido = await comunicacaoFacade.deleteComunicacao(id);
    res.status(200).json(comunicacaoRemovido)
}

