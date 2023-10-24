class Empleado {
    constructor(nombre = "", salarioBase = 0) {
      this.nombre = nombre;
      this.salarioBase = salarioBase;
    }
  
    calcularSalario(horasTrabajadas) {
      return this.salarioBase * horasTrabajadas;
    }
  }
  
  module.exports = Empleado;
  