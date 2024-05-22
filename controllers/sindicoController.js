const { sindicoFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let sindicos = await sindicoFacade.getAll();
    res.status(200).json(sindicos)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let sindico = await sindicoFacade.get(id);

    res.status(200).json(sindico)
}

module.exports.post = async (req, res) => {
    let novoSindico = req.body;
    let sindicoSalvo = await sindicoFacade.adicionarSindico(novoSindico);
    res.status(200).json(sindicoSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedSindico = req.body;
    let sindicoAtualizado = await sindicoFacade.updateSindico(id, updatedSindico);
    res.status(200).json(sindicoAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let sindicoRemovido = await sindicoFacade.deleteSindico(id);
    res.status(200).json(sindicoRemovido)
}

