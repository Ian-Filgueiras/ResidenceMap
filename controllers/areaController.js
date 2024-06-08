const { areaFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let areas = await areaFacade.getAll();
    res.status(200).json(areas)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let area = await areaFacade.get(id);

    res.status(200).json(area)
}

module.exports.post = async (req, res) => {
    let novoArea = req.body;
    let areaSalvo = await areaFacade.adicionarArea(novoArea);
    res.status(200).json(areaSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedArea = req.body;
    let areaAtualizado = await areaFacade.update(id, updatedArea);
    res.status(200).json(areaAtualizado)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let areaRemovido = await areaFacade.deleteArea(id);
    res.status(200).json(areaRemovido)
}

