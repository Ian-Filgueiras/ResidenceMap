const { reservasFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
    let reservas = await reservasFacade.getAll();
    res.status(200).json(reservas)
}

module.exports.get = async (req, res) => {
    let id = req.params.id;
    let reserva = await reservasFacade.get(id);

    res.status(200).json(reserva)
}

module.exports.post = async (req, res) => {
    let novaReserva = req.body;
    let reservasSalvo = await reservasFacade.adicionarReserva(novaReserva);
    res.status(200).json(reservasSalvo)
}

module.exports.put = async (req, res) => {
    let id = req.params.id;
    let updatedReservas = req.body;
    let reservaAtualizada = await reservasFacade.updateReservas(id, updatedReservas);
    res.status(200).json(reservaAtualizada)
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    let reservaRemovido = await reservasFacade.deleteReserva(id);
    res.status(200).json(reservaRemovido)
}

