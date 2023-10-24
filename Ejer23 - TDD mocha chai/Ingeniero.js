class Trabajador {
    constructor(nombre = "") {
      this.nombre = nombre;
      this.proyectos = [];
    }
  }
  
  class Ingeniero extends Trabajador {
    constructor(nombre = "", lenguajeProgramacion = "") {
      super(nombre);
      this.lenguajeProgramacion = lenguajeProgramacion;
    }
  }
  
  module.exports = Ingeniero;
  