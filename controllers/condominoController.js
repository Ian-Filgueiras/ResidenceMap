const { condominoFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let condominos = await condominoFacade.getAll;
    res.status(200).json(condominos)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let condomino = await condominoFacade.get(id);

    res.status(200).json(condomino)
}

module.exports.post = async (req, res) => {
    let novoCondomino = req.body;
    let condominoSalvo = await condominoFacade.adicionarCondomino(novoCondomino);
    res.status(200).json(condominoSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedCondomino = req.body;
    let condominoAtualizado = await condominoFacade.updateCondomino(id, updatedCondomino);
    res.status(200).json(condominoAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let condominoRemovido = await condominoFacade.deleteCondomino(id);
    res.status(200).json(condominoRemovido)
}

