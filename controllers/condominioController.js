const { condominioFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let condominios = await condominioFacade.getAll();
    res.status(200).json(condominios)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let condominio = await condominioFacade.get(id);

    res.status(200).json(condominio)
}

module.exports.post = async (req, res) => {
    let novoCondominio = req.body;
    let condominioSalvo = await condominioFacade.adicionarCondominio(novoCondominio);
    res.status(200).json(condominioSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedCondominio = req.body;
    let condominioAtualizado = await condominioFacade.updateCondominio(id, updatedCondominio);
    res.status(200).json(condominioAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let condominioRemovido = await condominioFacade.deleteCondominio(id);
    res.status(200).json(condominioRemovido)
}

