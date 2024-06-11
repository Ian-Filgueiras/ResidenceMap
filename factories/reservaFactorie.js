const Reserva = require("../models/reserva");

class ReservaFactory {
  constructor(reserva, area) {
    this.reserva = reserva;
    this.area = area;
  }

  novaReserva() {
    return new Reserva(this.reserva, this.area);
  }

  
}

module.exports = ReservaFactory;