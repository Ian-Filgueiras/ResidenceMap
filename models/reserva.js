class Reserva {
    constructor(reserva, area) {
      this.reserva = reserva;
      this.area = area;
      this.reservado = false;
    }
  
    seReservado() {
      if (!this.reserva) this.reservado = true;
  
      this.reservado = false;
  
      return this.reserva;
    }
  }

module.exports = Reserva;