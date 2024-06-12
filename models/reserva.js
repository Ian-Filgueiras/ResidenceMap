class Reserva {
    constructor(reserva, area) {
      this.reserva = reserva;
      this.area = area;
      this.reservado = false;
    }
  
    seReservado() {
      if (!this.reserva){
        this.reservado = false;
        return this;
      } 
      
      this.reservado = true;
      return this;
    }
  }

module.exports = Reserva;