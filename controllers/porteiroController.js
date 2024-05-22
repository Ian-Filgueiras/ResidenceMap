const { porteiroFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let porteiros = await porteiroFacade.getAll();
    res.status(200).json(porteiros)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let porteiro = await porteiroFacade.get(id);

    res.status(200).json(porteiro)
}

module.exports.post = async (req, res) => {
    let novoPorteiro = req.body;
    let porteiroSalvo = await porteiroFacade.adicionarPorteiro(novoPorteiro);
    res.status(200).json(porteiroSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedPorteiro = req.body;
    let porteiroAtualizado = await porteiroFacade.updatePorteiro(id, updatedPorteiro);
    res.status(200).json(porteiroAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let porteiroRemovido = await porteiroFacade.deletePorteiro(id);
    res.status(200).json(porteiroRemovido)
}

