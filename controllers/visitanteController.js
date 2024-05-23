const { visitanteFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let visitantes = await visitanteFacade.getAll();
    res.status(200).json(visitantes)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let visitante = await visitanteFacade.get(id);

    res.status(200).json(visitante)
}

module.exports.post = async (req, res) => {
    let novoVisitante = req.body;
    let visitanteSalvo = await visitanteFacade.adicionarVisitante(novoVisitante);
    res.status(200).json(visitanteSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedVisitante = req.body;
    let visitanteAtualizado = await visitanteFacade.updateVisitante(id, updatedVisitante);
    res.status(200).json(visitanteAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let visitanteRemovido = await visitanteFacade.deleteVisitante(id);
    res.status(200).json(visitanteRemovido)
}

